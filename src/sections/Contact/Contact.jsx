import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <p className="section-label">Contato</p>

          <h2>Vamos conversar?</h2>

          <p className="contact-description">
            Estou aberto a novas conexões, oportunidades profissionais
            e conversas sobre tecnologia, infraestrutura, desenvolvimento,
            automação e Cloud.
          </p>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/brunoayache"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-arrow">↗</span>
            </a>

            <a
              href="https://github.com/Ayache86"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-label">GitHub</span>
              <span className="contact-arrow">↗</span>
            </a>
          </div>
        </div>

        <div className="contact-terminal">
          <div className="terminal-header">
            <span></span>
            <span></span>
            <span></span>

            <p>contact.sh</p>
          </div>

          <div className="terminal-body">
            <p>
              <span className="terminal-prompt">$</span> whoami
            </p>

            <p className="terminal-result">Bruno Ayache</p>

            <p>
              <span className="terminal-prompt">$</span> status
            </p>

            <p className="terminal-result">
              Evoluindo em tecnologia...
            </p>

            <p>
              <span className="terminal-prompt">$</span> focus
            </p>

            <p className="terminal-result">
              Cloud | Automação | Observabilidade | SRE
            </p>

            <p className="terminal-current">
              <span className="terminal-prompt">$</span>
              <span className="terminal-cursor"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact