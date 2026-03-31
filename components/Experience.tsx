"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "H&M",
    role: "Senior Frontend Engineer",
    location: "Stockholm, Sweden",
    dates: "Feb 2025 – Present",
    details: [
      "Spearheading multiple initiatives across H&M's global e-commerce platform focusing on performance, scalability, and best-in-class UX",
      "Leading front-end architectural decisions and standardizing development practices across teams",
      "Collaborating with product, design, and backend teams to align solutions with business objectives",
      "Shaping the technical roadmap and contributing to the platform's long-term vision",
    ],
    tech: ["Next.js", "Node.js", "Redux", "GraphQL"],
  },
  {
    company: "Safello",
    role: "Senior Frontend Engineer (Mobile & Web Platform)",
    location: "Stockholm, Sweden",
    dates: "March 2023 – Feb 2025",
    details: [
      "Developed modular architecture and mono repo setup for streamlined feature development",
      "Integrated secure payment and authentication modules",
      "Significantly improved mobile performance and user onboarding experience",
    ],
    tech: ["React Native", "Next.js", "Node.js", "Redux", "GraphQL"],
  },
  {
    company: "Instabox",
    role: "Senior Frontend Engineer",
    location: "Stockholm, Sweden",
    dates: "Nov 2021 – March 2023",
    details: [
      "Led front-end development efforts across the organization, driving scalability and maintainability",
      "Implemented new features that improved delivery tracking accuracy by 20%",
    ],
    tech: ["Next.js", "React", "Node.js"],
  },
  {
    company: "JPMorgan Chase",
    role: "Lead Frontend Engineer",
    location: "Bangalore, India",
    dates: "March 2020 – May 2021",
    details: [
      "Led front-end development across the organization, driving scalability and maintainability",
      "Architected a micro-frontend solution for a next-gen commercial real estate platform",
      "Reduced deployment time by 25% through streamlined processes and automation",
    ],
    tech: ["React.js", "Node.js", "Kubernetes"],
  },
  {
    company: "McAfee",
    role: "Senior UI/UX Engineer",
    location: "Bangalore, India",
    dates: "Oct 2017 – March 2020",
    details: [
      "Delivered end-to-end solutions for antivirus and PC optimization products, improving customer satisfaction",
      "Designed intuitive user interfaces, boosting user engagement by 15%",
    ],
    tech: ["React.js", "Node.js", "Vanilla JavaScript"],
  },
];

const earlierRoles = [
  {
    company: "SwediumGlobal",
    role: "Senior UI Developer",
    location: "Bangalore",
    dates: "July 2015 – Sep 2017",
  },
  {
    company: "i22Technologies",
    role: "Co-founder & Sr. Software Developer",
    location: "Bangalore",
    dates: "April 2010 – July 2015",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          // experience
        </motion.p>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-accent font-mono text-sm">{exp.role}</p>
                </div>
                <div className="md:text-right mt-1 md:mt-0">
                  <p className="text-muted text-sm">{exp.location}</p>
                  <p className="text-muted text-sm font-mono">{exp.dates}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.details.map((detail, j) => (
                  <li key={j} className="text-foreground/70 text-sm flex">
                    <span className="text-accent mr-2 mt-0.5 shrink-0">▹</span>
                    {detail}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
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

        {/* Earlier roles */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="font-mono text-sm text-muted mb-4">
            // earlier-roles
          </h3>
          <div className="glass-card p-6 space-y-4">
            {earlierRoles.map((role) => (
              <div
                key={role.company}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <span className="font-semibold text-foreground">
                    {role.company}
                  </span>
                  <span className="text-muted text-sm ml-2">— {role.role}</span>
                </div>
                <p className="text-muted text-sm font-mono">
                  {role.location} · {role.dates}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
