import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { eventos, type Evento } from "@/data/guadalupe";
import { SectionHeading } from "./SectionHeading";

const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

const tipoColors: Record<Evento["tipo"], string> = {
  religiosa: "bg-emerald text-emerald-foreground",
  civica: "bg-petrol text-petrol-foreground",
  cultural: "bg-gold text-gold-foreground",
  tradicional: "bg-accent text-accent-foreground",
};

export function EventCalendar() {
  const [selected, setSelected] = useState<Evento | null>(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const grid = useMemo(() => buildGrid(year, month), [year, month]);

  const eventosDelMes = eventos.filter((e) => {
    const d = new Date(e.fecha);
    return d.getMonth() === month;
  });

  const eventosPorDia = (dia: number) =>
    eventos.filter((e) => {
      const d = new Date(e.fecha);
      return d.getMonth() === month && d.getDate() === dia;
    });

  return (
    <section id="calendario" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Calendario"
          title="Fechas importantes del distrito"
          description="Aniversarios, festividades religiosas y celebraciones tradicionales de Guadalupe."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold text-foreground">
                {meses[month]} {year}
              </h3>
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    if (month === 0) {
                      setMonth(11);
                      setYear(year - 1);
                    } else setMonth(month - 1);
                  }}
                  aria-label="Mes anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    if (month === 11) {
                      setMonth(0);
                      setYear(year + 1);
                    } else setMonth(month + 1);
                  }}
                  aria-label="Mes siguiente"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {dias.map((d) => (
                <div key={d} className="py-2">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {grid.map((day, i) => {
                if (!day) return <div key={i} />;
                const evs = eventosPorDia(day);
                const hasEvent = evs.length > 0;
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={!hasEvent}
                    onClick={() => hasEvent && setSelected(evs[0])}
                    className={`relative aspect-square rounded-lg text-sm font-medium transition ${
                      hasEvent
                        ? "bg-emerald/10 text-emerald hover:bg-emerald hover:text-emerald-foreground cursor-pointer"
                        : "text-muted-foreground/70"
                    }`}
                  >
                    {day}
                    {hasEvent && (
                      <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="space-y-3">
            <h3 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-emerald" /> Eventos de {meses[month]}
            </h3>
            {eventosDelMes.length === 0 && (
              <p className="text-sm text-muted-foreground">
                Sin eventos registrados este mes.
              </p>
            )}
            {eventosDelMes.map((e) => (
              <button
                key={e.fecha + e.titulo}
                onClick={() => setSelected(e)}
                className="flex w-full items-start gap-3 rounded-xl border border-border bg-card p-4 text-left shadow-soft transition hover:shadow-elegant"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-emerald/10 text-emerald">
                  <span className="font-display text-lg font-bold">
                    {new Date(e.fecha).getDate()}
                  </span>
                </div>
                <div className="min-w-0">
                  <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${tipoColors[e.tipo]}`}>
                    {e.tipo}
                  </span>
                  <h4 className="mt-1 font-semibold text-foreground">{e.titulo}</h4>
                </div>
              </button>
            ))}
          </div>
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
              <p className="text-sm font-medium text-emerald">
                {new Date(selected.fecha).toLocaleDateString("es-PE", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
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

function buildGrid(year: number, month: number): (number | null)[] {
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Lunes = 0
  const startDay = (first.getDay() + 6) % 7;
  const cells: (number | null)[] = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
