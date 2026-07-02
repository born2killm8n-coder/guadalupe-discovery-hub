import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { atractivos, type Atractivo } from "@/data/guadalupe";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { SectionHeading } from "./SectionHeading";

export function Tourism() {
  const [selected, setSelected] = useState<Atractivo | null>(null);

  return (
    <section id="turismo" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Turismo"
          title="Lugares que no puedes perderte"
          description="Del casco colonial fundado por los agustinos a las playas y complejos arqueológicos del valle Jequetepeque."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {atractivos.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:shadow-elegant"
            >
              <ImagePlaceholder
                label={a.imgPrompt}
                aspect="aspect-[4/3]"
                className="rounded-none"
              />
              <div className="flex flex-1 flex-col p-6">
                {a.ubicacion && (
                  <span className="inline-flex items-center gap-1 text-xs text-emerald font-medium">
                    <MapPin className="h-3.5 w-3.5" />
                    {a.ubicacion}
                  </span>
                )}
                <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                  {a.titulo}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {a.resumen}
                </p>
                <Button
                  variant="ghost"
                  onClick={() => setSelected(a)}
                  className="mt-4 self-start text-emerald hover:text-emerald hover:bg-emerald/10"
                >
                  Ver más
                  <ArrowUpRight className="ml-1 h-4 w-4" />
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
                  {selected.titulo}
                </DialogTitle>
                {selected.ubicacion && (
                  <DialogDescription className="flex items-center gap-1 text-emerald">
                    <MapPin className="h-4 w-4" /> {selected.ubicacion}
                  </DialogDescription>
                )}
              </DialogHeader>
              <ImagePlaceholder label={selected.imgPrompt} aspect="aspect-video" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selected.descripcion}
              </p>
              <Button
                asChild
                className="w-fit bg-petrol text-petrol-foreground hover:opacity-90"
              >
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    selected.titulo + " Guadalupe Pacasmayo",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin className="mr-1 h-4 w-4" />
                  Ver en mapa
                </a>
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
