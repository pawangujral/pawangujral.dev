"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Safello Crypto Exchange",
    description:
      "Full-stack mobile and web crypto trading platform with payment integration, login modules, monorepo architecture, and optimized mobile UX.",
    tech: ["React Native", "Next.js", "Node.js", "Redux", "GraphQL"],
  },
  {
    name: "JPMC Real Estate Platform",
    description:
      "Scalable commercial real estate platform built with micro-frontend architecture, improving system performance by 30%.",
    tech: ["React", "Styled-Components", "Material-UI"],
  },
  {
    name: "McAfee Gamer Security",
    description:
      "Antivirus software tailored for gamers with optimized resource consumption, reducing CPU usage by 20%.",
    tech: ["React.js", "TypeScript", "Electron"],
  },
  {
    name: "McAfee Web Boost / PC Optimizer",
    description:
      "Browser extension to block autoplay videos and enhance browsing speed for end users.",
    tech: ["Angular", "JavaScript"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          // projects
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="glass-card p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-bold text-foreground mb-2">
                {project.name}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
