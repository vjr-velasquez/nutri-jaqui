import { useMemo, useState } from 'react'
import './RatingsPanel.css'

const ratingCategories = [
  {
    key: 'detallista',
    label: 'Detallista',
    help: 'Que tanto cuida esos pequenos detalles.',
  },
  {
    key: 'romantico',
    label: 'Romantico',
    help: 'Ideal para medir gestos bonitos y dedicados.',
  },
  {
    key: 'divertido',
    label: 'Divertido',
    help: 'Siempre cuenta si logra sacarte una sonrisa.',
  },
  {
    key: 'companero',
    label: 'Companero',
    help: 'Como se porta en citas, planes y dias normales.',
  },
]

const initialRatings = {
  detallista: 9,
  romantico: 8,
  divertido: 10,
  companero: 9,
}

function describeAverage(value) {
  if (value >= 9) {
    return 'Nivel premium: merece mas citas y mas canciones dedicadas.'
  }

  if (value >= 7) {
    return 'Muy buen promedio: el proyecto ya puede mostrarlo con orgullo.'
  }

  return 'Buen inicio: todavia hay espacio para subir la nota.'
}

function RatingsPanel() {
  const [ratings, setRatings] = useState(initialRatings)

  const average = useMemo(() => {
    const values = Object.values(ratings)
    const sum = values.reduce((total, value) => total + value, 0)
    return Math.round((sum / values.length) * 10) / 10
  }, [ratings])

  function handleChange(event) {
    const { name, value } = event.target
    setRatings((currentRatings) => ({
      ...currentRatings,
      [name]: Number(value),
    }))
  }

  return (
    <div className="panel ratings-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Calificaciones</p>
          <h2>Panel para medir como es tu novio</h2>
        </div>
        <span className="section-badge">Promedio {average}/10</span>
      </div>

      <div className="ratings-summary">
        <strong>{average}/10</strong>
        <p>{describeAverage(average)}</p>
      </div>

      <div className="ratings-grid">
        {ratingCategories.map((category) => (
          <article key={category.key} className="rating-card">
            <div className="rating-card-header">
              <div>
                <h3>{category.label}</h3>
                <p>{category.help}</p>
              </div>
              <span>{ratings[category.key]}/10</span>
            </div>

            <input
              type="range"
              min="1"
              max="10"
              name={category.key}
              value={ratings[category.key]}
              onChange={handleChange}
            />
          </article>
        ))}
      </div>
    </div>
  )
}

export default RatingsPanel
