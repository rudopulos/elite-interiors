import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/sections/ContactForm";

const ContactSection = React.forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref} className="py-20 bg-[#FAF9F7]">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="elegant-text text-4xl md:text-5xl mb-8">
            Contactează-ne
          </h2>
        </motion.div>
        <ContactForm />
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
export default ContactSection;