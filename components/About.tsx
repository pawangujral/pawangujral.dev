"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const quickFacts = [
  { label: "12+", desc: "Years Experience" },
  { label: "2", desc: "Countries Worked In" },
  { label: "React / Next.js / React Native", desc: "Specialist" },
  { label: "H&M", desc: "Currently @" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          // about
        </motion.p>

        <motion.p
          className="text-foreground/80 text-lg leading-relaxed max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I&apos;m a Senior Frontend Engineer based in Stockholm, Sweden, with
          12+ years of experience building user-centric web and mobile
          applications. I specialize in scalable frontend architectures, the
          React ecosystem, and performance-driven development. Currently, I lead
          architectural decisions and strategic initiatives at H&M&apos;s COS
          global e-commerce platform. I thrive on cross-functional
          collaboration, mentoring teams, and delivering digital experiences that
          make a real impact.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickFacts.map((fact, i) => (
            <motion.div
              key={fact.desc}
              className="glass-card p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
            >
              <p className="text-accent font-mono font-bold text-xl mb-1">
                {fact.label}
              </p>
              <p className="text-muted text-sm">{fact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
