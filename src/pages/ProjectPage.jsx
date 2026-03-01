import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import Gallery from "@/components/Gallery";
const images = ["https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-41.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-27.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-30.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-31.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-32.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-33.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-56.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-68.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-82.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-36.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-49.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-45.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-51.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-54.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-61.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-87.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-93.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-37.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-100.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-103.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-108.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-112.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-123.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-128.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-134.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-142.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-144.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-149.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-163.jpg", "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-165.jpg"];
const ProjectPage = () => {
  return <div className="min-h-screen bg-[#FAF9F7] text-[#23272B]">
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
            Blue Oasis
          </h1>
          <p className="modern-sans text-lg max-w-3xl mx-auto text-center text-[#23272B]/80">
            Proiectul "Blue Oasis" urmărește crearea unei atmosfere liniștite și rafinate, bazată pe texturi naturale, paletă cromatică sobră și soluții practice de depozitare. Am integrat materiale premium și detalii personalizate pentru a maximiza confortul și funcționalitatea spațiului.
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
          <a href="https://www.facebook.com/profile.php?id=100090130145094" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#A0A0A0] transition-colors">
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
  </div>;
};
export default ProjectPage;