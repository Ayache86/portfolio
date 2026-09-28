import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <div className="contact-content">

          <div className="contact-text">
            <p className="section-label">Contato</p>

            <h2>Vamos conversar?</h2>

            <p>
              Estou sempre aberto a novas conexões profissionais,
              oportunidades e conversas sobre tecnologia, infraestrutura,
              desenvolvimento, Cloud, automação e observabilidade.
            </p>

            <p>
              Você pode entrar em contato comigo pelo LinkedIn,
              GitHub ou e-mail.
            </p>

            <div className="contact-actions">

              <a
                href="https://www.linkedin.com/in/brunoayache"
                target="_blank"
                rel="noreferrer"
                className="contact-button contact-primary"
              >
                LinkedIn
                <span>↗</span>
              </a>

              <a
                href="https://github.com/Ayache86"
                target="_blank"
                rel="noreferrer"
                className="contact-button"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                href="mailto:ayache.bruno@gmail.com"
                className="contact-button"
              >
                E-mail
                <span>→</span>
              </a>

            </div>
          </div>

          <div className="contact-terminal">

            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>

              <p>bruno@portfolio:~</p>
            </div>

            <div className="terminal-body">
              <p>
                <span className="terminal-symbol">$</span>
                {' '}whoami
              </p>

              <p className="terminal-result">
                Bruno Ayache
              </p>

              <p>
                <span className="terminal-symbol">$</span>
                {' '}cat focus.txt
              </p>

              <p className="terminal-result">
                Cloud · Automação · Observabilidade · Desenvolvimento · SRE
              </p>

              <p>
                <span className="terminal-symbol">$</span>
                {' '}status
              </p>

              <p className="terminal-success">
                Disponível para novas conexões profissionais.
              </p>

              <p className="terminal-command">
                <span className="terminal-symbol">$</span>
                <span className="terminal-cursor"></span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact