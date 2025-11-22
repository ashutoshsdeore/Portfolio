"use client";

import React from "react";
import { Award, CheckCircle } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";

export default function Certifications() {
  const shouldReduceMotion = useReducedMotion();

  const certifications = [
    {
      title: "Internship Certificate",
      issuer: "Hollyminds Technologies",
      description: "Completed 6-month web development internship",
    },
    {
      title: "Full Stack Development in Java",
      issuer: "Professional Certification",
      description: "Comprehensive training in Java full stack development",
    },
    {
      title: "SQL Programming Certificate",
      issuer: "Database Certification",
      description: "Advanced SQL and database management",
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  const iconPulse: Variants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.06,
      rotate: 6,
      transition: { repeat: Infinity, repeatType: "reverse", duration: 0.9 },
    },
  };

  return (
    <section id="certifications" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
          <span className="text-indigo-500">Certifications</span> &amp; Achievements
        </h2>

        {/* responsive grid: 1 column mobile, 2 on small, 3 on md+ */}
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : "visible"}
        >
          {certifications.map((cert, index) => (
            <motion.article
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-transform duration-300 transform will-change-transform"
              variants={shouldReduceMotion ? undefined : card}
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.45)" }}
              whileFocus={shouldReduceMotion ? {} : { scale: 1.03 }}
              tabIndex={0}
              aria-labelledby={`cert-title-${index}`}
            >
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center mb-4"
                initial="rest"
                whileHover={shouldReduceMotion ? undefined : "hover"}
                animate="rest"
                variants={iconPulse}
              >
                <Award size={28} className="text-white" aria-hidden />
              </motion.div>

              <h3 id={`cert-title-${index}`} className="text-xl font-bold text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-indigo-400 font-semibold mb-3">{cert.issuer}</p>
              <p className="text-gray-400 leading-relaxed">{cert.description}</p>

              <motion.div
                className="mt-4 flex items-center gap-2 text-green-400"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.15 + index * 0.05 } }}
              >
                <CheckCircle size={16} aria-hidden />
                <span className="text-sm">Verified</span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* small decorative SVG to improve responsiveness and visual rhythm; hidden from assistive tech */}
      <svg
        aria-hidden
        className="hidden lg:block absolute right-0 top-24 w-48 h-48 opacity-10 pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" stroke="url(#g)" strokeWidth="2" />
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#6366f1" />
            <stop offset="1" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
