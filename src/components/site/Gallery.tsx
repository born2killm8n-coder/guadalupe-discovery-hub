import { useState } from "react";
import { motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { SectionHeading } from "./SectionHeading";

const items = [
  { id: 1, label: "Iglesia Matriz al atardecer", h: "row-span-2" },
  { id: 2, label: "Plaza de Armas", h: "" },
  { id: 3, label: "Campiña y arrozales", h: "" },
  { id: 4, label: "Sala Pakatnamú", h: "row-span-2" },
  { id: 5, label: "Playa La Bocana", h: "" },
  { id: 6, label: "Procesión de la Virgen de Guadalupe", h: "" },
  { id: 7, label: "Complejo Pacatnamú", h: "" },
  { id: 8, label: "Dulces conventuales", h: "" },
];

export function Gallery() {
  const [zoom, setZoom] = useState<(typeof items)[number] | null>(null);
  return (
    <section id="galeria" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Galería"
          title="Postales de Guadalupe"
          description="Espacio preparado para tus fotografías del distrito. Haz clic para ampliar cada imagen."
        />

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.button
              key={it.id}
              type="button"
              onClick={() => setZoom(it)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-border shadow-soft ${it.h}`}
              aria-label={`Ampliar ${it.label}`}
            >
              <ImagePlaceholder
                label={it.label}
                aspect="h-full"
                className="h-full rounded-none"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100">
                <div className="flex w-full items-center justify-between p-4 text-white">
                  <span className="text-sm font-medium">{it.label}</span>
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!zoom} onOpenChange={(o) => !o && setZoom(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0 shadow-none">
          {zoom && (
            <>
              <DialogTitle className="sr-only">{zoom.label}</DialogTitle>
              <div className="relative overflow-hidden rounded-2xl">
                <ImagePlaceholder label={zoom.label} aspect="aspect-video" className="rounded-none" />
                <button
                  onClick={() => setZoom(null)}
                  className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 text-foreground shadow"
                  aria-label="Cerrar"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
