import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Stethoscope,
  Shield,
  Flame,
  ShoppingBasket,
  BedDouble,
  UtensilsCrossed,
  Pill,
  Landmark,
  Bus,
  MapPin,
  Phone,
  Info,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { directorio, categoriasDirectorio, type DirectorioItem } from "@/data/guadalupe";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Stethoscope,
  Shield,
  Flame,
  ShoppingBasket,
  BedDouble,
  UtensilsCrossed,
  Pill,
  Landmark,
  Bus,
};

export function Directory() {
  const [filter, setFilter] = useState<string>("Todos");
  const [selected, setSelected] = useState<DirectorioItem | null>(null);

  const items = filter === "Todos" ? directorio : directorio.filter((d) => d.categoria === filter);

  return (
    <section id="directorio" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Directorio"
          title="Servicios e instituciones"
          description="Directorio referencial y editable de instituciones, servicios y comercios de Guadalupe."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {["Todos", ...categoriasDirectorio].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                filter === c
                  ? "border-emerald bg-emerald text-emerald-foreground"
                  : "border-border bg-card text-foreground hover:border-emerald hover:text-emerald"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((d, i) => {
            const Icon = iconMap[d.icono] ?? Info;
            return (
              <motion.article
                key={d.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:shadow-elegant"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-petrol/10 text-petrol">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-widest text-emerald">
                      {d.categoria}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                      {d.nombre}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
                  {d.descripcion}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(d.mapsQuery)}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MapPin className="mr-1 h-4 w-4" /> Ubicación
                    </a>
                  </Button>
                  {d.telefono && (
                    <Button asChild size="sm" className="bg-emerald text-emerald-foreground hover:opacity-90">
                      <a href={`tel:${d.telefono.replace(/[^0-9+]/g, "")}`}>
                        <Phone className="mr-1 h-4 w-4" /> Llamar
                      </a>
                    </Button>
                  )}
                  <Button size="sm" variant="ghost" onClick={() => setSelected(d)}>
                    <Info className="mr-1 h-4 w-4" /> Más info
                  </Button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">
                  {selected.nombre}
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground">{selected.descripcion}</p>
              <dl className="mt-2 space-y-2 text-sm">
                {selected.direccion && (
                  <div className="flex gap-2">
                    <dt className="font-semibold text-foreground">Dirección:</dt>
                    <dd className="text-muted-foreground">{selected.direccion}</dd>
                  </div>
                )}
                {selected.telefono && (
                  <div className="flex gap-2">
                    <dt className="font-semibold text-foreground">Teléfono:</dt>
                    <dd className="text-muted-foreground">{selected.telefono}</dd>
                  </div>
                )}
                <div className="flex gap-2">
                  <dt className="font-semibold text-foreground">Categoría:</dt>
                  <dd className="text-muted-foreground">{selected.categoria}</dd>
                </div>
              </dl>
              <p className="text-xs text-muted-foreground italic">
                Información referencial. Puede ser actualizada por la
                Municipalidad Distrital de Guadalupe.
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
