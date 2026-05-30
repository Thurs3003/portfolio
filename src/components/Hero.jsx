import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        {/* Tag — aparece primeiro */}
        <motion.div className="hero-tag" {...fadeUp(0.1)}>
          // Desenvolvedor Frontend + Supabase
        </motion.div>

        {/* Título — cada linha entra em sequência */}
        <h1 className="hero-title">
          <motion.span className="line1" {...fadeUp(0.25)} style={{ display: 'block' }}>
            Criando
          </motion.span>
          <motion.span className="line2" {...fadeUp(0.4)} style={{ display: 'block' }}>
            experiências
          </motion.span>
          <motion.span className="line3" {...fadeUp(0.55)} style={{ display: 'block' }}>
            digitais.
          </motion.span>
        </h1>

        {/* Parágrafo */}
        <motion.p className="hero-desc" {...fadeUp(0.7)}>
          Desenvolvedor especializado em <span>React</span> com backend em{' '}
          <span>Supabase</span>. Entrego projetos completos — do banco de dados à
          interface — rápidos, modernos e prontos para produção.
        </motion.p>

        {/* Botões */}
        <motion.div className="hero-cta" {...fadeUp(0.85)}>
          <a href="#projects" className="btn-primary">Ver projetos →</a>
          <a href="#contact"  className="btn-secondary">Falar comigo</a>
        </motion.div>

      </div>

      {/* Contador — vem da direita */}
      <motion.div
        className="hero-counter"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 1 }}
      >
        <div className="counter-num">03</div>
        <div className="counter-label">Projetos em produção</div>
      </motion.div>

    </section>
  )
}