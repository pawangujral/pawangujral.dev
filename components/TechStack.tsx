"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "C++", "Node.js"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Redux", "GraphQL", "Angular", "React Native"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Docker", "Kubernetes", "AWS", "Google Cloud"],
  },
  {
    title: "Testing",
    skills: ["Jest", "Mocha", "React Testing Library"],
  },
  {
    title: "Other",
    skills: ["Microfrontend Architecture", "Browser Extensions"],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech-stack" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          // tech-stack
        </motion.p>

        <div className="space-y-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
            >
              <h3 className="font-mono text-sm text-muted mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-[#12121a] border border-[#1e1e2e] rounded-lg text-foreground/80 hover:border-accent/40 hover:text-accent transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
