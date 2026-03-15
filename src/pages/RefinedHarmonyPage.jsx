import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import { Facebook, Instagram } from "lucide-react";

const images = [
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Refined%20Harmony/Bucatarie%201.JPG",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Refined%20Harmony/Bucatarie%202.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Refined%20Harmony/Bucatarie%203.jpg",
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
    <div className="min-h-screen bg-[#FAF9F7] text-[#23272B]">
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
      <footer className="py-12 bg-[#23272B] text-[#FAF9F7]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-6 mb-6">
            <a href="https://www.facebook.com/profile.php?id=100090130145094&mibextid=wwXIfr&rdid=0G1VVVwqnS2tcTy3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15XgVwRWa6%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#A0A0A0] transition-colors">
              <Facebook size={28} />
            </a>
            <a href="https://www.instagram.com/byeliteinteriors/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#A0A0A0] transition-colors">
              <Instagram size={28} />
            </a>
          </div>
          <p className="modern-sans text-sm mb-2">@byeliteinteriors</p>
          <p className="modern-sans text-xs opacity-70">
            &copy; {new Date().getFullYear()} Elite Interiors. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}