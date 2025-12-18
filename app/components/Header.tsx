export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/65 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#topo" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--orange)] via-[var(--amber)] to-[var(--red)] text-white shadow-sm">
            DJ
          </span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold tracking-tight">Cajuína Dona Júlia</p>
            <p className="text-xs text-black/60">Portfólio Institucional</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-black/70 md:flex">
          <a className="hover:text-black" href="#historia">História</a>
          <a className="hover:text-black" href="#processo">Processo</a>
          <a className="hover:text-black" href="#galeria">Galeria</a>
          <a className="hover:text-black" href="#presenca">Presença</a>
          <a className="hover:text-black" href="#contato">Contato</a>
        </nav>

        <a
          href="#contato"
          className="rounded-2xl bg-gradient-to-r from-[var(--orange)] via-[var(--amber)] to-[var(--red)] px-4 py-2 text-xs font-extrabold text-white shadow-sm hover:opacity-95"
        >
          Fale com a marca
        </a>
      </div>
    </header>
  );
}
