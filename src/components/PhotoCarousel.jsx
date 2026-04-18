import { useEffect, useRef, useState } from 'react'
import './PhotoCarousel.css'

const fallbackImage = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffd4c8"/>
        <stop offset="100%" stop-color="#ffd94f"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bg)"/>
    <circle cx="980" cy="160" r="90" fill="#fff3d6" opacity="0.8"/>
    <circle cx="220" cy="620" r="110" fill="#ffffff" opacity="0.45"/>
    <text x="50%" y="48%" text-anchor="middle" font-size="54" font-family="Verdana, sans-serif" fill="#5f3c32">
      Agrega una foto bonita
    </text>
    <text x="50%" y="58%" text-anchor="middle" font-size="28" font-family="Verdana, sans-serif" fill="#6f5952">
      El carrusel mostrara tus recuerdos aqui
    </text>
  </svg>
`)}`

const initialPhotos = [
  {
    id: 1,
    title: 'Primer paseo',
    description: 'Un recuerdo para abrir el album con algo especial.',
    src: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Tarde favorita',
    description: 'Guarda fotos de salidas, cafes o cualquier momento bonito.',
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Noche memorable',
    description: 'Tambien puedes cargar enlaces de imagen nuevos desde el formulario.',
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
  },
]

const emptyForm = {
  title: '',
  description: '',
  fileName: 'Ningun archivo seleccionado',
}

let nextPhotoId = initialPhotos.length + 1

function getNextPhotoId() {
  const id = nextPhotoId
  nextPhotoId += 1
  return id
}

function PhotoCarousel() {
  const [photos, setPhotos] = useState(initialPhotos)
  const [activeIndex, setActiveIndex] = useState(0)
  const [form, setForm] = useState(emptyForm)
  const [selectedFile, setSelectedFile] = useState(null)
  const localImageUrlsRef = useRef([])
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (photos.length < 2) {
      return undefined
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % photos.length)
    }, 5000)

    return () => window.clearInterval(timerId)
  }, [photos.length])

  useEffect(() => {
    const imageUrlsRef = localImageUrlsRef

    return () => {
      imageUrlsRef.current.forEach((url) => {
        URL.revokeObjectURL(url)
      })
    }
  }, [])

  const currentPhoto = photos[activeIndex]

  function goToSlide(index) {
    setActiveIndex(index)
  }

  function showPrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? photos.length - 1 : currentIndex - 1,
    )
  }

  function showNext() {
    setActiveIndex((currentIndex) => (currentIndex + 1) % photos.length)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!selectedFile) {
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    localImageUrlsRef.current.push(objectUrl)

    const derivedTitle = selectedFile.name.replace(/\.[^/.]+$/, '')
    const nextPhoto = {
      id: getNextPhotoId(),
      title: form.title.trim() || derivedTitle,
      description: form.description.trim() || 'Nuevo recuerdo agregado al carrusel.',
      src: objectUrl,
    }

    setPhotos((currentPhotos) => [...currentPhotos, nextPhoto])
    setActiveIndex(photos.length)
    setForm(emptyForm)
    setSelectedFile(null)

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0] ?? null

    setSelectedFile(file)
    setForm((currentForm) => ({
      ...currentForm,
      title: file && !currentForm.title ? file.name.replace(/\.[^/.]+$/, '') : currentForm.title,
      fileName: file ? file.name : emptyForm.fileName,
    }))
  }

  return (
    <div className="panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Momentos</p>
          <h2>Carrusel para guardar tus fotos favoritas</h2>
        </div>
        <span className="section-badge">{photos.length} fotos</span>
      </div>

      <div className="carousel-layout">
        <article className="carousel-stage">
          <div className="carousel-media">
            <img
              src={currentPhoto.src || fallbackImage}
              alt={currentPhoto.title}
              onError={(event) => {
                event.currentTarget.src = fallbackImage
              }}
            />
          </div>

          <div className="carousel-copy">
            <div>
              <p className="slide-counter">
                {String(activeIndex + 1).padStart(2, '0')} /{' '}
                {String(photos.length).padStart(2, '0')}
              </p>
              <h3>{currentPhoto.title}</h3>
              <p>{currentPhoto.description}</p>
            </div>

            <div className="carousel-actions">
              <button type="button" onClick={showPrevious}>
                Anterior
              </button>
              <button type="button" onClick={showNext}>
                Siguiente
              </button>
            </div>
          </div>

          <div className="carousel-dots" aria-label="Selector de fotos">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                className={index === activeIndex ? 'is-active' : ''}
                onClick={() => goToSlide(index)}
                aria-label={`Ver foto ${index + 1}`}
              />
            ))}
          </div>
        </article>

        <form className="carousel-form" onSubmit={handleSubmit}>
          <h3>Agregar nueva foto</h3>

          <div className="file-picker">
            <button
              type="button"
              className="secondary-button"
              onClick={() => fileInputRef.current?.click()}
            >
              Elegir foto desde mis archivos
            </button>

            <span>{form.fileName}</span>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <label>
            Titulo
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Ej. Noche especial"
            />
          </label>

          <label>
            Descripcion
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              placeholder="Un detalle corto del momento"
            />
          </label>

          <button type="submit" className="primary-button">
            Guardar foto en el carrusel
          </button>
        </form>
      </div>
    </div>
  )
}

export default PhotoCarousel
