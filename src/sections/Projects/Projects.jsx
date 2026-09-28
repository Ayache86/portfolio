import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <p className="section-label">Projetos</p>

          <h2>Projetos em desenvolvimento</h2>

          <p>
            Projetos utilizados para aplicar na prática conhecimentos de
            infraestrutura, desenvolvimento, automação, observabilidade,
            Cloud e inteligência artificial.
          </p>
        </div>

        <div className="projects-grid">
          <article className="project-card project-featured">
            <div className="project-top">
              <span className="project-status">Em desenvolvimento</span>
              <span className="project-number">01</span>
            </div>

            <h3>Projeto L.E.O.N.A.</h3>

            <p className="project-subtitle">
              Logical Engine for Operations, Navigation &amp; Assistance
            </p>

            <p className="project-description">
              Projeto de assistente inteligente desenvolvido para explorar
              automação, integrações, APIs, inteligência artificial e
              interação entre diferentes dispositivos e serviços.
            </p>

            <div className="project-tags">
              <span>IA</span>
              <span>Automação</span>
              <span>APIs</span>
              <span>Integrações</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-top">
              <span className="project-status">Planejamento</span>
              <span className="project-number">02</span>
            </div>

            <h3>Home Lab</h3>

            <p className="project-description">
              Ambiente de laboratório dedicado a estudos e experimentação
              com infraestrutura, redes, servidores, virtualização e Linux.
            </p>

            <div className="project-tags">
              <span>Linux</span>
              <span>Infraestrutura</span>
              <span>Redes</span>
              <span>Virtualização</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-top">
              <span className="project-status">Planejamento</span>
              <span className="project-number">03</span>
            </div>

            <h3>Observability Lab</h3>

            <p className="project-description">
              Laboratório dedicado ao estudo de monitoramento,
              observabilidade, métricas, logs e acompanhamento da
              disponibilidade de serviços.
            </p>

            <div className="project-tags">
              <span>Zabbix</span>
              <span>Grafana</span>
              <span>ELK Stack</span>
              <span>Elasticsearch</span>
            </div>
          </article>

          <article className="project-card">
            <div className="project-top">
              <span className="project-status">Ativo</span>
              <span className="project-number">04</span>
            </div>

            <h3>PROJECT N.E.X.U.S.</h3>

            <p className="project-subtitle">
              Network for Entertainment, eXploration, Unity &amp; Sharing
            </p>

            <p className="project-description">
              Projeto de comunidade digital reunindo tecnologia, games,
              conteúdo, projetos e espaços de colaboração e interação.
            </p>

            <div className="project-tags">
              <span>Comunidade</span>
              <span>Discord</span>
              <span>Tecnologia</span>
              <span>Organização</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Projects