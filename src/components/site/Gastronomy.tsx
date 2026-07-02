import { useState } from "react";
import { motion } from "framer-motion";
import { UtensilsCrossed, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { platos, type Plato } from "@/data/guadalupe";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { SectionHeading } from "./SectionHeading";

export function Gastronomy() {
  const [selected, setSelected] = useState<Plato | null>(null);

  return (
    <section
      id="gastronomia"
      className="relative overflow-hidden bg-petrol py-24 text-petrol-foreground md:py-32"
    >
      <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_10%_20%,oklch(0.5_0.13_165/0.4),transparent_50%),radial-gradient(circle_at_90%_80%,oklch(0.82_0.11_85/0.3),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
            <UtensilsCrossed className="h-3.5 w-3.5" /> Gastronomía
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Sabores del Valle Jequetepeque
          </h2>
          <p className="mt-4 text-petrol-foreground/80 md:text-lg">
            Guadalupe conserva recetas transmitidas de generación en
            generación, con productos del río, el mar y la campiña.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {platos.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-background/10 backdrop-blur-md border border-white/10 transition hover:bg-background/15"
            >
              <ImagePlaceholder label={p.imgPrompt} aspect="aspect-square" className="rounded-none" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold">{p.nombre}</h3>
                <p className="mt-2 text-sm text-petrol-foreground/75 leading-relaxed flex-1">
                  {p.descripcion}
                </p>
                <Button
                  onClick={() => setSelected(p)}
                  className="mt-4 self-start bg-gold-gradient text-gold-foreground hover:opacity-90"
                  size="sm"
                >
                  <ChefHat className="mr-1 h-4 w-4" /> Ver receta
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">
                  {selected.nombre}
                </DialogTitle>
              </DialogHeader>
              <ImagePlaceholder label={selected.imgPrompt} aspect="aspect-video" />
              <div>
                <h4 className="font-semibold text-foreground">Descripción</h4>
                <p className="mt-1 text-sm text-muted-foreground">{selected.descripcion}</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Ingredientes</h4>
                <ul className="mt-1 grid grid-cols-1 gap-1 text-sm text-muted-foreground sm:grid-cols-2">
                  {selected.ingredientes.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Historia</h4>
                <p className="mt-1 text-sm text-muted-foreground">{selected.historia}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
