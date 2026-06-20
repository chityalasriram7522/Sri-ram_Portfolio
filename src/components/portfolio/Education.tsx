import { motion } from "motion/react";
import { GraduationCap, Award, Code2, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const education = [
  {
    period: "2023 - Present",
    title: "B.Tech Computer Science",
    place: "Malla Reddy Engineering College",
    note: "CGPA: 8.6",
  },
];

const certifications: { title: string; icon: LucideIcon }[] = [
  { title: "Deloitte Data Analytics", icon: BarChart3 },
  { title: "Python Certification", icon: Code2 },
  { title: "C Programming Certification", icon: Award },
  { title: "Cognizant Technoverse Hackathon", icon: Award },
  

];

export function Education() {
  return (
    <section id="education" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle index="04 / Education" outline="Education" highlight="& Certs" />


        <div className="mt-12 grid gap-16 lg:grid-cols-2">
          {/* Timeline */}
          <div>
            <h2 className="mb-8 font-display text-3xl font-semibold sm:text-4xl">
              Education <span className="text-gradient">Timeline</span>
            </h2>
            <div className="relative border-l border-white/10 pl-8">
              {education.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pb-8"
                >
                  <span className="absolute -left-[42px] flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground glow">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {item.period}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.place}</p>
                  <span className="mt-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {item.note}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="mb-8 font-display text-3xl font-semibold sm:text-4xl">
              Certifications
            </h2>
            <div className="grid gap-4">
              {certifications.map((cert, i) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="glass flex items-center gap-4 rounded-2xl p-5 transition-shadow hover:glow"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-medium">{cert.title}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
