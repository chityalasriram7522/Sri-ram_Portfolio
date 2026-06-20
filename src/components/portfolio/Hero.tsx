import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import portrait from "@/assets/ChatGPT Image Jun 20, 2026, 09_29_50 PM-Photoroom.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-28 pb-10"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Big chrome headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-0 whitespace-nowrap text-center font-black-display uppercase leading-[0.85] tracking-tight chrome-text"
          style={{ fontSize: "clamp(1.75rem, 9vw, 11rem)" }}
        >
          Hi, I'm Sri Ram
        </motion.h1>

        {/* Layered photo + side content */}
        <div className="relative -mt-4 flex flex-col items-center sm:-mt-10">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="pointer-events-none relative z-10"
          >
            <div className="absolute -inset-8 rounded-full bg-primary/25 blur-3xl" />
            
           <img
  src={portrait}
  alt="Chityala Sri Ram"
  width={896}
  height={1152}
 className="relative h-[58vw] max-h-[650px] min-h-[300px] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
//   style={{
//   WebkitMaskImage:
//     "radial-gradient(ellipse at bottom, black 75%, transparent 100%)",
//   maskImage:
//     "radial-gradient(ellipse at bottom, black 75%, transparent 100%)",
     
// }}
style={{
    WebkitMaskImage:
      "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
    maskImage:
      "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
  }}
/>
          </motion.div>

          {/* description bottom-left */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="z-20 mt-2 max-w-xs text-center text-sm font-bold uppercase leading-relaxed tracking-wider text-muted-foreground sm:absolute sm:left-0 sm:top-1/3 sm:text-left"
          >
            A full stack developer passionate about crafting bold and modern web projects ✦
          </motion.p>

          {/* CTA bottom-left side-by-side */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.35 }}
  className="z-20 mt-6 flex flex-wrap items-center justify-start gap-4 sm:absolute sm:left-0 sm:top-[65%] sm:flex-row sm:items-center"
>
  <a
    href="#contact"
    className="gradient-pill inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-primary-foreground"
  >
    Contact Me
    <ArrowRight className="h-4 w-4" />
  </a>
  <a
    href="/resume.pdf"
    download
    className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-white/10"
  >
    <Download className="h-4 w-4" />
    Resume
  </a>
</motion.div>
        </div>
      </div>
    </section>
  );
}
