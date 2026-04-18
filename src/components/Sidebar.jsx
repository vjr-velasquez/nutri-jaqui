import './Sidebar.css'

function Sidebar({ items }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-mark">NJ</span>
        <div>
          <p className="sidebar-label">Panel romantico</p>
          <strong>nutri-jaqui</strong>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Navegacion principal">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="sidebar-link">
            <span className="sidebar-bullet" />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="sidebar-note">
        <p>Idea base</p>
        <strong>
          Talvez no te he dado un anillo y probablemente a veces no sepa como expresar lo que siento, pero
          lo que si se es que cada dia a tu lado es un regalo y quiero seguir compartiendo momentos juntos.
          Te amo mucho, mi amor. Gracias por ser parte de mi vida y por hacerla tan especial. Eres mi compañera, mi amiga y mi amor eterno.
        </strong>
      </div>
    </aside>
  )
}

export default Sidebar
