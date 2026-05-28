export default function Navbar() {
  return (
    <nav>
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
    </nav>
  )
}
