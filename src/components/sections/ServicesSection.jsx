import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
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

export default function ServicesSection() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const serviceButtons = [
    { label: "DESPRE", action: () => navigate("/despre") },
    { label: "Servicii", action: () => navigate("/servicii") },
    { label: "PORTOFOLIU", action: () => navigate("/portofoliu") },
  ];

  return (
    <section id="servicii" className="py-20 md:py-32 bg-[#F4F1ED]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="elegant-text text-4xl md:text-5xl mb-4">
            Solutii <span>potrivite</span> spatiului tau
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          {serviceButtons.map((buttonInfo, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Button
                onClick={buttonInfo.action}
                variant="ghost"
                className="modern-sans uppercase tracking-wider text-sm px-8 py-4 text-[#23272B] hover:text-[#A0A0A0] focus:text-[#A0A0A0] focus:outline-none border border-transparent hover:border-[#A0A0A0] transition-colors duration-300"
              >
                {buttonInfo.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}