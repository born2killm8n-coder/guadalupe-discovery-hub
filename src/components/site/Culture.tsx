import { useState } from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  Sparkles,
  Users,
  CalendarHeart,
  Building2,
  Palette,
  Church,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cultura, type Cultura } from "@/data/guadalupe";
import { SectionHeading } from "./SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Sparkles,
  Users,
  CalendarHeart,
  Building2,
  Palette,
  Church,
};

export function Culture() {
  const [selected, setSelected] = useState<Cultura | null>(null);

  return (
    <section id="cultura" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Cultura"
          title="Herencia viva del norte peruano"
          description="Historia colonial, devoción mariana, gastronomía y arte popular se entrelazan en la identidad guadalupana."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cultura.map((c, i) => {
            const Icon = iconMap[c.icono] ?? BookOpen;
            return (
              <motion.article
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald/10 blur-2xl transition group-hover:bg-emerald/20" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald/10 text-emerald">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                    {c.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {c.resumen}
                  </p>
                  <Button
                    variant="link"
                    onClick={() => setSelected(c)}
                    className="mt-2 h-auto p-0 text-emerald"
                  >
                    Leer más →
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
                  {selected.titulo}
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selected.descripcion}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
