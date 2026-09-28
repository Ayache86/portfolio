import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        <div className="section-header">
          <p className="section-label">Projetos</p>

          <h2>Transformando conhecimento em prática</h2>

          <p>
            Projetos pessoais utilizados para estudar, experimentar,
            documentar e aplicar tecnologias em cenários práticos.
          </p>
        </div>

        <div className="projects-grid">

          {/* PORTFÓLIO */}
          <article className="project-card project-featured">
            <div className="project-top">
              <span className="project-status project-status-active">
                Ativo
              </span>

              <span className="project-number">01</span>
            </div>

            <h3>Portfólio Profissional</h3>

            <p className="project-description">
              Desenvolvimento deste portfólio profissional como aplicação
              prática de desenvolvimento web, versionamento de código,
              responsividade e publicação de aplicações.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Vite</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </article>

          {/* L.E.O.N.A. */}
          <article className="project-card">
            <div className="project-top">
              <span className="project-status">
                Em desenvolvimento
              </span>

              <span className="project-number">02</span>
            </div>

            <h3>Projeto L.E.O.N.A.</h3>

            <p className="project-subtitle">
              Logical Engine for Operations, Navigation &amp; Assistance
            </p>

            <p className="project-description">
              Projeto de assistente pessoal inteligente voltado à exploração
              de automação, integrações, APIs, inteligência artificial e
              interação entre diferentes dispositivos e serviços.
            </p>

            <div className="project-tags">
              <span>IA</span>
              <span>Automação</span>
              <span>APIs</span>
              <span>Integrações</span>
            </div>
          </article>

          {/* HOME LAB */}
          <article className="project-card">
            <div className="project-top">
              <span className="project-status project-status-planned">
                Planejado
              </span>

              <span className="project-number">03</span>
            </div>

            <h3>Home Lab</h3>

            <p className="project-description">
              Ambiente de laboratório planejado para experimentação com
              servidores, Linux, redes, virtualização e serviços de
              infraestrutura.
            </p>

            <div className="project-tags">
              <span>Linux</span>
              <span>Infraestrutura</span>
              <span>Redes</span>
              <span>Virtualização</span>
            </div>
          </article>

          {/* OBSERVABILITY */}
          <article className="project-card">
            <div className="project-top">
              <span className="project-status project-status-planned">
                Planejado
              </span>

              <span className="project-number">04</span>
            </div>

            <h3>Observability Lab</h3>

            <p className="project-description">
              Laboratório planejado para estudos de monitoramento,
              métricas, logs, disponibilidade de serviços e práticas
              de observabilidade.
            </p>

            <div className="project-tags">
              <span>Zabbix</span>
              <span>Grafana</span>
              <span>Elasticsearch</span>
              <span>ELK Stack</span>
            </div>
          </article>

          {/* N.E.X.U.S. */}
          <article className="project-card">
            <div className="project-top">
              <span className="project-status project-status-active">
                Ativo
              </span>

              <span className="project-number">05</span>
            </div>

            <h3>PROJECT N.E.X.U.S.</h3>

            <p className="project-subtitle">
              Network for Entertainment, eXploration, Unity &amp; Sharing
            </p>

            <p className="project-description">
              Projeto de organização e desenvolvimento de uma comunidade
              digital reunindo tecnologia, games, criação de conteúdo,
              projetos e espaços de colaboração.
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