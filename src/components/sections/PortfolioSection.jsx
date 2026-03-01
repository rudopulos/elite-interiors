import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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

const PortfolioCard = ({ image, title, path, isMobile = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  if (isMobile) {
    return (
      <motion.div
        variants={itemVariants}
        className="group cursor-pointer"
        onClick={handleClick}
      >
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <h3 className="elegant-text text-2xl text-[#23272B] mt-4 text-center font-semibold">
          {title}
        </h3>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={itemVariants}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <div className="overflow-hidden rounded-lg">
        <div
          className="relative pt-[56.25%] bg-cover bg-center bg-no-repeat transition-transform duration-500 ease-in-out group-hover:scale-110 rounded-lg"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
      <h3 className="elegant-text text-2xl text-[#23272B] mt-4 text-center font-semibold">
        {title}
      </h3>
    </motion.div>
  );
};

export default function PortfolioSection() {
  const portfolioItems = [
     {
      title: "Refined Harmony",
      image: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Refined%20Harmony/Bucatarie%201.jpg.png",
      path: "/proiecte/refined-harmony",
    },
    {
      title: "Apartament Baneasa",
      image: "https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-61.jpg",
      path: "/proiecte/apartament-baneasa",
    },
    {
      title: "Clinica Kilostop",
      image: "https://horizons-cdn.hostinger.com/17b03086-244e-4175-8abf-ec84dfd4b2a1/16fb52e3687898da153ae02a7bc841c7.jpg",
      path: "/proiecte/clinica-kilostop",
    },
  ];

  return (
    <section id="portofoliu" className="py-20 md:py-32 bg-[#FAF9F7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="elegant-text text-4xl md:text-5xl mb-4">
            Portofoliu
          </h2>
          <p className="modern-sans text-lg max-w-2xl mx-auto text-[#23272B]/80">
            Explorați o selecție a proiectelor noastre care demonstrează angajamentul nostru față de excelență și design inovator.
          </p>
        </motion.div>

        {/* Mobile: Vertical Stack with only the first project */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="space-y-16 md:hidden"
        >
          <PortfolioCard 
            key="mobile-main" 
            image={portfolioItems[0].image} 
            title={portfolioItems[0].title} 
            path={portfolioItems[0].path} 
            isMobile={true} 
          />
        </motion.div>
        
        {/* Desktop: Grid with all projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 md:gap-8"
        >
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={`desktop-${index}`} image={item.image} title={item.title} path={item.path} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}