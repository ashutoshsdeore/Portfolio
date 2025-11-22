"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";

/**
 * Skills component with movable (draggable) cards + subtle floating animation
 * - Place your icon files inside /public (e.g. react.svg, git.svg, ...)
 * - Draggable on desktop, reduced motion respected
 */

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const skills = [
    { name: "React", icon: "react.svg" },
    { name: "Git", icon: "git.svg" },
    { name: "HTML5", icon: "html5.svg" },
    { name: "CSS3", icon: "css3.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "SQL", icon: "sql.svg" },
    { name: "Java", icon: "java.svg" },
    { name: "Bootstrap", icon: "bootstrap.svg" },
    { name: "Postman", icon: "postman.svg" },
    { name: "PHP", icon: "php.svg" },
    { name: "API", icon: "api.svg" },
    { name: "SprinBoot", icon: "spring.svg" },
  ];

  const container: Variants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
  };

  const card: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 110, damping: 14 } },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
          Technical <span className="text-indigo-500">Skills</span>
        </h2>

        {/* Grid layout: containerRef used as dragConstraints box */}
        <motion.div
          ref={containerRef}
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name + i}
              className="flex flex-col items-center w-full"
              variants={shouldReduceMotion ? undefined : card}
              whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            >
              {/* draggable square card */}
              <motion.div
                drag={!shouldReduceMotion}
                dragConstraints={containerRef}
                dragElastic={0.12}
                whileDrag={{ scale: 1.02, boxShadow: "0 14px 40px rgba(0,0,0,0.45)" }}
                className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center cursor-grab"
                style={{ boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.03)" }}
                aria-label={`${skill.name} (draggable)`}
              >
                {/* floating icon inside card for subtle motion */}
                <motion.div
                  animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                  transition={shouldReduceMotion ? undefined : { duration: 3.5 + (i % 3) * 0.4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
                  className="w-14 h-14 flex items-center justify-center"
                >
                  <Image
                    src={`/${skill.icon}`}
                    alt={skill.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>

              <span className="mt-3 text-gray-300 text-sm md:text-base">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-sm text-gray-500 mt-6">Tip: drag cards on desktop to rearrange them visually. Reduced-motion preferences will disable movement for accessibility.</p>
      </div>
    </section>
  );
}
