// Mapa central de imágenes del portal.
// Para reemplazar una imagen, sustituye el archivo en /public/images/
// con el mismo nombre. Si cambias la extensión (ej. .svg -> .jpg),
// edita ÚNICAMENTE este archivo.

export const images = {
  hero: "/images/hero.svg",

  turismo: {
    "pueblo-historico": "/images/turismo-pueblo-historico.svg",
    "iglesia-matriz": "/images/turismo-iglesia-matriz.svg",
    pakatnamu: "/images/turismo-pakatnamu.svg",
    "playa-bocana": "/images/turismo-playa-bocana.svg",
    pacatnamu: "/images/turismo-pacatnamu.svg",
    campina: "/images/turismo-campina.svg",
  },

  gastronomia: {
    "sudado-lifes": "/images/gastronomia-sudado-lifes.svg",
    "arroz-pato": "/images/gastronomia-arroz-pato.svg",
    "seco-cabrito": "/images/gastronomia-seco-cabrito.svg",
    dulces: "/images/gastronomia-dulces.svg",
  },

  galeria: [
    "/images/galeria-1.svg",
    "/images/galeria-2.svg",
    "/images/galeria-3.svg",
    "/images/galeria-4.svg",
    "/images/galeria-5.svg",
    "/images/galeria-6.svg",
    "/images/galeria-7.svg",
    "/images/galeria-8.svg",
  ],
} as const;
