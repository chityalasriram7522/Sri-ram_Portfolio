import { motion } from "motion/react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaPython, FaFigma, FaJava } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";
import { TbApi, TbDeviceMobile } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import { SectionTitle } from "./SectionTitle";

type Skill = { name: string; icon: IconType };
type Group = { title: string; skills: Skill[] };

const groups: Group[] = [
   {
    title: "",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: FaPython },
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Responsive Design", icon: TbDeviceMobile },
       { name: "Node.js", icon: FaNodeJs },
      { name: "REST APIs", icon: TbApi },
      { name: "SQL", icon: SiMysql },
       { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: FaFigma },
      { name: "VS Code", icon: VscVscode },
    ],
  },
  // {
  //   title: "Frontend",
  //   skills: [
  //     { name: "React.js", icon: FaReact },
  //     { name: "JavaScript", icon: SiJavascript },
  //     { name: "HTML5", icon: FaHtml5 },
  //     { name: "CSS3", icon: FaCss3Alt },
  //     { name: "Responsive Design", icon: TbDeviceMobile },
  //   ],
  // },
  // {
  //   title: "Backend",
  //   skills: [
  //     { name: "Node.js", icon: FaNodeJs },
  //     { name: "REST APIs", icon: TbApi },
  //   ],
  // },
  // {
  //   title: "Tools",
  //   skills: [
  //     { name: "Git", icon: FaGitAlt },
  //     { name: "GitHub", icon: FaGithub },
  //     { name: "Figma", icon: FaFigma },
  //     { name: "VS Code", icon: VscVscode },
  //   ],
  // },
  // {
  //   title: "Database",
  //   skills: [{ name: "SQL", icon: SiMysql }],
  // },
];

function SkillCard({ skill, delay }: { skill: Skill; delay: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -6 }}
      className="group glass flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-shadow hover:glow"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary transition-colors group-hover:bg-primary/20">
        <Icon />
      </span>
      <span className="text-sm font-medium">{skill.name}</span>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-secondary/15 blur-[150px]" />
      <div className="mx-auto max-w-6xl">
        <SectionTitle index="02 / Skills" outline="Skills" highlight="& Tools" />

        <div className="mt-12">
          {groups.map((group) => (
            <div key={group.title}>
              {group.title && (
                <h3 className="mb-4 font-display text-lg font-semibold text-foreground/90">
                  {group.title}
                </h3>
              )}
              
              {/* Changed gap-3 to gap-5 and added sm:gap-6 for more breathing room */}
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
                {group.skills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} delay={i * 0.05} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}