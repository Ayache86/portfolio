import './Education.css'

function Education() {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="section-header">
          <p className="section-label">Formação & Cursos</p>

          <h2>Formação acadêmica e desenvolvimento contínuo</h2>

          <p>
            Minha base acadêmica em Sistemas de Informação é complementada
            por cursos voltados ao desenvolvimento, banco de dados,
            sistemas operacionais e tecnologias web.
          </p>
        </div>

        <div className="education-content">

          <article className="degree-card">
            <div className="education-card-top">
              <span className="education-type">Graduação</span>
              <span className="education-period">2009 — 2014</span>
            </div>

            <h3>Bacharelado em Sistemas de Informação</h3>

            <p className="education-institution">
              FEUDUC — Fundação Educacional Duque de Caxias
            </p>

            <p className="education-description">
              Formação superior na área de Tecnologia da Informação
              e Sistemas de Informação.
            </p>
          </article>

          <div className="courses-area">
            <h3>Cursos complementares</h3>

            <div className="courses-grid">

              <article className="course-card">
                <span className="course-year">2024</span>

                <h4>Introdução ao Sistema Operacional Linux</h4>

                <p>Udemy</p>

                <div className="course-tags">
                  <span>Linux</span>
                  <span>Sistemas Operacionais</span>
                </div>
              </article>

              <article className="course-card">
                <span className="course-year">2023</span>

                <h4>Python &amp; MySQL</h4>

                <p>Udemy</p>

                <div className="course-tags">
                  <span>Python</span>
                  <span>MySQL</span>
                </div>
              </article>

              <article className="course-card">
                <span className="course-year">2020</span>

                <h4>Oracle PL/SQL Fundamentals Vol. I &amp; II</h4>

                <p>Udemy</p>

                <div className="course-tags">
                  <span>Oracle</span>
                  <span>SQL</span>
                  <span>PL/SQL</span>
                </div>
              </article>

              <article className="course-card">
                <span className="course-year">2023</span>

                <h4>
                  Web Design: Construa Sites com PHP, HTML, CSS e JavaScript
                </h4>

                <p>Udemy</p>

                <div className="course-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>PHP</span>
                </div>
              </article>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education