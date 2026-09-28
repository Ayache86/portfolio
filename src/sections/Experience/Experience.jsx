import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">

        <div className="section-header">
          <p className="section-label">Experiência profissional</p>

          <h2>Minha trajetória em tecnologia</h2>

          <p>
            Uma trajetória construída em diferentes ambientes de tecnologia,
            passando por suporte técnico, infraestrutura, redes, sistemas
            corporativos e atendimento a usuários.
          </p>
        </div>

        <div className="timeline">

          {/* GRUPO DREAMERS */}
          <article className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-card">
              <div className="experience-header">
                <div>
                  <h3>Analista de Suporte</h3>
                  <p className="company">Grupo Dreamers</p>
                </div>

                <span className="period">2023 — Atual</span>
              </div>

              <ul>
                <li>Suporte técnico presencial e remoto aos usuários.</li>
                <li>Configuração e preparação de notebooks.</li>
                <li>
                  Atendimento a dúvidas relacionadas aos equipamentos
                  disponibilizados pela empresa.
                </li>
                <li>
                  Monitoramento e acompanhamento de chamados por sistema
                  e e-mail.
                </li>
              </ul>
            </div>
          </article>

          {/* SOLUTIS */}
          <article className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-card">
              <div className="experience-header">
                <div>
                  <h3>Analista de Suporte</h3>
                  <p className="company">Solutis Tecnologias</p>
                  <p className="experience-context">Contrato MPRJ</p>
                </div>

                <span className="period">2022 — 2023</span>
              </div>

              <ul>
                <li>
                  Suporte aos usuários dos sistemas institucionais do
                  Ministério Público do Estado do Rio de Janeiro.
                </li>
                <li>
                  Atendimento relacionado a sistemas utilizados em processos
                  institucionais.
                </li>
                <li>
                  Monitoramento de chamados por sistema e e-mail.
                </li>
              </ul>
            </div>
          </article>

          {/* LIFE / FIOCRUZ */}
          <article className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-card">
              <div className="experience-header">
                <div>
                  <h3>Analista de Suporte</h3>
                  <p className="company">Life Tecnologia e Consultoria</p>
                  <p className="experience-context">Contrato FIOCRUZ</p>
                </div>

                <span className="period">2020 — 2021</span>
              </div>

              <ul>
                <li>Suporte técnico presencial.</li>
                <li>
                  Montagem, manutenção e configuração de microcomputadores.
                </li>
                <li>Manutenção e configuração de rede.</li>
                <li>Monitoramento da rede e de chamados.</li>
              </ul>
            </div>
          </article>

          {/* NASAJON */}
          <article className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-card">
              <div className="experience-header">
                <div>
                  <h3>Atendente de Suporte</h3>
                  <p className="company">Nasajon Sistemas</p>
                  <p className="experience-context">
                    Equipe Controller / Finanças
                  </p>
                </div>

                <span className="period">2018 — 2019</span>
              </div>

              <ul>
                <li>
                  Suporte ao sistema ERP por atendimento telefônico e
                  acesso remoto.
                </li>
                <li>
                  Atualização e correção de dados em tabelas Paradox
                  e PostgreSQL.
                </li>
                <li>
                  Primeiro lugar no ranking de atendentes por duas vezes.
                </li>
                <li>Pontuação máxima em monitoramento de atendimento.</li>
              </ul>
            </div>
          </article>

          {/* TIVIT */}
          <article className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-card">
              <div className="experience-header">
                <div>
                  <h3>Técnico de Suporte de Desktop</h3>
                  <p className="company">TIVIT</p>
                  <p className="experience-context">Contrato Petrobras</p>
                </div>

                <span className="period">2015 — 2017</span>
              </div>

              <ul>
                <li>Atendimento Help Desk aos usuários.</li>
                <li>
                  Diagnóstico de problemas e dificuldades reportadas pelos
                  usuários.
                </li>
                <li>
                  Solução de incidentes seguindo procedimentos de atendimento.
                </li>
                <li>
                  Direcionamento de chamados para as equipes responsáveis
                  quando necessário.
                </li>
              </ul>
            </div>
          </article>

          {/* PREFEITURA */}
          <article className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-card">
              <div className="experience-header">
                <div>
                  <h3>Analista de Suporte de Tecnologia da Informação</h3>
                  <p className="company">
                    Secretaria Municipal de Fazenda — Prefeitura de Duque de Caxias
                  </p>
                </div>

                <span className="period">2014 — 2015</span>
              </div>

              <ul>
                <li>Suporte técnico presencial.</li>
                <li>
                  Montagem, manutenção e configuração de microcomputadores.
                </li>
                <li>Manutenção e configuração de rede.</li>
                <li>
                  Configuração e monitoramento do servidor mensageiro Spark.
                </li>
                <li>
                  Monitoramento de tráfego de rede com pfSense e controle
                  de acesso de usuários.
                </li>
              </ul>
            </div>
          </article>

          {/* INSS */}
          <article className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-card">
              <div className="experience-header">
                <div>
                  <h3>Estagiário de Tecnologia da Informação</h3>
                  <p className="company">INSS</p>
                </div>

                <span className="period">2010 — 2012</span>
              </div>

              <ul>
                <li>Atendimento presencial aos usuários.</li>
                <li>Verificação periódica de sistemas operacionais.</li>
                <li>Atendimento relacionado à rede.</li>
                <li>Auxílio aos usuários na utilização de aplicações.</li>
                <li>
                  Solicitação de suprimentos para impressoras e
                  microcomputadores.
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