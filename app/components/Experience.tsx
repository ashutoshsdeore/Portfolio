"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion, Variants, useReducedMotion } from "framer-motion";

export default function Experience() {
  const shouldReduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 16 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 10 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16"
        >
          Work <span className="text-indigo-500">Experience</span>
        </motion.h2>

        <motion.div
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeUp}
            whileHover={shouldReduceMotion ? {} : { scale: 1.02, boxShadow: "0 12px 40px rgba(0,0,0,0.45)" }}
            className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-700 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
              <motion.div
                variants={shouldReduceMotion ? undefined : fadeUp}
                className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <Briefcase size={32} className="text-white" />
              </motion.div>

              <div className="flex-grow">
                <motion.h3 variants={shouldReduceMotion ? undefined : fadeUp} className="text-2xl font-bold text-white mb-2">
                  Web Developer Intern
                </motion.h3>

                <motion.h4 variants={shouldReduceMotion ? undefined : fadeUp} className="text-xl text-indigo-400 mb-3">
                  Hollyminds Technologies
                </motion.h4>

                <motion.div variants={shouldReduceMotion ? undefined : fadeUp} className="flex flex-wrap gap-4 mb-6 text-gray-400 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Pune (Remote)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>Jan 2025 – Jul 2025</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bullet Points */}
            <motion.div variants={shouldReduceMotion ? undefined : container} className="space-y-3">
              {[
                "Worked on live projects: Vibrant Minds websites",
                "Developed responsive and interactive web pages using HTML, CSS, JavaScript, and Bootstrap",
                "Implemented backend functionality in PHP, including form submissions, dynamic content management, and page customization",
                "Contributed across the full project lifecycle—from planning and coding to testing and deployment"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={shouldReduceMotion ? undefined : fadeUp}
                  className="flex gap-3"
                >
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-lg">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
