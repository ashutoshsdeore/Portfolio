"use client";

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Contact() {
  const container: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, when: "beforeChildren", duration: 0.5 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100 text-center mb-12">
          Get In <span className="text-[#6366F1]">Touch</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#2f2b6b] to-[#3f3ba8] rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(20,18,45,0.55)] border border-gray-700"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-3">Let's Work Together</h3>
              <p className="text-indigo-100 text-base md:text-lg max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Email */}
              <motion.a
                href="mailto:abhishekthote8446@gmail.com"
                className="flex flex-col items-center rounded-xl p-6 bg-white/6 backdrop-blur-sm border border-white/10 hover:bg-white/8 transition-all"
                variants={item}
                whileHover={{ scale: 1.03 }}
                aria-label="Send email"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-white/10 border border-white/8">
                  <Mail size={22} className="text-indigo-100" />
                </div>

                <h4 className="text-gray-100 font-semibold text-center mb-1">Email</h4>
                <p className="text-indigo-100 text-sm text-center break-words">
                  abhishekthote8446@gmail.com
                </p>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+917796073435"
                className="flex flex-col items-center rounded-xl p-6 bg-white/6 backdrop-blur-sm border border-white/10 hover:bg-white/8 transition-all"
                variants={item}
                whileHover={{ scale: 1.03 }}
                aria-label="Call phone"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-white/10 border border-white/8">
                  <Phone size={22} className="text-indigo-100" />
                </div>

                <h4 className="text-gray-100 font-semibold text-center mb-1">Phone</h4>
                <p className="text-indigo-100 text-sm text-center">+91-7796073435</p>
              </motion.a>

              {/* Location */}
              <motion.div
                className="flex flex-col items-center rounded-xl p-6 bg-white/6 backdrop-blur-sm border border-white/10"
                variants={item}
                whileHover={{ scale: 1.03 }}
                aria-label="Location"
              >
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 bg-white/10 border border-white/8">
                  <MapPin size={22} className="text-indigo-100" />
                </div>

                <h4 className="text-gray-100 font-semibold text-center mb-1">Location</h4>
                <p className="text-indigo-100 text-sm text-center">India</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="mt-10  text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Abhishek Namdeo Thote. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
