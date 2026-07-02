import { useState } from "react";
import { ImageIcon } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Renderiza una imagen desde /public/images/ con carga diferida y fallback
 * visual. Para reemplazar la imagen, cambia el archivo en la carpeta
 * public/images/ (o edita src/data/images.ts).
 */
export function SmartImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
}: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden bg-gradient-to-br from-secondary via-muted to-secondary ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
          <ImageIcon className="h-8 w-8 opacity-60" aria-hidden />
          <span className="text-xs font-medium tracking-wide uppercase">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
}
