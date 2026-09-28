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
          Profissional de Tecnologia da Informação com uma trajetória
          construída desde 2010 em suporte técnico, infraestrutura,
          atendimento a usuários e ambientes corporativos.
        </p>

        <p className="hero-description hero-evolution">
          Atualmente ampliando meus conhecimentos em desenvolvimento,
          automação, Cloud, observabilidade e SRE por meio de estudos
          e projetos práticos.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            Ver projetos
          </a>

          <a href="#experience" className="btn btn-secondary">
            Minha trajetória
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero