"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  { name: "Cloud Computing", issuer: "IBM" },
  { name: "Front-End Web Developer Nanodegree", issuer: "Udacity" },
  { name: "React Nanodegree", issuer: "Udacity" },
  { name: "Android Basics Nanodegree", issuer: "Google" },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          // certifications
        </motion.p>

        <div className="flex flex-wrap gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="glass-card px-5 py-3 flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="text-accent text-lg">⬡</span>
              <div>
                <p className="text-foreground text-sm font-medium">
                  {cert.name}
                </p>
                <p className="text-muted text-xs font-mono">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
