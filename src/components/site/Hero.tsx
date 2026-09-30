import { Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Reveal } from "./Reveal";

const STATS = [
  { valor: "4.9★", etiqueta: "Valoración de clientes" },
  { valor: "1 min", etiqueta: "Para pedir cita" },
  { valor: "7 días", etiqueta: "De antelación máxima" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-aqua/30 blur-3xl" aria-hidden="true"></div>
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-limon/50 blur-3xl" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 rounded-full bg-mist px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-accent">
                📍 Tu negocio en {CONFIG.zona}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-6xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-8xl">
                Tu barrio,
                <br />
                <span className="text-accent">con más aire.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone sm:text-xl">
                Lo que ofreces, dónde estás y cómo contactar, en su sitio.
                Pide tu cita en segundos: {CONFIG.nombre}, en {CONFIG.ciudad}.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#reserva"
                  className="btn-sheen inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-deep"
                >
                  Pedir cita online
                </a>
                <a
                  href={`tel:${CONFIG.telefonoEnlace}`}
                  className="inline-flex items-center justify-center rounded-full border-2 border-deep bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-wide text-deep transition-all hover:bg-deep hover:text-paper"
                >
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Llamar · {CONFIG.telefono}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t-2 border-deep/10 pt-8">
                {STATS.map((stat) => (
                  <div key={stat.etiqueta}>
                    <p className="font-display text-3xl font-extrabold leading-none text-accent">{stat.valor}</p>
                    <p className="mt-2 text-xs uppercase tracking-wide text-stone">{stat.etiqueta}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-[2.5rem] bg-limon"
                aria-hidden="true"
              ></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-white shadow-soft">
                <img
                  src="img/haircut-close.jpg"
                  alt="Foto del negocio"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}