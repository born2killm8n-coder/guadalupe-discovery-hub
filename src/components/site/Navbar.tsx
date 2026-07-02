import { useEffect, useState } from "react";
import { Menu, X, Search, Moon, Sun, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { atractivos, cultura, platos, directorio } from "@/data/guadalupe";

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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const results = query.trim().length > 1 ? search(query) : [];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled
          ? "bg-background/80 border-b border-border shadow-soft"
          : "bg-background/40"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-gold-foreground shadow-soft">
            <MapPin className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold text-foreground">
              Guadalupe
            </span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Pacasmayo · La Libertad
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent/10 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Buscar contenido">
                <Search className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogTitle>Buscador</DialogTitle>
              <DialogDescription className="sr-only">
                Busca lugares, platos, cultura o servicios.
              </DialogDescription>
              <Input
                autoFocus
                placeholder="Busca un lugar, plato, servicio..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <div className="max-h-72 overflow-y-auto divide-y divide-border">
                {results.length === 0 && query.length > 1 && (
                  <p className="py-6 text-center text-sm text-muted-foreground">
                    Sin resultados
                  </p>
                )}
                {results.map((r) => (
                  <a
                    key={r.href + r.label}
                    href={r.href}
                    className="flex flex-col py-3 hover:bg-muted/50 rounded-md px-2"
                  >
                    <span className="text-xs uppercase tracking-wide text-emerald">
                      {r.section}
                    </span>
                    <span className="font-medium text-foreground">{r.label}</span>
                  </a>
                ))}
              </div>
            </DialogContent>
          </Dialog>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Cambiar tema"
            onClick={toggle}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Abrir menú"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="flex flex-col p-4 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-foreground/90 hover:bg-accent/10"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function search(q: string) {
  const term = q.toLowerCase();
  const out: { label: string; href: string; section: string }[] = [];
  atractivos.forEach((a) => {
    if (a.titulo.toLowerCase().includes(term) || a.resumen.toLowerCase().includes(term))
      out.push({ label: a.titulo, href: "#turismo", section: "Turismo" });
  });
  cultura.forEach((c) => {
    if (c.titulo.toLowerCase().includes(term) || c.resumen.toLowerCase().includes(term))
      out.push({ label: c.titulo, href: "#cultura", section: "Cultura" });
  });
  platos.forEach((p) => {
    if (p.nombre.toLowerCase().includes(term))
      out.push({ label: p.nombre, href: "#gastronomia", section: "Gastronomía" });
  });
  directorio.forEach((d) => {
    if (d.nombre.toLowerCase().includes(term) || d.categoria.toLowerCase().includes(term))
      out.push({ label: d.nombre, href: "#directorio", section: "Directorio" });
  });
  return out.slice(0, 8);
}
