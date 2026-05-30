import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        background: scrolled
          ? 'rgba(8,12,16,0.95)'
          : 'rgba(8,12,16,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid rgba(255,255,255,0.04)',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <div className="nav-logo">Arthur Matos</div>
      <div className="nav-links">
        <a href="#stack">Stack</a>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </div>
      <div className="nav-status">
        <div className="status-dot" />
        Disponível para freela
      </div>
    </motion.nav>
  )
}