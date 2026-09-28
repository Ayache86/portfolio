import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <p className="section-label">Sobre mim</p>
          <h2>Construindo minha evolução na tecnologia</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Sou profissional de tecnologia com experiência em suporte
              técnico e infraestrutura, atuando na resolução de problemas,
              atendimento a usuários e manutenção de ambientes corporativos.
            </p>

            <p>
              Ao longo da minha trajetória, venho ampliando meus conhecimentos
              em Linux, Cloud, automação, observabilidade, desenvolvimento e
              práticas relacionadas a SRE.
            </p>

            <p>
              Meu objetivo é transformar essa experiência em soluções cada vez
              mais eficientes, automatizadas e escaláveis.
            </p>
          </div>

          <div className="about-highlight">
            <span>Foco atual</span>

            <h3>Evolução profissional</h3>

            <ul>
              <li>Cloud &amp; Infraestrutura</li>
              <li>Observabilidade</li>
              <li>Automação</li>
              <li>Desenvolvimento</li>
              <li>SRE</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About