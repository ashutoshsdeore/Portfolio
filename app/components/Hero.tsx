"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

// Background reference image (layout only):
// /mnt/data/b1261c4b-b644-464c-97ab-1da1d0f04432.png

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allowDrag, setAllowDrag] = useState(false);

  // typed as Variants to avoid the "variants" typing error
  const floatingVariants: Variants = {
    float: (i: number = 0) => ({
      y: [0, -8 - (i % 3) * 4, 0],
      x: [0, (i % 2 === 0 ? -6 : 6), 0],
      transition: {
        duration: 6 + (i % 4) * 0.8,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    }),
  };

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  // small decorative floating shapes that are draggable but constrained to viewport area
  const shapes = new Array(6).fill(0).map((_, i) => ({ id: i }));

  // particles (non-draggable) for subtle background movement
  const particles = new Array(20).fill(0).map((_, i) => ({ id: i }));

  // enable drag only on non-mobile & when reduced-motion isn't requested
  useEffect(() => {
    const update = () => {
      const isWide = window.innerWidth >= 768;
      setAllowDrag(isWide && !shouldReduceMotion);
      if (isWide === false) setMobileOpen(false);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [shouldReduceMotion]);

  // Parallax effect: update transform for elements with data-parallax based on mouse position
  useEffect(() => {
    if (shouldReduceMotion) return;

    const onMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 -> 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const layers = containerRef.current?.querySelectorAll('[data-parallax]');
        if (!layers) return;
        layers.forEach((el) => {
          const depth = Number((el as HTMLElement).dataset.depth || '1');
          const translateX = x * 12 * depth;
          const translateY = y * 10 * depth;
          (el as HTMLElement).style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
        });
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [shouldReduceMotion]);

  return (
    <section id="hero" ref={containerRef} className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* decorative tiled faint image as layout reference (low-opacity) */}
      <div className="absolute inset-0 opacity-8 pointer-events-none">
        {/* using uploaded local path as the image source. Move this file into /public for production. */}
        {/* <Image src={'/mnt/data/b1261c4b-b644-464c-97ab-1da1d0f04432.png'} alt="layout-ref" fill style={{ objectFit: 'cover' }} priority /> */}
      </div>

      {/* small floating particles (non-draggable) */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 -z-20 pointer-events-none">
          {particles.map((p, i) => (
            <motion.div
              key={p.id}
              data-parallax
              data-depth={(i % 6) / 8 + 0.15}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.12 + (i % 4) * 0.04, 0], y: [0, -4 + (i % 3) * 2, 0] }}
              transition={{ duration: 5 + (i % 5) * 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: 6 + (i % 3) * 2,
                height: 6 + (i % 3) * 2,
                borderRadius: '50%',
                background: i % 2 === 0 ? 'rgba(99,102,241,0.10)' : 'rgba(79,70,229,0.10)',
                left: `${Math.floor((i * 37) % 100)}%`,
                top: `${Math.floor((i * 53 + 9) % 100)}%`,
                transform: 'translate(-50%, -50%)',
                filter: 'blur(4px)'
              }}
            />
          ))}
        </div>
      )}

      {/* movable animated background shapes (drag only enabled on desktop) */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 -z-10" aria-hidden>
          {shapes.map((s, i) => (
            <motion.div
              key={s.id}
              custom={i}
              data-parallax
              data-depth={(i % 4) / 4 + 0.6}
              variants={floatingVariants}
              animate="float"
              {...(allowDrag ? { drag: true, dragConstraints: containerRef } : {})}
              dragElastic={0.12}
              whileDrag={{ scale: 1.03, rotate: i % 2 === 0 ? -6 : 6 }}
              className={`absolute rounded-2xl blur-3xl opacity-40 sm:opacity-50`} 
              style={{
                width: Math.max(90, 140 + (i % 3) * 20),
                height: Math.max(60, 80 + (i % 2) * 40),
                left: `${6 + i * 14}%`,
                top: `${10 + (i * 9) % 60}%`,
                background: i % 2 === 0 ? 'linear-gradient(90deg,#6366f1,#4f46e5)' : 'linear-gradient(90deg,#7c3aed,#4f46e5)'
              }}
            />
          ))}
        </div>
      )}

      {/* NAVBAR - centered transparent; removed name from left */}
      <header className="absolute top-4 left-80 right-0 z-30 flex justify-center">
        <div className="w-full max-w-3xl mx-auto px-4">
<div className="
  backdrop-blur-md 
  md:bg-white/6 
  bg-transparent
  rounded-full px-3 py-2 
  md:shadow-md md:border md:border-white/10
  flex items-center justify-between
">


            {/* mobile menu toggle */}
            <button
  onClick={() => setMobileOpen((s) => !s)}
  className="
    md:hidden p-2 rounded-lg text-gray-200 
    bg-gradient-to-br from-indigo-600/40 to-purple-600/40 
    border border-white/10 shadow-md 
    backdrop-blur-sm transition-all
    hover:bg-indigo-600/60 hover:scale-105
  "
  aria-label="Toggle menu"
>
  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
</button>


            {/* center nav for md+ */}
            <nav className="hidden md:flex items-center gap-6 text-gray-200 mx-auto"> 
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="hover:text-white transition-colors px-2 py-1 rounded-md">
                  {n.label}
                </a>
              ))}
            </nav>

            {/* placeholder to keep balanced spacing on large screens */}
            <div className="hidden md:block w-6" aria-hidden />
          </div>
        </div>

        {/* mobile dropdown */}
        <div className={`${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'} absolute top-16 left-0 right-0 flex justify-center transition-all duration-200 md:hidden`}>
          <div className="w-full max-w-xs bg-gray-800/80 backdrop-blur rounded-xl px-4 py-3 border border-white/6 shadow-lg">
            <div className="flex flex-col items-center gap-3">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-gray-200 hover:text-white px-3 py-2 w-full text-center" onClick={() => setMobileOpen(false)}>
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* main content - movable/draggable with subtle float; responsive */}
      <motion.div
        className="container mx-auto px-6 relative z-10 touch-none md:touch-auto"
        {...(allowDrag ? { drag: true, dragConstraints: containerRef } : {})}
        dragElastic={0.06}
        whileDrag={allowDrag ? { scale: 1.01, y: -6 } : {}}
        initial={shouldReduceMotion ? {} : { opacity: 0, y: 8 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0, transition: { duration: 0.6 } }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight">
            Abhishek Thote
          </motion.h1>

          <motion.p className="text-xl sm:text-2xl md:text-3xl text-indigo-300 mb-6">
            Full Stack Developer
          </motion.p>

          <motion.p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting robust, scalable web applications with Java, Spring Boot, and React. Passionate about creating seamless user experiences and delivering high-quality solutions.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:abhishekthote8446@gmail.com" className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Mail size={18} />
              <span className="text-sm sm:text-base">Get in Touch</span>
            </a>

            <a href="tel:+917796073435" className="flex items-center gap-2 px-5 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Phone size={18} />
              <span className="text-sm sm:text-base">Call Me</span>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="https://github.com/Abhisheknthote" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-thote-7a1318297/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* scroll indicator */}
      <div className="absolute bottom-12 sm:bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-indigo-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
