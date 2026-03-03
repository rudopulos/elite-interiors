import React from "react";
import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import { Facebook, Instagram } from 'lucide-react';
export default function WarmHeavenPage() {
  const projectImages = [{
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/1.jpg",
    alt: "Living room with warm tones"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/2%20Gimp.jpg",
    alt: "Cozy bedroom design"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/2_1%20(2)gimp.jpeg",
    alt: "Cozy bedroom design"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/2_1(3)gimp.jpeg",
    alt: "Kitchen details"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/2_2gimp.jpeg",
    alt: "Relaxing corner with armchair"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/2_3gimp.jpeg",
    alt: "Bathroom with natural light"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/4_2gimp.jpeg",
    alt: "Detail of the living space"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/4gimp.jpg",
    alt: "Warm and inviting corner"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/5_1gimp.jpeg",
    alt: "Image 9"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/5_2%20(2).jpeg",
    alt: "Image 10"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/5_2.jpeg",
    alt: "Image 11"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/5_4gimp.jpeg",
    alt: "Image 12"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/5gimp.jpg",
    alt: "Image 13"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/6gimp.jpg",
    alt: "Image 14"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/6_1gimp.jpeg",
    alt: "Image 15"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/8gimp.jpeg",
    alt: "Image 16"
  }, {
    src: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Warm%20Heaven/7gimp.jpeg",
    alt: "Image 17"
  }];
  return <div className="bg-[#FAF9F7] min-h-screen">
    <Navbar />
    <main className="pt-24 md:pt-32">
      <section className="container mx-auto px-4 py-16">
        <h1 className="elegant-text text-4xl md:text-6xl text-center mb-8 text-[#23272B]">
          Warm Heaven
        </h1>
        <p className="modern-sans text-lg text-center max-w-3xl mx-auto mb-12 text-[#23272B]/80">Un proiect care a fost născut din dorința de simplitate și cu buget redus, dar înzestrat cu o energie caldă și primitoare. Fiecare colț al spațiului invită la relaxare și la trăiri autentice. Funcționalitatea a fost integrată astfel încât totul să fie la îndemână, fără a umbri farmecul locului. Atmosfera a fost gândită ca una prietenoasă și sinceră, menită să facă oaspeții să se simtă imediat acasă.</p>
        <Gallery images={projectImages.map(img => img.src)} />
      </section>
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
  </div>;
}