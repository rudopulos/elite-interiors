import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Facebook, Instagram } from "lucide-react";

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

const PortfolioCard = ({ image, title, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="overflow-hidden rounded-lg">
        <div className="relative pt-[56.25%] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-lg"
          />
        </div>
      </div>
      <h3 className="elegant-text text-2xl text-[#23272B] mt-4 text-center font-semibold">
        {title}
      </h3>
    </motion.div>
  );
};

export default function PortofoliuPage() {
  const portfolioItems = [
    {
      title: "Refined Harmony",
      image: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/hero/Bucatarie%201_result.jpg",
      path: "/proiecte/refined-harmony",
    },
    {
      title: "Blue Oasis",
      image: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/hero/2025.08.06%20AronCotrus-61_result.jpg",
      path: "/proiecte/apartament-baneasa",
    },
    {
      title: "Clinica Kilostop",
      image: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/hero/2025.07.26%20Kilostop-107_result.jpg",
      path: "/proiecte/clinica-kilostop",
    },
    {
      title: "Modern Farmhouse",
      image: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/hero/Bucatarie%203_result.jpg",
      path: "/proiecte/modern-farmhouse",
    },
    {
      title: "Warm Heaven",
      image: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/hero/1_result.jpg",
      path: "/proiecte/warm-heaven",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7] text-[#23272B]">
      <Navbar />
      <main className="pt-24 md:pt-32">
        <section id="portofoliu" className="py-20 md:py-32 bg-[#FAF9F7]">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="text-center mb-16"
            >
              <h1 className="elegant-text text-4xl md:text-5xl mb-4">
                Portofoliu
              </h1>
              <p className="modern-sans text-lg max-w-2xl mx-auto text-[#23272B]/80">
                Explorați o selecție a proiectelor noastre care demonstrează angajamentul nostru față de excelență și design inovator.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {portfolioItems.map((item, index) => (
                <PortfolioCard key={index} image={item.image} title={item.title} path={item.path} />
              ))}
            </motion.div>
          </div>
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
    </div>
  );
}