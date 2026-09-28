import './Header.css'

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#top" className="logo">
          Bruno<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">Sobre</a>
          <a href="#experience">Experiência</a>
          <a href="#skills">Competências</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>
    </header>
  )
}

export default Header