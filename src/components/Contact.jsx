import { useState } from 'react'

// ── EDITE: seus dados de contato ────────────────────────────────────────────
const MY_EMAIL  = 'arthur.assismatos@gmail.com'
// Coloque seu número com DDI+DDD, ex: 5511999999999
const WHATSAPP  = '5511937739808'
const LINKEDIN  = 'https://www.linkedin.com/in/arthur-matos-108713295/'
const GITHUB    = 'hhttps://github.com/Thurs3003/ArthurMatos-dev'

// Mensagem padrão no WhatsApp ao clicar no link
const WA_MSG    = encodeURIComponent('Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.')

const INITIAL   = { name: '', email: '', message: '' }

export default function Contact() {
  const [form,   setForm]   = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Campo obrigatório'
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'E-mail inválido'
    if (!form.message.trim()) e.message = 'Campo obrigatório'
    return e
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    try {
      // FormSubmit.co — FREE, sem backend, sem conta.
      // Na PRIMEIRA submissão, chegará um e-mail de ativação no seu Gmail.
      // Clique no link de confirmação e pronto — todas as próximas mensagens chegam normalmente.
      const res = await fetch(`https://formsubmit.co/ajax/${MY_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:     form.name,
          email:    form.email,
          message:  form.message,
          _subject: `Novo contato de ${form.name} — Portfolio`,
          _captcha: 'false',
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-num">// 04</span>
        <h2 className="section-title">Contato</h2>
        <div className="section-line" />
      </div>

      <div className="contact-wrap">
        {/* ── Info ── */}
        <div className="contact-info">
          {/* EDITE: chamada para ação */}
          <div className="contact-tagline">
            Vamos construir algo <span>incrível</span> juntos?
          </div>
          {/* EDITE: texto de disponibilidade */}
          <p className="contact-p">
            Disponível para projetos freelance de sites, landing pages, e-commerces e sistemas com Supabase. Respondo em até 24h.
          </p>
          <div className="contact-links">
            <a href={`mailto:${MY_EMAIL}`} className="contact-link">✉ {MY_EMAIL}</a>
            <a href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`} target="_blank" rel="noreferrer" className="contact-link">
              💬 WhatsApp
            </a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="contact-link">
              💼 LinkedIn
            </a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="contact-link">
              🐙 GitHub
            </a>
          </div>
        </div>

        {/* ── Form ── */}
        <div className="contact-form-wrap">
          {status === 'success' ? (
            <div className="form-success">
              <div className="form-success-icon">✅</div>
              <div className="form-success-title">Mensagem enviada!</div>
              <div className="form-success-text">
                Recebi seu e-mail e responderei em até 24h.
              </div>
              <button
                className="form-btn"
                style={{ marginTop: 32 }}
                onClick={() => setStatus('idle')}
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className={status === 'sending' ? 'form-sending' : ''}>
              <div className="form-group">
                <label className="form-label">Nome</label>
                <input
                  name="name"
                  type="text"
                  className={`form-input${errors.name ? ' error' : ''}`}
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group" style={{ marginTop: 16 }}>
                <label className="form-label">E-mail</label>
                <input
                  name="email"
                  type="email"
                  className={`form-input${errors.email ? ' error' : ''}`}
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group" style={{ marginTop: 16 }}>
                <label className="form-label">Projeto</label>
                <textarea
                  name="message"
                  className={`form-input${errors.message ? ' error' : ''}`}
                  placeholder="Me conta sobre seu projeto..."
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              {status === 'error' && (
                <p style={{ fontSize: 12, color: '#FF6B6B', marginTop: 12 }}>
                  Erro ao enviar. Tente novamente ou use o e-mail diretamente.
                </p>
              )}

              <button type="submit" className="form-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Enviar mensagem →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
