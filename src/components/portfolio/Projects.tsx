import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/Screenshot 2026-04-30 110228.png";
import project2 from "@/assets/Screenshot 2026-06-20 130235.png";
import project3 from "@/assets/Screenshot 2026-06-20 130409.png";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Hospital Management Assistant",
    subtitle: "AI Powered Healthcare Platform",
    description:
      "A voice-enabled assistant that streamlines hospital workflows using speech recognition and synthesis for hands-free interaction.",
    tags: ["React", "Web Speech API", "Speech Synthesis"],
    image: project1,
    link: "https://chityalasriram7522.github.io/Hospital-Management-Assistant-Using-React/",
  },
  {
    title: "Dwaraka Foundation",
    subtitle: "Full Stack Donation Platform",
    description:
      "An end-to-end donation platform enabling secure contributions, campaign tracking and transparent fund management.",
    tags: ["Node.js", "MongoDB", "JavaScript"],
    image: project2,
    link: "https://chityalasriram7522.github.io/Dwaraka-Foundation-Social-Impact-Platform-using-Javascript/",
  },
  {
    title: "Bhagavad Gita Digital",
    subtitle: "Interactive Knowledge Platform",
    description:
      "A digital library of verses with a powerful search engine, letting users explore teachings instantly and intuitively.",
    tags: ["React", "JSON", "Search Engine"],
    image: project3,
    link: "https://chityalasriram7522.github.io/Bhagavad-Gita-Book/",
  },
];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.02]"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center gap-4 px-5 py-6 text-left sm:px-8"
      >
        <span className="font-black-display text-3xl text-white/20 transition-colors group-hover:text-foreground sm:text-5xl">
          0{index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-black-display text-base uppercase tracking-wide sm:text-2xl">
            {project.title}
          </h3>
          <p className="truncate text-xs text-muted-foreground sm:text-sm">{project.subtitle}</p>
        </div>
        <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  onClick={(e) => e.stopPropagation()}
  className={`shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all sm:text-xs ${
    open
      ? "border-foreground bg-foreground/5 text-foreground"
      : "border-white/25 text-muted-foreground group-hover:border-foreground group-hover:text-foreground"
  } inline-flex`}
>
  Live <span className="hidden sm:inline">Project</span>
  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
</a>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 sm:px-5 sm:pb-5">
              {/* gallery */}
              <div className="grid gap-3 sm:grid-cols-3">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={896}
                  height={640}
                  className="h-48 w-full rounded-2xl object-cover sm:col-span-2 sm:h-72"
                />
                <div className="grid grid-rows-2 gap-3">
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="hidden h-full w-full rounded-2xl object-cover sm:block"
                    style={{ objectPosition: "right" }}
                  />
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="hidden h-full w-full rounded-2xl object-cover sm:block"
                    style={{ objectPosition: "left" }}
                  />
                </div>
              </div>
              <div className="px-2 pt-5 sm:px-3">
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[150px]" />
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center font-black-display uppercase leading-[0.85] tracking-tight chrome-text"
          style={{ fontSize: "clamp(2.75rem, 12vw, 8rem)" }}
        >
          Projects
        </motion.h2>

        <div className="mt-14 flex flex-col gap-4">
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
