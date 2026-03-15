import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import { Facebook, Instagram } from "lucide-react";

const images = [
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Modern%20Farmhouse/Bucatarie%203.JPG",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Modern%20Farmhouse/Bucatarie%202.JPG",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Modern%20Farmhouse/Bucatarie%201%20(1).JPG",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Modern%20Farmhouse/Dormitor%202.JPG",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Modern%20Farmhouse/Dormitor%203.JPG",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Modern%20Farmhouse/1.1..jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Modern%20Farmhouse/3.1..jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Modern%20Farmhouse/WhatsApp%20Image%202025-09-07%20at%2017.13.08.jpeg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Modern%20Farmhouse/WhatsApp%20Image%202025-09-07%20at%2017.13.09.jpeg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Modern%20Farmhouse/WhatsApp%20Image%202025-09-07%20at%2017.13.09%20(1).jpeg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Modern%20Farmhouse/WhatsApp%20Image%202025-09-07%20at%2017.13.09%20(2).jpeg",
];

export default function ModernFarmhousePage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] text-[#23272B]">
      <Navbar />
      <main className="pt-24 md:pt-32 bg-[#FAF9F7]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-12">
            <h1 className="elegant-text text-4xl md:text-6xl mb-4 text-[#23272B]">
              Modern Farmhouse
            </h1>
            <p className="modern-sans text-lg md:text-xl max-w-3xl mx-auto text-[#23272B]/80">
              Stilul tradițional întâlnește modernul într-un proiect conturat a fi elegant și primitor. Treptele din stejar masiv transmit putere, durabilitate și longevitate.
            </p>
          </div>

          <div className="mb-16">
            <Gallery images={images} />
          </div>

          <div className="max-w-4xl mx-auto pb-20">
            <div className="min-h-[10rem]">
            </div>
          </div>
        </motion.div>
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