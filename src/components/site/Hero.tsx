import { motion } from "framer-motion";
import { ArrowRight, Compass, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] w-full overflow-hidden pt-24"
    >
      {/* Placeholder de imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <div
          role="img"
          aria-label="Reemplazar imagen de fondo del hero"
          className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,oklch(0.55_0.13_170/0.5),transparent_55%),radial-gradient(circle_at_80%_10%,oklch(0.82_0.11_85/0.35),transparent_55%),linear-gradient(135deg,oklch(0.24_0.05_215),oklch(0.32_0.07_195))]"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><path d=%22M0 60 Q30 10 60 60 T120 60%22 fill=%22none%22 stroke=%22white%22 stroke-opacity=%220.05%22/></svg>')] opacity-40" />
      </div>

      <div className="mx-auto flex min-h-[calc(100dvh-6rem)] max-w-7xl flex-col justify-center px-4 py-16 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur"
        >
          <MapPin className="h-3.5 w-3.5 text-gold" />
          Valle Jequetepeque · La Libertad · Perú
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Descubre{" "}
          <span className="bg-gold-gradient bg-clip-text text-transparent">
            Guadalupe
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl"
        >
          Historia, tradición, gastronomía y turismo en el corazón del
          Valle Jequetepeque.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-gold-gradient text-gold-foreground hover:opacity-90 shadow-elegant"
          >
            <a href="#turismo">
              <Compass className="mr-1 h-5 w-5" />
              Ver turismo
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur"
          >
            <a href="#cultura">
              Explorar
              <ArrowRight className="ml-1 h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-6 text-white sm:grid-cols-4"
        >
          {[
            { k: "1550", v: "Año de fundación" },
            { k: "40 m", v: "Altitud" },
            { k: "22 °C", v: "Clima promedio" },
            { k: "42 mil", v: "Habitantes" },
          ].map((s) => (
            <div key={s.v} className="border-l border-white/20 pl-4">
              <dt className="font-display text-3xl font-bold text-gold">{s.k}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-white/70">
                {s.v}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
