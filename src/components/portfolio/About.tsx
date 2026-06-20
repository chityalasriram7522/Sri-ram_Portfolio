import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import chrome from "@/assets/deco-chrome.png";
import heart from "@/assets/deco-heart.png";
import flower from "@/assets/deco-flower-purple.png";

const float = {
  animate: { y: [0, -14, 0] },
};

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-28">
      {/* floating 3D decorations */}
      <motion.img
        src={chrome}
        alt=""
        aria-hidden
        loading="lazy"
        width={512}
        height={512}
        variants={float}
        animate="animate"
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-2 top-10 h-32 w-32 select-none sm:left-10 sm:h-28 sm:w-28"
      />
      <motion.img
        src={heart}
        alt=""
        aria-hidden
        loading="lazy"
        width={512}
        height={512}
        variants={float}
        animate="animate"
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-16 left-3 h-16 w-16 select-none sm:left-16 sm:h-24 sm:w-24"
      />
      <motion.img
        src={flower}
        alt=""
        aria-hidden
        loading="lazy"
        width={512}
        height={512}
        variants={float}
        animate="animate"
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-none absolute right-2 top-1/3 h-20 w-20 select-none sm:right-12 sm:h-32 sm:w-32"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
          01 / About
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-4 font-black-display uppercase leading-[0.85] tracking-tight chrome-text"
          style={{ fontSize: "clamp(2.75rem, 12vw, 8rem)" }}
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-10 max-w-2xl text-base font-medium leading-relaxed text-foreground/80 sm:text-lg"
        >
          An engineering student specializing in Computer Science, I build modern web
          applications with JavaScript, React, Node.js and Python. I love collaborating on
          products that solve real-world problems and stand out from the crowd.
          <br />
          Let's create something amazing together!
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="gradient-pill mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground"
        >
          Contact Me
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}
