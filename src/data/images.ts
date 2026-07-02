// Mapa central de imágenes del portal.
// Para reemplazar una imagen, sustituye el archivo en /public/images/
// con el mismo nombre. Si cambias la extensión (ej. .svg -> .jpg),
// edita ÚNICAMENTE este archivo.

export const images = {
  hero: "/images/hero.svg",

  turismo: {
    "pueblo-historico": "/images/turismo-pueblo-historico.jpg",
    "iglesia-matriz": "/images/turismo-iglesia-matriz.jpg",
    pakatnamu: "/images/turismo-pakatnamu.jpg",
    "playa-bocana": "/images/turismo-playa-bocana.svg",
    pacatnamu: "/images/turismo-pacatnamu.jpg",
    campina: "/images/turismo-campina.jpg",
  },

  gastronomia: {
    "sudado-lifes": "/images/gastronomia-sudado-lifes.jpg",
    "arroz-pato": "/images/gastronomia-arroz-pato.jpg",
    "seco-cabrito": "/images/gastronomia-seco-cabrito.jpg",
    dulces: "/images/gastronomia-dulces.jpg",
  },

  galeria: [
    "/images/galeria-1.jpg",
    "/images/galeria-2.jpg",
    "/images/galeria-3.jpg",
    "/images/galeria-4.jpg",
    "/images/galeria-5.jpg",
    "/images/galeria-6.jpg",
    "/images/galeria-7.jpg",
    "/images/galeria-8.jpg",
  ],
} as const;
