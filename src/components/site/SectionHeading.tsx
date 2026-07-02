import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"} mb-12`}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
