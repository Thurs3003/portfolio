import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stack = [
  { icon: '⚛️', name: 'React',      role: 'Frontend'        },
  { icon: '🟨', name: 'JavaScript', role: 'Linguagem'        },
  { icon: '🟢', name: 'Supabase',   role: 'Backend / BaaS', featured: true },
  { icon: '🗄️', name: 'PostgreSQL', role: 'Banco de dados'  },
  { icon: '▲',  name: 'Vercel',     role: 'Deploy'           },
]

const skills = [
  { icon: '⚛️', name: 'React',           desc: 'Componentes, hooks, estado global e arquitetura de SPAs modernas.',                                                                         width: 90, level: 'Avançado'              },
  { icon: '🌐', name: 'HTML & CSS',       desc: 'Semântica, responsividade, animações e layouts modernos.',                                                                                  width: 92, level: 'Avançado'              },
  { icon: '⚡', name: 'JavaScript',       desc: 'ES6+, manipulação de DOM, APIs REST e lógica de aplicação.',                                                                               width: 85, level: 'Avançado'              },
  { icon: '🟢', name: 'Supabase',         desc: 'Banco de dados PostgreSQL, autenticação, storage, real-time e Row Level Security. Backend completo sem servidor dedicado.',                width: 82, level: 'Intermediário-avançado', badge: 'DESTAQUE', featured: true, green: true },
  { icon: '🗄️', name: 'PostgreSQL',       desc: 'Modelagem de dados, queries, relacionamentos e políticas de segurança via Supabase.',                                                      width: 75, level: 'Intermediário',         badge: 'DESTAQUE', featured: true, green: true },
  { icon: '▲',  name: 'Next.js & Vercel', desc: 'Deploy, SSR, rotas e otimização de performance em produção.',                                                                              width: 78, level: 'Intermediário'          },
  { icon: '🎨', name: 'UI/UX Design',     desc: 'Interfaces intuitivas, paletas de cores e experiência do usuário.',                                                                        width: 75, level: 'Intermediário'          },
  { icon: '🔧', name: 'Git & GitHub',     desc: 'Versionamento, branches, pull requests e colaboração em equipe.',                                                                          width: 78, level: 'Intermediário'          },
]

// Stagger container
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

// Card individual
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

// Stack item
const stackVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function StackSkills() {
  const [animated, setAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimated(true)
        observer.disconnect()
      }
    }, { threshold: 0.15 })

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stack" ref={sectionRef}>

      {/* Header Stack */}
      <motion.div
        className="section-header"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="section-num">// 01</span>
        <h2 className="section-title">Meu Stack</h2>
        <div className="section-line" />
      </motion.div>

      {/* Stack banner com stagger */}
      <motion.div
        className="stack-banner"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {stack.map(item => (
          <motion.div
            key={item.name}
            className={`stack-item${item.featured ? ' featured-stack' : ''}`}
            variants={stackVariants}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="stack-icon">{item.icon}</div>
            <div className={`stack-name${item.featured ? ' green' : ''}`}>{item.name}</div>
            <div className="stack-role">{item.role}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Header Habilidades */}
      <motion.div
        className="section-header"
        id="skills"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <span className="section-num">// 02</span>
        <h2 className="section-title">Habilidades</h2>
        <div className="section-line" />
      </motion.div>

      {/* Skills grid com stagger */}
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skills.map(skill => (
          <motion.div
            key={skill.name}
            className={`skill-card${skill.featured ? ' featured' : ''}`}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">
              {skill.name}
              {skill.badge && <span className="skill-badge">{skill.badge}</span>}
            </div>
            <div className="skill-desc">{skill.desc}</div>
            <div className="skill-bar-wrap">
              <div
                className={`skill-bar${skill.green ? ' green-bar' : ''}`}
                style={{ width: animated ? `${skill.width}%` : '0%' }}
              />
            </div>
            <div className="skill-level">{skill.level}</div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}