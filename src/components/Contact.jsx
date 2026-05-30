import { useState } from 'react'
import { motion } from 'framer-motion'

const MY_EMAIL = 'arthur.assismatos@gmail.com'
const WHATSAPP = '5511937739808'
const LINKEDIN = 'https://www.linkedin.com/in/arthur-matos-108713295/'
const GITHUB   = 'https://github.com/Thurs3003'
const WA_MSG   = encodeURIComponent('Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.')
const INITIAL  = { name: '', email: '', message: '' }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

export default function Contact() {
  const [form,   setForm]   = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const e = {}
    if (!form.name.trim())                e.name    = 'Campo obrigatório'
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email   = 'E-mail inválido'
    if (!form.message.trim())             e.message = 'Campo obrigatório'
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
      if (res.ok) { setStatus('success'); setForm(INITIAL) }
      else          setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">

      {/* Header */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="section-num">// 04</span>
        <h2 className="section-title">Contato</h2>
        <div className="section-line" />
      </motion.div>

      <div className="contact-wrap">

        {/* Info — entra da esquerda */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="contact-tagline">
            Vamos construir algo <span>incrível</span> juntos?
          </div>
          <p className="contact-p">
            Disponível para projetos freelance de sites, landing pages, e-commerces e sistemas com Supabase. Respondo em até 24h.
          </p>

          {/* Links com stagger */}
          <motion.div
            className="contact-links"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
          >
            {[
              { href: `mailto:${MY_EMAIL}`,                            label: `✉ ${MY_EMAIL}` },
              { href: `https://wa.me/${WHATSAPP}?text=${WA_MSG}`,      label: '💬 WhatsApp', external: true },
              { href: LINKEDIN,                                         label: '💼 LinkedIn',  external: true },
              { href: GITHUB,                                           label: '🐙 GitHub',    external: true },
            ].map(link => (
              <motion.a
                key={link.href}
                href={link.href}
                className="contact-link"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show:   { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Form — entra da direita */}
        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          {status === 'success' ? (
            <motion.div
              className="form-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="form-success-icon">✅</div>
              <div className="form-success-title">Mensagem enviada!</div>
              <div className="form-success-text">Recebi seu e-mail e responderei em até 24h.</div>
              <button className="form-btn" style={{ marginTop: 32 }} onClick={() => setStatus('idle')}>
                Enviar outra mensagem
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className={status === 'sending' ? 'form-sending' : ''}>
              <div className="form-group">
                <label className="form-label">Nome</label>
                <input
                  name="name" type="text"
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
                  name="email" type="email"
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

              <motion.button
                type="submit"
                className="form-btn"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensagem →'}
              </motion.button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  )
}