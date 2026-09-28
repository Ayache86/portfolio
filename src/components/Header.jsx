import { useState } from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#top" className="logo" onClick={closeMenu}>
          Bruno<span>.</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu de navegação"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={closeMenu}>Sobre</a>
          <a href="#experience" onClick={closeMenu}>Experiência</a>
          <a href="#skills" onClick={closeMenu}>Competências</a>
          <a href="#projects" onClick={closeMenu}>Projetos</a>
          <a href="#contact" onClick={closeMenu}>Contato</a>
        </div>
      </nav>
    </header>
  )
}

export default Header