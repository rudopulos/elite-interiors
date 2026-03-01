import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";

const images = [
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Refined%20Harmony/Bucatarie%203%20gimp.png",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Refined%20Harmony/Bucatarie%202%20gimp.png",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Refined%20Harmony/Bucatarie%201%20gimp.png",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function RefinedHarmonyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 bg-[#FAF9F7]">
        <motion.section
          id="project-details"
          className="py-16 md:py-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.h1
              variants={itemVariants}
              className="elegant-text text-4xl md:text-6xl font-bold text-center mb-6"
            >
              Refined Harmony
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="max-w-4xl mx-auto"
            >
              <p className="modern-sans text-lg text-center max-w-3xl mx-auto mb-12 text-[#23272B]/80">
                Un proiect ce transmite rafinament contemporan, în care nuanțele de alb, crem și maro se împletesc armonios pentru a crea o atmosferă caldă și sofisticată. Liniile curate, accentele aurii și materialele premium definesc un spațiu unde confortul se îmbină cu eleganța discretă. Fiecare detaliu este atent gândit pentru a aduce echilibru și lumină, păstrând funcționalitatea spațiului. Un interior modern, dar atemporal, care reflectă eleganța locuinței din Slatina, județul Olt.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="my-12">
              <Gallery images={images} />
            </motion.div>
          </div>
        </motion.section>
      </main>
    </>
  );
}