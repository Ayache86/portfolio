import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <p className="section-label">Competências</p>
          <h2>Conhecimentos técnicos</h2>

          <p>
            Tecnologias e áreas que fazem parte da minha experiência
            profissional, estudos e projetos em desenvolvimento.
          </p>
        </div>

        <div className="skills-grid">
          <article className="skill-card">
            <span className="skill-number">01</span>
            <h3>Suporte &amp; Infraestrutura</h3>

            <div className="skill-tags">
              <span>Suporte Técnico</span>
              <span>Infraestrutura</span>
              <span>Windows</span>
              <span>Linux</span>
              <span>Gestão de Equipamentos</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">02</span>
            <h3>Observabilidade &amp; Monitoramento</h3>

            <div className="skill-tags">
              <span>Zabbix</span>
              <span>Grafana</span>
              <span>ELK Stack</span>
              <span>Elasticsearch</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">03</span>
            <h3>Cloud &amp; Automação</h3>

            <div className="skill-tags">
              <span>Cloud Computing</span>
              <span>Power Automate</span>
              <span>Microsoft Graph API</span>
              <span>Automação de Processos</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">04</span>
            <h3>Desenvolvimento</h3>

            <div className="skill-tags">
              <span>JavaScript</span>
              <span>React</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skills