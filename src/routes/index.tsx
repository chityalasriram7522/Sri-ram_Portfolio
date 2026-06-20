import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chityala Sri Ram · Full Stack Developer & Frontend Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Chityala Sri Ram, a Full Stack Developer and Frontend Engineer from Hyderabad building modern web apps with React, Node.js and JavaScript.",
      },
      { property: "og:title", content: "Chityala Sri Ram · Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Developer & Frontend Engineer building modern web applications with React, Node.js and JavaScript.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
