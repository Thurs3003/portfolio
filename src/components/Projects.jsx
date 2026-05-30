import { motion } from 'framer-motion'

const projects = [
  {
    num: '01',
    tag: 'E-commerce · Produção · Full Stack',
    name: 'G.A Brasil Store',
    supabaseDesc: 'Backend construído com Supabase — banco de dados PostgreSQL, autenticação e storage integrados sem servidor dedicado.',
    desc: 'Plataforma de e-commerce completa para distribuidora de maquiagens e cosméticos. Frontend em React com backend gerenciado pelo Supabase — catálogo de produtos, sistema de pedidos, autenticação de usuários e design responsivo focado em conversão para lojistas e revendedores.',
    tech: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'Supabase',   highlight: true },
      { name: 'PostgreSQL', highlight: true },
      { name: 'CSS' },
      { name: 'Vercel' },
    ],
    url: 'https://ga-brasil-store.vercel.app/',
  },
  {
    num: '02',
    tag: 'Saúde · Trabalho Acadêmico · Frontend',
    name: 'ClickSUS',
    desc: 'Aplicação web desenvolvida como projeto acadêmico, voltada para o sistema de saúde público. Interface construída com React e Vite, com foco em usabilidade e organização de informações relacionadas ao SUS.',
    tech: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'CSS' },
      { name: 'Vite' },
      { name: 'Vercel' },
    ],
    url: 'https://clicksus-web.vercel.app/',
  },
  {
    num: '03',
    tag: 'Produtividade · Projeto de Aprendizado · Frontend',
    name: 'Task Manager',
    desc: 'Gerenciador de tarefas com foco em aprendizado de React. Permite adicionar, editar, marcar como concluídas e deletar tarefas, com filtros por status, persistência via localStorage, validação de duplicatas e micro animações para feedback visual.',
    tech: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'CSS' },
      { name: 'Vite' },
      { name: 'localStorage' },
    ],
    url: 'https://task-manager-react-tan.vercel.app/',
  },
]

// Variantes do container — controla o stagger dos filhos
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // cada card aparece 0.2s depois do anterior
    },
  },
}

// Variantes de cada card — vem de baixo
const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

// Variantes do header da seção
const headerVariants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Projects() {
  return (
    <section id="projects">

      {/* Header animado — vem da esquerda */}
      <motion.div
        className="section-header"
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="section-num">// 03</span>
        <h2 className="section-title">Projetos</h2>
        <div className="section-line" />
      </motion.div>

      {/* Grid com stagger — cada card entra em sequência */}
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map(p => (
          <motion.div
            key={p.num}
            className="project-card"
            variants={cardVariants}
            whileHover={{ x: 6 }} // desliza levemente para direita no hover
            transition={{ duration: 0.2 }}
          >
            <div>
              <div className="project-num">{p.num}</div>
              <div className="project-tag">{p.tag}</div>
              <div className="project-name">{p.name}</div>

              {p.supabaseDesc && (
                <div className="supabase-box">
                  <div className="supabase-box-icon">🟢</div>
                  <div className="supabase-box-text">{p.supabaseDesc}</div>
                </div>
              )}

              <div className="project-desc">{p.desc}</div>

              <div className="project-tech">
                {p.tech.map(t => (
                  <span key={t.name} className={`tech-badge${t.highlight ? ' highlight' : ''}`}>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>

            {p.url ? (
              <a href={p.url} target="_blank" rel="noreferrer" className="project-link">↗</a>
            ) : (
              <div className="project-link disabled">+</div>
            )}
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}