import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Tourism } from "@/components/site/Tourism";
import { Culture } from "@/components/site/Culture";
import { Gastronomy } from "@/components/site/Gastronomy";
import { Gallery } from "@/components/site/Gallery";
import { Directory } from "@/components/site/Directory";
import { EventCalendar } from "@/components/site/EventCalendar";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guadalupe · Portal turístico del Valle Jequetepeque" },
      {
        name: "description",
        content:
          "Portal turístico e informativo del distrito de Guadalupe, provincia de Pacasmayo, La Libertad, Perú: historia, cultura, gastronomía, atractivos y servicios.",
      },
      { property: "og:title", content: "Guadalupe · Portal turístico del Valle Jequetepeque" },
      {
        property: "og:description",
        content:
          "Descubre Guadalupe: historia agustina, iglesia matriz, Pakatnamú, playa La Bocana y la gastronomía del valle Jequetepeque.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tourism />
        <Culture />
        <Gastronomy />
        <Gallery />
        <Directory />
        <EventCalendar />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Toaster richColors position="top-right" />
    </div>
  );
}
