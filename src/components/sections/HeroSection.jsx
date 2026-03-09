import React from "react";
import { motion } from "framer-motion";
const fadeIn = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.6
  }
};
export default function HeroSection({
  onContactClick
}) {
  return (
    <header
      id="hero"
      className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#FAF9F7]"
    >
      {/* Left side: Content */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16 z-10 pt-32 lg:pt-0">
        <motion.div initial="initial" animate="animate" variants={fadeIn} className="max-w-xl text-left">
          <h1 className="elegant-text text-5xl md:text-7xl mb-6 text-[#1A1A1A] leading-tight">
            BY ELITE<br />INTERIORS
          </h1>
          <p className="modern-sans text-lg md:text-xl text-gray-600 mb-8">
            La Elite Interiors, știm că designul interior este mai mult decât estetică. Creăm spații atemporale.
          </p>
        </motion.div>
      </div>

      {/* Right side: Image */}
      <div className="flex-1 relative h-[50vh] lg:h-screen w-full">
        <div
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            backgroundImage: 'url("https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/hero/WhatsApp%20Image%202026-03-03%20at%2012.51.02.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
    </header>
  );
}