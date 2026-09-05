import { createFileRoute } from "@tanstack/react-router";

import roseObsidian from "@/assets/rose-obsidian.jpg";
import { HeartAnimation } from "@/components/HeartAnimation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mi Seri · Un pequeño detalle para ti" },
      {
        name: "description",
        content:
          "Para la niña más linda, trabajadora y responsable que han visto mis ojos <3",
      },
      { property: "og:title", content: "Mi Seri · Un pequeño detalle para ti" },
      {
        property: "og:description",
        content:
          "Para la niña más linda, trabajadora y responsable que han visto mis ojos <3",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-obsidian font-sans text-pearl">
      {/* ambient molten-glass glows */}
      <div className="pointer-events-none absolute -top-40 -left-32 size-[560px] rounded-full bg-rose/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-[-160px] size-[520px] rounded-full bg-blush/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-200px] left-1/3 size-[500px] rounded-full bg-rose/15 blur-[140px]" />

      {/* top bar */}
      <header className="relative z-10 flex items-center justify-between px-8 py-7 md:px-16">
        <div className="flex items-center gap-3">
          <span className="grid size-8 place-items-center rounded-full border border-rose/40 bg-rose/10 text-lg leading-none text-rose">
            ♥
          </span>
          <span className="font-serif text-2xl tracking-wide text-glow">Mi Seri</span>
        </div>
        <nav className="hidden items-center gap-9 text-xs uppercase tracking-[0.25em] text-pearl/70 md:flex">
          <span className="transition-colors hover:text-glow">Cartas</span>
          <span className="transition-colors hover:text-glow">Momentos</span>
          <span className="transition-colors hover:text-glow">Nuestra historia</span>
        </nav>
        <span className="text-[11px] uppercase tracking-[0.3em] text-pearl/40">02 · 2025</span>
      </header>

      {/* hero */}
      <section className="relative z-10 px-8 pb-10 pt-10 md:px-16 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="mb-7 text-xs uppercase tracking-[0.4em] text-rose/80">Para ti, siempre</p>
            <h1 className="font-serif text-6xl font-light leading-[0.95] text-glow md:text-8xl">
              Hice un pequeño
              <span className="text-shimmer font-normal italic"> detalle</span>
              <br />
              para ti
            </h1>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-pearl/70">
              Para la niña más linda, trabajadora y responsable que han visto mis ojos {"<"}3
            </p>
            <div className="mt-11 flex flex-wrap items-center gap-5">
              <a
                href="#momentos"
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blush to-rose px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-obsidian shadow-[0_0_40px_-6px] shadow-rose/60 transition-transform hover:scale-[1.03]"
              >
                Abrir el detalle
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* molten glass card */}
          <div className="md:col-span-5">
            <div className="relative animate-floaty">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-rose/40 via-transparent to-blush/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-obsidian-2/70 p-9 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-saturate-150">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-rose/70">
                    Cifrado con cariño
                  </span>
                  <span className="size-2 rounded-full bg-rose shadow-[0_0_12px_2px] shadow-rose" />
                </div>
                <img
                  src={roseObsidian}
                  alt="Rosa sobre cristal negro"
                  width={1024}
                  height={1024}
                  className="aspect-square w-full rounded-2xl object-cover outline outline-1 -outline-offset-1 outline-white/10"
                />
                <p className="mt-7 font-serif text-2xl leading-snug italic text-glow">
                  "Cada latido, escrito a tu nombre."
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-pearl/50">
                  — con todo mi amor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* message reveal */}
      <section id="mensaje" className="relative z-10 px-8 py-16 md:px-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-obsidian-2/50 p-8 text-center md:p-14">
          <span className="text-[10px] uppercase tracking-[0.3em] text-rose/70">Mensaje sellado</span>
          <p className="mt-6 font-serif text-3xl font-light leading-snug text-glow md:text-4xl">
            Gracias por existir en mi vida.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-pearl/70">
            Este pequeño detalle no es más que una excusa para recordarte lo especial que eres. No
            necesito fechas ni razones: solo quería verte sonreír.
          </p>
        </div>
      </section>

      {/* message + heart animation */}
      <section id="momentos" className="relative z-10 px-8 pb-20 md:px-16">
        <div className="mb-14 h-px w-full bg-gradient-to-r from-transparent via-rose/30 to-transparent" />
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-serif text-4xl text-glow">Un mensaje para ti</h2>
          <span className="text-xs uppercase tracking-[0.3em] text-pearl/40">
            dibujado con python jeje
          </span>
        </div>
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {/* message box */}
          <div className="relative flex flex-col justify-center rounded-2xl border border-white/8 bg-obsidian-2/50 p-9 md:p-12">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <span className="mb-6 text-[10px] uppercase tracking-[0.3em] text-rose/70">
              Mensaje
            </span>
            <div className="font-serif text-xl font-light leading-relaxed text-glow md:text-2xl">
              <p>
                Sé que estos días han sido pesados para ti, entiendo lo duro que puede ser tú. Te escribo este mensaje con todo el amor que te tengo, con el que siempre te doy y siempre querré darte. No lo hago por una fecha, por un mes o porque sea una práctica.
              </p>
              <p className="mt-6">
                Lo hago porque en mi corazón solo existes tú, el verte batallar a diario contra el mundo me hace sentirme el más orgulloso de los novios. Poder compartir contigo, que me hables sobre tu día, lo que te pasó y lo que piensas incluso cuando el mundo se te viene arriba es de las cosas que más admiraré por siempre de ti, te hice un corazón con numpy en Python mira amor.
              </p>
            </div>
            <span className="mt-8 text-xs uppercase tracking-[0.25em] text-pearl/40">
              — para Mi Seri ❤
            </span>
          </div>

          {/* live heart plot */}
          <div className="rounded-2xl border border-white/8 bg-[#090914] p-4">
            <HeartAnimation />
          </div>
        </div>
      </section>

      <footer className="relative z-10 flex items-center justify-between px-8 pb-10 text-[11px] uppercase tracking-[0.3em] text-pearl/40 md:px-16">
        <span>Mi Seri</span>
        <span>Hecho a mano, con el corazón</span>
      </footer>
    </main>
  );
}
