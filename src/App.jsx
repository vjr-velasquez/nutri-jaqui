import './App.css'
import {
  DashboardIntro,
  DatesTable,
  Footer,
  PhotoCarousel,
  RatingsPanel,
  Sidebar,
  SongsPanel,
} from './components'

const sidebarItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'fechas', label: 'Fechas' },
  { id: 'momentos', label: 'Momentos' },
  { id: 'canciones', label: 'Canciones dedicadas' },
  { id: 'calificaciones', label: 'Calificaciones' },
]

function App() {
  return (
    <div className="app-shell">
      <Sidebar items={sidebarItems} />

      <main className="app-main">
        <section id="inicio" className="content-section">
          <DashboardIntro />
        </section>

        <section id="fechas" className="content-section">
          <DatesTable />
        </section>

        <section id="momentos" className="content-section">
          <PhotoCarousel />
        </section>

        <section id="canciones" className="content-section">
          <SongsPanel />
        </section>

        <section id="calificaciones" className="content-section">
          <RatingsPanel />
        </section>

        <Footer />
      </main>
    </div>
  )
}

export default App
