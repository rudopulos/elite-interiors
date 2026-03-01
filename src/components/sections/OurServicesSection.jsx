import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: 'easeOut' },
};

const ServiceBlock = ({ image, title, text, reverse = false }) => {
  const imageBlock = (
    <div className="md:w-1/2 overflow-hidden rounded-lg">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105" />
    </div>
  );

  const textBlock = (
    <div className="md:w-1/2 flex flex-col justify-center">
      <h3 className="elegant-text text-3xl md:text-4xl mb-4">{title}</h3>
      <p className="modern-sans text-base md:text-lg text-[#23272B]/80 leading-relaxed">
        {text}
      </p>
    </div>
  );

  return (
    <motion.div
      initial={fadeIn.initial}
      whileInView={fadeIn.whileInView}
      viewport={fadeIn.viewport}
      transition={fadeIn.transition}
      className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      {imageBlock}
      {textBlock}
    </motion.div>
  );
};

export default function OurServicesSection() {
  const services = [
    {
      title: 'Full-Service Interior Design',
      text: 'Prin serviciul nostru de Full-Service Interior Design, transformăm ideile într-un concept complet și coerent. Ne ocupăm de fiecare etapă a proiectării — de la analiza spațiului și definirea stilului, la planuri tehnice detaliate și selecția materialelor — pentru a crea un proiect care reflectă personalitatea ta și adaugă valoare reală locuinței. Totul într-un proces rafinat, bine structurat și lipsit de stres, în care tu te bucuri de frumusețea rezultatului final.',
      image: 'https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/serviciile%20noastre/WhatsApp%20Image%202025-09-09%20at%2010.58.58.jpeg',
      reverse: false,
    },
    {
      title: 'Interior Design Virtual',
      text: 'Redescoperă-ți spațiul cu ușurință, în propriul tău ritm. Serviciul nostru de Virtual Interior Design Virtual îți oferă aceeași atenție la detaliu și proiectare personalizată, dar cu flexibilitatea comunicării la distanță. Primești planuri de design clare și liste de achiziții atent selectate, astfel încât să-ți transformi locuința pe un parcurs adaptat programului și ritmului tău de viață.',
      image: 'https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/serviciile%20noastre/WhatsApp%20Image%202025-09-09%20at%2011.00.37.jpeg',
      reverse: true,
    },
  ];

  return (
    <section id="our-services" className="py-20 md:py-32 bg-[#FAF9F7]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.whileInView}
          viewport={fadeIn.viewport}
          transition={fadeIn.transition}
          className="text-center mb-16"
        >
          <h2 className="elegant-text text-4xl md:text-5xl mb-4">Serviciile noastre</h2>
        </motion.div>
        <div className="space-y-20 md:space-y-28">
          {services.map((service, index) => (
            <ServiceBlock
              key={index}
              image={service.image}
              title={service.title}
              text={service.text}
              reverse={service.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}