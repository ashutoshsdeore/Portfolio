"use client";

import React from "react";
import { Award, BookOpen, Calendar } from "lucide-react";
import { motion, Variants, useReducedMotion } from "framer-motion";

const education = [
  {
    degree: "B.Tech – Information Technology",
    institution: "MGM's University",
    period: "July 2025",
    achievement: "Graduated with Distinction",
    icon: "🎓",
  },
  {
    degree: "Diploma – Information Technology",
    institution: "Government Polytechnic",
    period: "June 2022",
    achievement: "Graduated with Distinction",
    icon: "📚",
  },
];

export default function Education() {
  const shouldReduce = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, when: "beforeChildren" },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.995 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 14 },
    },
  };

  return (
    <section id="education" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Decorative image (uses the uploaded file) */}
      <img
        src="/mnt/data/2ebf62a5-ab22-4ad3-99c4-6360775cebdb.png"
        alt="decorative pattern"
        className="pointer-events-none hidden lg:block absolute -right-20 top-4 w-96 opacity-10"
      />

      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100 text-center mb-12">
          <span className="text-white">Education</span>
        </h2>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={container}
          initial={shouldReduce ? "show" : "hidden"}
          animate="show"
        >
          {education.map((edu, i) => (
            <motion.article
              key={i}
              className="bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-700 hover:border-[#6366F1] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#6366F155] outline-none"
              variants={card}
              whileHover={shouldReduce ? {} : { scale: 1.02, boxShadow: "0 10px 30px rgba(99,102,241,0.08)" }}
              tabIndex={0}
              aria-labelledby={`edu-${i}-title`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                <div className="w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center"
                     style={{ background: "linear-gradient(135deg,#6366F1 0%, #4f46e5 100%)" }}>
                  <span className="text-3xl">{edu.icon}</span>
                </div>

                <div className="flex-grow">
                  <h3 id={`edu-${i}-title`} className="text-2xl font-semibold text-gray-100 mb-2">
                    {edu.degree}
                  </h3>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-[#cbd5ff]" />
                      <span className="text-sm md:text-base text-gray-300">{edu.institution}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#cbd5ff]" />
                      <span className="text-sm text-gray-300">{edu.period}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-[#6366F1]/10 text-[#c7d2fe] rounded-full border border-[#6366F1]/20">
                    <Award size={16} />
                    <span className="font-medium text-sm">{edu.achievement}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* small footer note for the section */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Formal education plus hands-on projects and internships — always learning and building.
          </p>
        </div>
      </div>
    </section>
  );
}
