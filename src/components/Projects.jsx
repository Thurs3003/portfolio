// ── EDITE: adicione seus projetos aqui ─────────────────────────────────────
// Para adicionar um projeto: copie o objeto e cole no array.
// url: deixe null para não mostrar o link.
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

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-num">// 03</span>
        <h2 className="section-title">Projetos</h2>
        <div className="section-line" />
      </div>

      <div className="projects-grid">
        {projects.map(p => (
          <div key={p.num} className="project-card">
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
          </div>
        ))}

      </div>
    </section>
  )
}
