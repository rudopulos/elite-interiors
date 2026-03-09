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
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Container */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url("https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/hero/WhatsApp%20Image%202026-03-03%20at%2012.51.02.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Light overlay to make dark text readable */}
        <div className="absolute inset-0 bg-white/40"></div>
        {/* Subtle Gradient fade to blend with the next section */}
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#FAF9F7]/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative pt-20">
        <motion.div initial="initial" animate="animate" variants={fadeIn} className="text-center max-w-4xl mx-auto">
          <h1 className="elegant-text text-5xl md:text-7xl mb-6 text-[#2C3034] tracking-wide drop-shadow-sm">
            BY ELITE INTERIORS
          </h1>
          <p className="modern-sans text-lg md:text-2xl text-[#3A3F44] max-w-3xl mx-auto font-medium drop-shadow-sm">
            La Elite Interiors, știm că designul interior este mai mult decât estetică
          </p>
        </motion.div>
      </div>
    </header>
  );
}