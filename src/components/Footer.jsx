import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-text">
        © {new Date().getFullYear()} <span className="footer-accent">Arthur Matos</span> — Todos os direitos reservados
      </div>
      <div className="footer-text">
        React + <span className="footer-accent">Supabase</span> + ❤
      </div>
    </motion.footer>
  )
}