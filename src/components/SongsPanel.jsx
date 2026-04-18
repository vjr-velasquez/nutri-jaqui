import { useState } from 'react'
import './SongsPanel.css'

const initialSongs = [
  {
    id: 1,
    title: 'Perfect',
    artist: 'Ed Sheeran',
    note: 'Una cancion clasica para dedicar en una noche tranquila.',
  },
  {
    id: 2,
    title: 'Eres',
    artist: 'Cafe Tacvba',
    note: 'Ideal para una lista de canciones con un tono especial.',
  },
]

const emptyForm = {
  title: '',
  artist: '',
  note: '',
}

let nextSongId = initialSongs.length + 1

function getNextSongId() {
  const id = nextSongId
  nextSongId += 1
  return id
}

function SongsPanel() {
  const [songs, setSongs] = useState(initialSongs)
  const [form, setForm] = useState(emptyForm)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.title.trim() || !form.artist.trim()) {
      return
    }

    setSongs((currentSongs) => [
      {
        id: getNextSongId(),
        title: form.title.trim(),
        artist: form.artist.trim(),
        note: form.note.trim() || 'Nueva cancion dedicada agregada.',
      },
      ...currentSongs,
    ])

    setForm(emptyForm)
  }

  return (
    <div className="panel songs-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Canciones dedicadas</p>
          <h2>Lista para guardar temas con significado especial</h2>
        </div>
        <span className="section-badge">{songs.length} canciones</span>
      </div>

      <div className="songs-layout">
        <form className="songs-form" onSubmit={handleSubmit}>
          <h3>Agregar cancion</h3>

          <label>
            Titulo
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Ej. Mi cancion favorita"
              required
            />
          </label>

          <label>
            Artista
            <input
              type="text"
              name="artist"
              value={form.artist}
              onChange={handleChange}
              placeholder="Ej. Artista o banda"
              required
            />
          </label>

          <label>
            Nota
            <textarea
              name="note"
              value={form.note}
              onChange={handleChange}
              rows="4"
              placeholder="Por que es especial esta cancion"
            />
          </label>

          <button type="submit" className="primary-button">
            Guardar cancion
          </button>
        </form>

        <div className="songs-list">
          {songs.map((song) => (
            <article key={song.id} className="song-card">
              <p className="song-chip">Dedicada</p>
              <h3>{song.title}</h3>
              <strong>{song.artist}</strong>
              <p>{song.note}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SongsPanel
