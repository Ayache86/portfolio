import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">

        <div className="section-header">
          <p className="section-label">Competências</p>

          <h2>Conhecimentos técnicos</h2>

          <p>
            Competências construídas ao longo da minha experiência
            profissional, formação acadêmica, cursos e projetos pessoais.
          </p>
        </div>

        <div className="skills-grid">

          <article className="skill-card">
            <span className="skill-number">01</span>

            <p className="skill-level">Experiência profissional</p>

            <h3>Suporte &amp; Infraestrutura</h3>

            <div className="skill-tags">
              <span>Suporte Técnico</span>
              <span>Help Desk</span>
              <span>Suporte Remoto</span>
              <span>Hardware</span>
              <span>Windows</span>
              <span>Redes</span>
              <span>Active Directory</span>
              <span>Gestão de Equipamentos</span>
              <span>Monitoramento</span>
              <span>pfSense</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">02</span>

            <p className="skill-level">Experiência profissional</p>

            <h3>Sistemas &amp; Dados</h3>

            <div className="skill-tags">
              <span>ERP</span>
              <span>PostgreSQL</span>
              <span>Paradox</span>
              <span>Sistemas Corporativos</span>
              <span>Microsoft Office</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">03</span>

            <p className="skill-level">Formação &amp; Cursos</p>

            <h3>Desenvolvimento &amp; Banco de Dados</h3>

            <div className="skill-tags">
              <span>Python</span>
              <span>MySQL</span>
              <span>Oracle SQL</span>
              <span>PL/SQL</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>Linux</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">04</span>

            <p className="skill-level">Estudos &amp; Projetos</p>

            <h3>Cloud, Automação &amp; Observabilidade</h3>

            <div className="skill-tags">
              <span>Cloud Computing</span>
              <span>Automação</span>
              <span>Observabilidade</span>
              <span>Zabbix</span>
              <span>Grafana</span>
              <span>Elasticsearch</span>
              <span>ELK Stack</span>
              <span>SRE</span>
            </div>
          </article>

          <article className="skill-card">
            <span className="skill-number">05</span>

            <p className="skill-level">Projeto deste portfólio</p>

            <h3>Desenvolvimento Moderno</h3>

            <div className="skill-tags">
              <span>React</span>
              <span>Vite</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>GitHub Pages</span>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Skills