import './Footer.css'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#top" className="footer-logo">
          Bruno<span>.</span>
        </a>

        <p>
          © {currentYear} Bruno Ayache. Desenvolvido com React.
        </p>

        <a href="#top" className="back-to-top">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer