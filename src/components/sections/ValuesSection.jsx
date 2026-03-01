import React from "react";
import { motion } from "framer-motion";

const valuesData = [
  {
    title: "Eleganță",
    description: "Fiecare proiect este o fuziune între rafinament și inovație. Creăm spații care nu doar că impresionează, dar și inspiră, reflectând gustul și personalitatea celor care le locuiesc."
  },
  {
    title: "Excelență",
    description: "Atenția noastră la detalii este nemărginită. De la selecția materialelor de cea mai înaltă calitate până la execuția impecabilă, fiecare element este ales și realizat pentru a asigura un rezultat desăvârșit."
  },
  {
    title: "Parteneriat",
    description: "Colaborăm îndeaproape cu clienții noștri, înțelegându-le viziunea și nevoile, pentru a crea spații care reflectă personalitatea și stilul lor unic. Fiecare proiect este tratat cu discreție, profesionalism și dedicare."
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 luxury-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="elegant-text text-4xl md:text-5xl mb-16">Valorile Noastre</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {valuesData.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="elegant-text text-2xl mb-4">{value.title}</h3>
                <p className="modern-sans text-[#23272B]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}