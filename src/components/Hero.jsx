export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* ── EDITE: sua especialidade ── */}
        <div className="hero-tag">// Desenvolvedor Frontend + Supabase</div>

        {/* ── EDITE: frase de impacto (3 linhas) ── */}
        <h1 className="hero-title">
          <span className="line1">Criando</span>
          <span className="line2">experiências</span>
          <span className="line3">digitais.</span>
        </h1>

        {/* ── EDITE: parágrafo de apresentação ── */}
        <p className="hero-desc">
          Desenvolvedor especializado em <span>React</span> com backend em{' '}
          <span>Supabase</span>. Entrego projetos completos — do banco de dados à
          interface — rápidos, modernos e prontos para produção.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn-primary">Ver projetos →</a>
          <a href="#contact"  className="btn-secondary">Falar comigo</a>
        </div>
      </div>

      {/* ── EDITE: número de projetos em produção ── */}
      <div className="hero-counter">
        <div className="counter-num">03</div>
        <div className="counter-label">Projetos em produção</div>
      </div>
    </section>
  )
}
