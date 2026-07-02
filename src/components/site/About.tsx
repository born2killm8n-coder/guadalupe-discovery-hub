import { motion } from "framer-motion";
import { MapPin, Mountain, Thermometer, Users, CalendarDays, Ruler } from "lucide-react";
import { distrito } from "@/data/guadalupe";
import { SectionHeading } from "./SectionHeading";

const datos = [
  { icon: MapPin, label: "Provincia", value: distrito.provincia },
  { icon: MapPin, label: "Departamento", value: distrito.departamento },
  { icon: Mountain, label: "Altitud", value: distrito.altitud },
  { icon: Thermometer, label: "Clima", value: distrito.clima },
  { icon: Users, label: "Población", value: distrito.poblacion },
  { icon: Ruler, label: "Superficie", value: distrito.superficie },
  { icon: CalendarDays, label: "Fundación", value: distrito.fundacion },
  { icon: CalendarDays, label: "Aniversario", value: distrito.aniversario },
];

export function About() {
  return (
    <section id="acerca" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="El distrito"
          title="Guadalupe, corazón del Valle Jequetepeque"
          description={distrito.descripcion}
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-bold text-foreground">
              Ubicación
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {distrito.ubicacion}
            </p>

            <h3 className="mt-8 font-display text-2xl font-bold text-foreground">
              Historia resumida
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Guadalupe fue fundado el 8 de diciembre de 1550 por frailes
              agustinos que trajeron desde Extremadura la devoción a la
              Virgen de Guadalupe. Se consolidó como centro doctrinero,
              agrícola y comercial del valle Jequetepeque. En la etapa
              republicana fue elevado a distrito y hoy es referente cultural,
              religioso y gastronómico de la costa norte del Perú.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4">
              {datos.map((d) => (
                <div
                  key={d.label}
                  className="rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <div className="flex items-center gap-2 text-emerald">
                    <d.icon className="h-4 w-4" />
                    <dt className="text-[11px] font-semibold uppercase tracking-widest">
                      {d.label}
                    </dt>
                  </div>
                  <dd className="mt-1 text-sm font-medium text-foreground">
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-border shadow-elegant"
          >
            <iframe
              title="Mapa de Guadalupe, Pacasmayo, La Libertad"
              src="https://www.google.com/maps?q=Guadalupe,Pacasmayo,La+Libertad,Peru&output=embed"
              className="h-[480px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
