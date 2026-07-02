import { MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { distrito } from "@/data/guadalupe";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#turismo", label: "Turismo" },
  { href: "#cultura", label: "Cultura" },
  { href: "#gastronomia", label: "Gastronomía" },
  { href: "#galeria", label: "Galería" },
  { href: "#directorio", label: "Directorio" },
  { href: "#calendario", label: "Calendario" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-petrol text-petrol-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-gold-foreground">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg font-bold">Guadalupe</p>
              <p className="text-xs uppercase tracking-widest text-petrol-foreground/70">
                {distrito.provincia} · {distrito.departamento}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-petrol-foreground/80 leading-relaxed">
            Portal turístico e informativo del distrito de Guadalupe, en el
            corazón del valle Jequetepeque, norte del Perú.
          </p>
          <div className="mt-4 flex gap-2">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Red social"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-gold hover:text-gold-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Enlaces rápidos
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-petrol-foreground/85">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-gold transition">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Datos del distrito
          </h4>
          <dl className="mt-4 space-y-2 text-sm text-petrol-foreground/85">
            <div><dt className="inline font-semibold">Capital: </dt><dd className="inline">{distrito.capital}</dd></div>
            <div><dt className="inline font-semibold">Altitud: </dt><dd className="inline">{distrito.altitud}</dd></div>
            <div><dt className="inline font-semibold">Clima: </dt><dd className="inline">{distrito.clima}</dd></div>
            <div><dt className="inline font-semibold">Aniversario: </dt><dd className="inline">{distrito.aniversario}</dd></div>
          </dl>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-gold">
            Ubicación
          </h4>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Mapa Guadalupe"
              src="https://www.google.com/maps?q=Guadalupe,Pacasmayo,La+Libertad,Peru&output=embed"
              className="h-40 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-petrol-foreground/70">
          <p>© {new Date().getFullYear()} Distrito de Guadalupe. Todos los derechos reservados.</p>
          <p>Hecho con orgullo en el Valle Jequetepeque · Perú 🇵🇪</p>
        </div>
      </div>
    </footer>
  );
}
