import Image from "next/image";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70 shadow-sm">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-black/55">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm text-black/65 md:text-base">{desc}</p>
    </div>
  );
}

export default function HomePage() {
  const galeria = [
    { src: "/images/cajuina/galeria-1.jpg", alt: "Garrafas em destaque" },
    { src: "/images/cajuina/galeria-2.jpg", alt: "Rótulo e identidade visual" },
    { src: "/images/cajuina/galeria-3.jpg", alt: "Embalagem artesanal" },
    { src: "/images/cajuina/galeria-4.jpg", alt: "Caju e origem" },
    { src: "/images/cajuina/galeria-5.jpg", alt: "Conjunto de garrafas" },
    { src: "/images/cajuina/galeria-6.jpg", alt: "Detalhes do produto" },
  ];

  return (
    <main id="topo">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[88vh] min-h-[620px] w-full">
          <Image
            src="/images/cajuina/hero.jpg"
            alt="Cajuína Dona Júlia"
            fill
            priority
            className="object-cover"
          />
          {/* overlays: escurece + aquece âmbar */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_30%_10%,rgba(242,178,61,0.45),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_35%,rgba(240,123,26,0.35),transparent_60%)]" />

          <div className="absolute inset-0">
            <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-6">
              <div className="max-w-2xl">
                <div className="flex flex-wrap gap-2">
                  <Chip>Artesanal</Chip>
                  <Chip>Piauí</Chip>
                  <Chip>Identidade âmbar</Chip>
                </div>

                <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white md:text-6xl">
                  Cajuína Dona Júlia
                </h1>

                <p className="mt-4 text-lg text-white/85 md:text-xl">
                  Um portfólio institucional com a essência do nosso produto:
                  tradição, cuidado e presença — do caju à garrafa.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#historia"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[var(--orange)] via-[var(--amber)] to-[var(--red)] px-6 py-3 text-sm font-extrabold text-white shadow-md hover:opacity-95"
                  >
                    Conheça a história
                  </a>
                  <a
                    href="#galeria"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-extrabold text-white backdrop-blur hover:bg-white/15"
                  >
                    Ver galeria
                  </a>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">
                      Origem
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Cultura piauiense
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">
                      Perfil
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Clara, âmbar e marcante
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/70">
                      Propósito
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Portfólio, não e-commerce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section id="historia" className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_20%_30%,rgba(217,75,43,0.12),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_80%_10%,rgba(242,178,61,0.18),transparent_55%)]" />

        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Nossa essência"
            title="Tradição que vira identidade"
            desc="A Cajuína Dona Júlia carrega uma estética própria: brilho âmbar, rótulo marcante e presença artesanal. Aqui, o foco é contar história e transmitir confiança."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-7 shadow-sm">
              <h3 className="text-xl font-extrabold tracking-tight">
                Um portfólio com “cara de cajuína”
              </h3>
              <p className="mt-3 text-sm text-black/70">
                Nada de site frio e genérico: o design aqui puxa o âmbar da bebida,
                o laranja do caju e tons cremosos — com sombras quentes e detalhes que
                lembram a fazenda, o artesanal e o produto real.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-black/55">
                    Visual
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Âmbar + laranja + creme
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-black/55">
                    Tom
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Institucional e acolhedor
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-black/55">
                    Objetivo
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    Credibilidade e presença
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-black/55">
                    Conteúdo
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    História, galeria e contato
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_30%_20%,rgba(240,123,26,0.20),transparent_60%)]" />
              <Image
                src="/images/cajuina/historia.jpg"
                alt="Cajuína Dona Júlia - garrafas"
                width={1200}
                height={900}
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Do caju à garrafa"
            title="Processo com cuidado e padrão"
            desc="Uma narrativa simples, bonita e institucional — mostrando valor sem precisar vender online."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Seleção",
                d: "Matéria-prima escolhida com critério para preservar sabor e cor.",
              },
              {
                t: "Clarificação",
                d: "Etapa que valoriza a aparência limpa e o brilho âmbar característico.",
              },
              {
                t: "Engarrafamento",
                d: "Apresentação final com rótulo marcante e padrão visual reconhecível.",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-7 shadow-sm"
              >
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[var(--orange)] via-[var(--amber)] to-[var(--red)] shadow-sm" />
                <h3 className="mt-5 text-lg font-extrabold">{item.t}</h3>
                <p className="mt-2 text-sm text-black/70">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
            <Image
              src="/images/cajuina/processo.jpg"
              alt="Cajuína Dona Júlia - produção e apresentação"
              width={1600}
              height={700}
              className="h-[360px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-20 bg-white/45">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Imagem real"
            title="O sabor da tradição em fotos"
            desc="Aqui é onde o site ganha vida: rótulo, cor, embalagem, feira e contexto."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galeria.map((img) => (
              <figure
                key={img.src}
                className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                <figcaption className="px-5 py-4">
                  <p className="text-sm font-extrabold tracking-tight">{img.alt}</p>
                  <p className="mt-1 text-xs text-black/60">
                    Tons quentes, identidade artesanal e presença.
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PRESENÇA */}
      <section id="presenca" className="relative py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_30%_10%,rgba(47,111,62,0.10),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_80%_40%,rgba(242,178,61,0.14),transparent_60%)]" />

        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Confiança"
            title="Presença, exposição e reconhecimento"
            desc="Uma seção institucional pra reforçar credibilidade: participação em eventos, apresentação e consistência visual."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-7 shadow-sm">
              <h3 className="text-xl font-extrabold tracking-tight">
                A marca aparece bem em qualquer cenário
              </h3>
              <p className="mt-3 text-sm text-black/70">
                O rótulo é forte, o âmbar chama atenção e a embalagem tem aquela pegada
                artesanal que “fala” por si. Isso é ouro pra um portfólio institucional.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-black/75">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--orange)]" />
                  Identidade visual reconhecível
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--amber)]" />
                  Apresentação consistente (garrafa + rótulo + embalagem)
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--leaf)]" />
                  Contexto real (feiras, mesas, produção, ambiente)
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
              <Image
                src="/images/cajuina/presenca.jpg"
                alt="Cajuína Dona Júlia em evento/feira"
                width={1400}
                height={1000}
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 bg-white/45">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Conexão"
            title="Contato e parcerias"
            desc="Formulário simples (visual). Depois a gente integra envio por e-mail/API."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm">
              <h3 className="text-lg font-extrabold">Mensagem rápida</h3>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-[0.22em] text-black/55">
                    Nome
                  </label>
                  <input
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--orange)]"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-[0.22em] text-black/55">
                    Email
                  </label>
                  <input
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--orange)]"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-[0.22em] text-black/55">
                    Mensagem
                  </label>
                  <textarea
                    className="mt-2 h-28 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-[var(--orange)]"
                    placeholder="Escreva sua mensagem..."
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-2xl bg-gradient-to-r from-[var(--orange)] via-[var(--amber)] to-[var(--red)] px-6 py-3 text-sm font-extrabold text-white shadow-sm hover:opacity-95"
                >
                  Enviar (visual)
                </button>

                <p className="text-xs text-black/60">
                  (Por enquanto é visual. Depois a gente integra envio real.)
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-[var(--card)] p-7 shadow-sm">
              <h3 className="text-lg font-extrabold">Informações</h3>
              <p className="mt-3 text-sm text-black/70">
                Aqui você pode colocar telefone, cidade, e-mail e redes sociais.
                Se preferir, a gente monta um bloco com ícones depois.
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-black/55">
                    Local
                  </p>
                  <p className="mt-1 font-semibold">Piauí, Brasil</p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-black/55">
                    Email
                  </p>
                  <p className="mt-1 font-semibold">contato@exemplo.com</p>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-black/55">
                    Redes
                  </p>
                  <p className="mt-1 font-semibold">@cajuinadոնajulia (placeholder)</p>
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] border border-black/10 bg-gradient-to-br from-white/70 via-white/30 to-white/10 p-6">
                <p className="text-sm font-extrabold">
                  Quer deixar mais “cajuína” ainda?
                </p>
                <p className="mt-2 text-sm text-black/70">
                  Próximo passo: eu coloco microanimações, textura leve (papel/fazenda),
                  e uma seção “Linha do Produto” com cards e destaques (sem vender).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* “respiro” final */}
      <div className="h-10" />
    </main>
  );
}
