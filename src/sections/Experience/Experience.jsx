import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <p className="section-label">Experiência profissional</p>
          <h2>Minha trajetória em tecnologia</h2>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-card">
              <div className="experience-header">
                <div>
                  <h3>Analista de Suporte N1</h3>
                  <p className="company">Grupo Dreamers</p>
                </div>

                <span className="period">2023 — Atual</span>
              </div>

              <ul>
                <li>Atendimento e suporte aos usuários.</li>
                <li>Configuração e preparação de equipamentos.</li>
                <li>Controle e organização do estoque de equipamentos.</li>
                <li>
                  Solicitação e acompanhamento de manutenção de equipamentos.
                </li>
              </ul>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-card">
              <div className="experience-header">
                <div>
                  <h3>Analista de Suporte</h3>
                  <p className="company">Solutis Tecnologias</p>
                </div>

                <span className="period">2022 — 2023</span>
              </div>

              <ul>
                <li>Atendimento e suporte técnico aos usuários.</li>
                <li>
                  Suporte relacionado a infraestrutura e ambientes
                  corporativos.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Experience