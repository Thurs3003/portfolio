import { useEffect, useRef, useState } from 'react'

// ── EDITE: suas tecnologias principais ──────────────────────────────────────
const stack = [
  { icon: '⚛️', name: 'React',      role: 'Frontend'      },
  { icon: '🟨', name: 'JavaScript', role: 'Linguagem'     },
  { icon: '🟢', name: 'Supabase',   role: 'Backend / BaaS', featured: true },
  { icon: '🗄️', name: 'PostgreSQL', role: 'Banco de dados' },
  { icon: '▲',  name: 'Vercel',     role: 'Deploy'         },
]

// ── EDITE: habilidades — data-width de 0 a 100 ─────────────────────────────
const skills = [
  {
    icon: '⚛️', name: 'React',
    desc: 'Componentes, hooks, estado global e arquitetura de SPAs modernas.',
    width: 90, level: 'Avançado',
  },
  {
    icon: '🌐', name: 'HTML & CSS',
    desc: 'Semântica, responsividade, animações e layouts modernos.',
    width: 92, level: 'Avançado',
  },
  {
    icon: '⚡', name: 'JavaScript',
    desc: 'ES6+, manipulação de DOM, APIs REST e lógica de aplicação.',
    width: 85, level: 'Avançado',
  },
  {
    icon: '🟢', name: 'Supabase', badge: 'DESTAQUE',
    desc: 'Banco de dados PostgreSQL, autenticação, storage, real-time e Row Level Security. Backend completo sem servidor dedicado.',
    width: 82, level: 'Intermediário-avançado', featured: true, green: true,
  },
  {
    icon: '🗄️', name: 'PostgreSQL', badge: 'DESTAQUE',
    desc: 'Modelagem de dados, queries, relacionamentos e políticas de segurança via Supabase.',
    width: 75, level: 'Intermediário', featured: true, green: true,
  },
  {
    icon: '▲', name: 'Next.js & Vercel',
    desc: 'Deploy, SSR, rotas e otimização de performance em produção.',
    width: 78, level: 'Intermediário',
  },
  {
    icon: '🎨', name: 'UI/UX Design',
    desc: 'Interfaces intuitivas, paletas de cores e experiência do usuário.',
    width: 75, level: 'Intermediário',
  },
  {
    icon: '🔧', name: 'Git & GitHub',
    desc: 'Versionamento, branches, pull requests e colaboração em equipe.',
    width: 78, level: 'Intermediário',
  },
]

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
      <div className="section-header">
        <span className="section-num">// 01</span>
        <h2 className="section-title">Meu Stack</h2>
        <div className="section-line" />
      </div>

      <div className="stack-banner">
        {stack.map(item => (
          <div
            key={item.name}
            className={`stack-item${item.featured ? ' featured-stack' : ''}`}
          >
            <div className="stack-icon">{item.icon}</div>
            <div className={`stack-name${item.featured ? ' green' : ''}`}>{item.name}</div>
            <div className="stack-role">{item.role}</div>
          </div>
        ))}
      </div>

      <div className="section-header" id="skills">
        <span className="section-num">// 02</span>
        <h2 className="section-title">Habilidades</h2>
        <div className="section-line" />
      </div>

      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className={`skill-card${skill.featured ? ' featured' : ''}`}>
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
          </div>
        ))}
      </div>
    </section>
  )
}
