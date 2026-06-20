import { motion } from "motion/react";

export function SectionTitle({
  index,
  outline,
  highlight,
  className = "",
}: {
  index: string;
  outline: string;
  highlight?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{index}</span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mt-3 font-display font-black uppercase leading-[0.85] tracking-tighter"
        style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
      >
        <span className="outline-text">{outline}</span>
        {highlight ? <span className="text-gradient"> {highlight}</span> : null}
      </motion.h2>
    </div>
  );
}
