# Imágenes del portal de Guadalupe

Todas las imágenes del sitio se cargan desde esta carpeta (`/public/images/`).
Para reemplazar cualquier imagen **NO** modifiques el código: solo sustituye el
archivo por otro con el **mismo nombre**.

## Cómo reemplazar una imagen

1. Prepara tu foto (recomendado JPG optimizado, ancho ≥ 1200 px).
2. Renómbrala con el nombre exacto del placeholder que quieres reemplazar
   (respetando extensión, ver tabla más abajo).
3. Cópiala dentro de `public/images/` sobreescribiendo el archivo existente.
4. Refresca el navegador — la nueva imagen aparecerá automáticamente.

Si quieres cambiar de extensión (por ejemplo pasar de `.svg` a `.jpg`),
edita el mapa de imágenes en `src/data/images.ts` — es el único lugar donde
se listan las rutas.

## Listado de imágenes

| Sección     | Archivo                              |
| ----------- | ------------------------------------ |
| Hero        | `hero.svg`                           |
| Turismo     | `turismo-pueblo-historico.svg`       |
| Turismo     | `turismo-iglesia-matriz.svg`         |
| Turismo     | `turismo-pakatnamu.svg`              |
| Turismo     | `turismo-playa-bocana.svg`           |
| Turismo     | `turismo-pacatnamu.svg`              |
| Turismo     | `turismo-campina.svg`                |
| Gastronomía | `gastronomia-sudado-lifes.svg`       |
| Gastronomía | `gastronomia-arroz-pato.svg`         |
| Gastronomía | `gastronomia-seco-cabrito.svg`       |
| Gastronomía | `gastronomia-dulces.svg`             |
| Galería     | `galeria-1.svg` a `galeria-8.svg`    |

> Consejo: si reemplazas por `.jpg`, cambia también la ruta en
> `src/data/images.ts`. Un solo archivo, muy fácil de mantener.
