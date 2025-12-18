export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 bg-white/60">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-extrabold">Cajuína Dona Júlia</p>
            <p className="mt-1 text-sm text-black/60">
              Tradição artesanal do Piauí — brilho âmbar, identidade real.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-xs font-semibold text-black/60">
            <a className="hover:text-black" href="#topo">Topo</a>
            <a className="hover:text-black" href="#historia">História</a>
            <a className="hover:text-black" href="#galeria">Galeria</a>
            <a className="hover:text-black" href="#contato">Contato</a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-black/55 md:flex-row md:items-center md:justify-between">
          <p>© {year} Cajuína Dona Júlia. Todos os direitos reservados.</p>
          <p>Site institucional (sem venda online).</p>
        </div>
      </div>
    </footer>
  );
}
