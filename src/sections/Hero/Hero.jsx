import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Olá, eu sou</p>

        <h1>
          Bruno <span>Ayache</span>
        </h1>

        <h2>Analista de Suporte &amp; Infraestrutura</h2>

        <p className="hero-description">
          Profissional de tecnologia com experiência em suporte,
          infraestrutura e ambientes corporativos, em constante evolução
          para desenvolvimento, automação, Cloud e SRE.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Ver projetos
          </a>

          <a href="#contact" className="btn btn-secondary">
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero