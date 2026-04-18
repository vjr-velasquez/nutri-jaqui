import { useMemo, useState } from 'react'
import './DatesTable.css'

const dateFormatter = new Intl.DateTimeFormat('es-GT', {
  dateStyle: 'long',
})

const quickActions = [
  { label: 'Noche de peliculas hoy', note: 'Amo las noches de peliculas contigo.' },
  { label: 'Salida por cafe', note: 'Momento corto para compartir y conversar.' },
  { label: 'Cena especial', note: 'Una fecha para guardar con detalle.' },
]

const initialRecords = [
  {
    id: 1,
    date: '2026-04-10',
    title: 'Noche de peliculas del viernes',
    note: 'Nuestra primer noche de peliculas juntos.',
  },
]

const emptyForm = {
  date: '',
  title: '',
  note: '',
}

const todayIso = new Date().toISOString().slice(0, 10)
let nextRecordId = initialRecords.length + 1

function normalizeDate(value) {
  return new Date(`${value}T12:00:00`)
}

function sortRecords(records) {
  return [...records].sort(
    (left, right) => normalizeDate(right.date) - normalizeDate(left.date),
  )
}

function getNextRecordId() {
  const id = nextRecordId
  nextRecordId += 1
  return id
}

function DatesTable() {
  const [records, setRecords] = useState(sortRecords(initialRecords))
  const [form, setForm] = useState(emptyForm)

  const totalDates = useMemo(() => records.length, [records])

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function appendRecord(record) {
    setRecords((currentRecords) => sortRecords([record, ...currentRecords]))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.date || !form.title.trim()) {
      return
    }

    appendRecord({
      id: getNextRecordId(),
      date: form.date,
      title: form.title.trim(),
      note: form.note.trim() || 'Registro agregado manualmente.',
    })

    setForm(emptyForm)
  }

  function addQuickPlan(label, note) {
    appendRecord({
      id: getNextRecordId(),
      date: todayIso,
      title: label,
      note,
    })
  }

  return (
    <div className="panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Fechas</p>
          <h2>Tabla para registrar citas y planes especiales</h2>
        </div>
        <span className="section-badge">{totalDates} registros</span>
      </div>

      <div className="quick-actions">
        {quickActions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={() => addQuickPlan(action.label, action.note)}
          >
            {action.label}
          </button>
        ))}
      </div>

      <div className="dates-layout">
        <form className="dates-form" onSubmit={handleSubmit}>
          <h3>Agregar nueva fecha</h3>

          <label>
            Fecha
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Tipo de plan
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Ej. Picnic en el parque"
              required
            />
          </label>

          <label>
            Nota
            <input
              type="text"
              name="note"
              value={form.note}
              onChange={handleChange}
              placeholder="Algo bonito que quieras recordar"
            />
          </label>

          <button type="submit" className="primary-button">
            Guardar cita
          </button>
        </form>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Plan</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>{dateFormatter.format(normalizeDate(record.date))}</td>
                  <td>{record.title}</td>
                  <td>{record.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DatesTable
