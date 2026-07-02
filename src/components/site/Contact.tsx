import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre").max(80),
  correo: z.string().trim().email("Correo inválido").max(120),
  asunto: z.string().trim().min(3, "Asunto muy corto").max(120),
  mensaje: z.string().trim().min(10, "Mensaje muy corto").max(1000),
});

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

export function Contact() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onChange =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Errors = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as keyof FormState] = i.message;
      });
      setErrors(errs);
      toast.error("Revisa los campos del formulario");
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("¡Mensaje enviado! Gracias por escribirnos.");
    setForm({ nombre: "", correo: "", asunto: "", mensaje: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Contacto"
          title="Escríbenos"
          description="¿Consultas turísticas, culturales o de servicios? Contáctanos y con gusto te responderemos."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { icon: MapPin, title: "Dirección", value: "Jr. Grau s/n, Plaza de Armas, Guadalupe" },
              { icon: Phone, title: "Teléfono", value: "(044) 566-020" },
              { icon: Mail, title: "Correo", value: "informes@muniguadalupe.gob.pe" },
            ].map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald/10 text-emerald">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-semibold text-foreground">{c.title}</h4>
                  <p className="text-sm text-muted-foreground">{c.value}</p>
                </div>
              </div>
            ))}
            <p className="text-xs text-muted-foreground italic">
              Datos referenciales. Puedes actualizarlos con la información
              oficial de la Municipalidad Distrital de Guadalupe.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            noValidate
            className="rounded-2xl border border-border bg-card p-6 shadow-soft space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" value={form.nombre} onChange={onChange("nombre")} aria-invalid={!!errors.nombre} />
                {errors.nombre && <p className="mt-1 text-xs text-destructive">{errors.nombre}</p>}
              </div>
              <div>
                <Label htmlFor="correo">Correo</Label>
                <Input id="correo" type="email" value={form.correo} onChange={onChange("correo")} aria-invalid={!!errors.correo} />
                {errors.correo && <p className="mt-1 text-xs text-destructive">{errors.correo}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="asunto">Asunto</Label>
              <Input id="asunto" value={form.asunto} onChange={onChange("asunto")} aria-invalid={!!errors.asunto} />
              {errors.asunto && <p className="mt-1 text-xs text-destructive">{errors.asunto}</p>}
            </div>
            <div>
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea id="mensaje" rows={5} value={form.mensaje} onChange={onChange("mensaje")} aria-invalid={!!errors.mensaje} />
              {errors.mensaje && <p className="mt-1 text-xs text-destructive">{errors.mensaje}</p>}
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-petrol text-petrol-foreground hover:opacity-90"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="mr-1 h-5 w-5" /> Enviado
                </>
              ) : (
                <>
                  <Send className="mr-1 h-4 w-4" /> Enviar mensaje
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
