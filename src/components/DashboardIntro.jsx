import './DashboardIntro.css'

const highlights = [
  { value: '4', label: 'Recuerdos guardados' },
  { value: 'Cargando muchos mas ....', label: 'Planes listos para repetir' },
  { value: '100%', label: 'Detalles hechos con cariño' },
]

function DashboardIntro() {
  return (
    <div className="dashboard-intro">
      <div className="dashboard-copy">
        <p className="eyebrow">Nutri-jaqui</p>
        <h1>Creando un espacio para momentos especiales</h1>
        <p className="intro-text">
          Nuestros mejores momentos han sido estando juntos
        </p>
      </div>

      <div className="highlight-grid">
        {highlights.map((item) => (
          <article key={item.label} className="highlight-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </div>
  )
}

export default DashboardIntro
