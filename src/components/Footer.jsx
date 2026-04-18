import './Footer.css'

function Footer() {
  return (
    <footer className="footer-panel">
      <div className="footer-copy">
        <p className="section-kicker">Footer</p>
        <h2>Un cierre con invitacion para aceptar otra cita</h2>
        <p>
          Deseas seguir teniendo muchas noches de peliculas como estas? Acepta otra cita y sigamos disfrutando de momentos juntos.
        </p>
      </div>

      <div className="footer-actions">
        <a href="#fechas" className="footer-cta">
          <HeartIcon />
          Aceptar otra cita
        </a>

        <div className="footer-socials">
          <a
            className="social-link"
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>

          <a
            className="social-link"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
            Instagram
          </a>

          <a className="social-link" href="mailto:correo@ejemplo.com" aria-label="Gmail">
            <MailIcon />
            Gmail
          </a>
        </div>
      </div>
    </footer>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-7.2-4.35-9.3-8.49C1.1 9.39 2.47 5.5 6.28 4.68c2.09-.45 4.11.34 5.72 2.34 1.61-2 3.63-2.79 5.72-2.34 3.81.82 5.18 4.71 3.58 7.83C19.2 16.65 12 21 12 21Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.49 0 .14 5.35.14 11.94c0 2.1.55 4.16 1.59 5.97L0 24l6.27-1.64a11.86 11.86 0 0 0 5.81 1.49h.01c6.59 0 11.94-5.35 11.94-11.94 0-3.19-1.24-6.19-3.51-8.43Zm-8.44 18.4h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.95 9.95 0 0 1-1.52-5.32c0-5.47 4.45-9.92 9.92-9.92 2.65 0 5.14 1.03 7.01 2.91a9.84 9.84 0 0 1 2.91 7c0 5.47-4.45 9.93-9.95 9.93Zm5.44-7.45c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.3-.78.99-.96 1.19-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.8-1.5-1.8-1.67-2.1-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.64-.93-2.25-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.51 0 1.48 1.08 2.91 1.23 3.11.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.8-.73 2.05-1.44.26-.71.26-1.32.18-1.44-.08-.12-.28-.2-.58-.35Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.93A3.88 3.88 0 0 0 3.93 7.8v8.4a3.88 3.88 0 0 0 3.87 3.87h8.4a3.88 3.88 0 0 0 3.87-3.87V7.8a3.88 3.88 0 0 0-3.87-3.87Zm8.99 1.45a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32ZM12 6.65A5.35 5.35 0 1 1 6.65 12 5.35 5.35 0 0 1 12 6.65Zm0 1.93A3.42 3.42 0 1 0 15.42 12 3.43 3.43 0 0 0 12 8.58Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l9 6.3 9-6.3V7H3Zm18 10V9.56l-8.43 5.9a1 1 0 0 1-1.14 0L3 9.56V17h18Z" />
    </svg>
  )
}

export default Footer
