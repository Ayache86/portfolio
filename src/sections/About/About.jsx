import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        <div className="section-header">
          <p className="section-label">Sobre mim</p>

          <h2>
            Experiência construída na prática.
            Evolução construída continuamente.
          </h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              Minha trajetória em Tecnologia da Informação começou em 2010,
              atuando com atendimento a usuários e suporte técnico. Desde
              então, passei por diferentes ambientes corporativos e funções
              relacionadas a suporte, infraestrutura, redes e sistemas.
            </p>

            <p>
              Ao longo dessa trajetória, tive contato com ambientes de
              organizações como INSS, Prefeitura de Duque de Caxias,
              Petrobras, FIOCRUZ e Ministério Público do Estado do Rio de
              Janeiro, além de empresas de tecnologia e serviços.
            </p>

            <p>
              Hoje continuo utilizando essa experiência como base enquanto
              amplio meus conhecimentos em desenvolvimento, automação,
              Cloud, observabilidade e práticas relacionadas a SRE.
            </p>

            <p>
              Este portfólio também faz parte desse processo: um espaço para
              transformar estudos em projetos, documentar minha evolução e
              demonstrar na prática as tecnologias que estou aprendendo.
            </p>
          </div>

          <div className="about-highlight">
            <span>Direção profissional</span>

            <h3>Próxima etapa da jornada</h3>

            <ul>
              <li>Cloud &amp; Infraestrutura</li>
              <li>Automação</li>
              <li>Observabilidade</li>
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