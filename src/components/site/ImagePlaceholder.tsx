import { ImageIcon } from "lucide-react";

type Props = {
  label?: string;
  aspect?: string;
  className?: string;
};

export function ImagePlaceholder({
  label = "Reemplazar imagen",
  aspect = "aspect-[4/3]",
  className = "",
}: Props) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative ${aspect} w-full overflow-hidden rounded-xl border border-dashed border-border bg-gradient-to-br from-secondary via-muted to-secondary ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <ImageIcon className="h-8 w-8 opacity-60" aria-hidden />
        <span className="text-xs font-medium tracking-wide uppercase">
          {label}
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.82_0.11_85/0.15),transparent_60%)]" />
    </div>
  );
}
