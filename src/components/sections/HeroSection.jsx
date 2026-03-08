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
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FAF9F7]"
    >
      <div className="container mx-auto px-4 z-10">
        <motion.div initial="initial" animate="animate" variants={fadeIn} className="text-center">
          <h1 className="elegant-text text-5xl md:text-7xl mb-6 text-[#1A1A1A]">BY ELITE INTERIORS</h1>
          <p className="modern-sans text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            La Elite Interiors, știm că designul interior este mai mult decât estetică
          </p>
        </motion.div>
      </div>
    </header>
  );
}