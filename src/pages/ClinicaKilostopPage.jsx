import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import Gallery from "@/components/Gallery";

const images = [
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-107.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop%20Portrete-15.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-100.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-104.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-108.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-112.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-130.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-148.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-150.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-153.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-158.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-159.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-160.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-164.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-180.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-2.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-205.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-213.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-217.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-222.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-41.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-43.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-53.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-68.jpg",
  "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Kilostop/2025.07.26%20Kilostop-97.jpg"
];

const ClinicaKilostopPage = () => {
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
            <h1 className="elegant-text text-4xl md:text-6xl font-bold text-center mb-6">
              Clinica Kilostop
            </h1>
            <p className="modern-sans text-lg max-w-3xl mx-auto text-center">
              Am creat un spațiu medical care îmbină funcționalitatea cu un design calm și primitor, menit să ofere pacienților o experiență relaxantă și pozitivă.
            </p>
          </div>

          <div className="mb-16">
            <Gallery images={images} />
          </div>

          <div className="max-w-4xl mx-auto pb-20">
            <div className="min-h-[10rem]"></div>
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
};

export default ClinicaKilostopPage;