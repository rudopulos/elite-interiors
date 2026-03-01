import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

const PoliticaDeConfidentialitate = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 bg-[#FAF9F7]">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="elegant-text text-4xl md:text-5xl mb-8 text-center">Politica de Confidențialitate</h1>
            <div className="modern-sans text-lg text-[#23272B]/80 space-y-6">
              <p>Ultima actualizare: 14 Septembrie 2025</p>
              
              <p>Vă mulțumim că ați ales serviciile noastre. Confidențialitatea datelor dumneavoastră este o prioritate pentru noi. Această politică explică ce date colectăm și cum le utilizăm.</p>

              <h2 className="text-2xl font-semibold elegant-text text-[#23272B] pt-6">1. Datele pe care le colectăm</h2>
              <p>Prin intermediul formularului nostru de contact, colectăm următoarele date cu caracter personal:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Nume:</strong> Pentru a ne putea adresa dumneavoastră personal.</li>
                <li><strong>Adresa de e-mail:</strong> Pentru a vă putea răspunde la solicitare.</li>
                <li><strong>Număr de telefon (opțional):</strong> Pentru a vă putea contacta telefonic, dacă este necesar sau dacă preferați această metodă de comunicare.</li>
                <li><strong>Mesaj:</strong> Conținutul solicitării sau întrebării dumneavoastră.</li>
              </ul>

              <h2 className="text-2xl font-semibold elegant-text text-[#23272B] pt-6">2. Scopul colectării datelor</h2>
              <p>Datele colectate sunt utilizate exclusiv în următoarele scopuri:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Pentru a răspunde întrebărilor și solicitărilor primite prin formularul de contact.</li>
                <li>Pentru a comunica eficient în legătură cu potențiale proiecte sau colaborări.</li>
                <li>Pentru a îmbunătăți serviciile noastre pe baza feedback-ului primit.</li>
              </ul>
              <p>Nu vom folosi datele dumneavoastră în scopuri de marketing fără consimțământul dumneavoastră explicit.</p>

              <h2 className="text-2xl font-semibold elegant-text text-[#23272B] pt-6">3. Baza legală a prelucrării</h2>
              <p>Prelucrarea datelor dumneavoastră se bazează pe consimțământul dumneavoastră, exprimat prin bifarea căsuței corespunzătoare din formularul de contact și prin trimiterea voluntară a datelor. Acesta constituie temeiul legal conform Regulamentului (UE) 2016/679 (GDPR).</p>

              <h2 className="text-2xl font-semibold elegant-text text-[#23272B] pt-6">4. Drepturile dumneavoastră</h2>
              <p>În conformitate cu GDPR, aveți următoarele drepturi cu privire la datele dumneavoastră cu caracter personal:</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Dreptul de acces:</strong> Puteți solicita o copie a datelor pe care le deținem despre dumneavoastră.</li>
                <li><strong>Dreptul la rectificare:</strong> Puteți solicita corectarea oricăror date inexacte sau incomplete.</li>
                <li><strong>Dreptul la ștergere ("dreptul de a fi uitat"):</strong> Puteți solicita ștergerea datelor dumneavoastră din evidențele noastre.</li>
              </ul>
              <p>Pentru a vă exercita aceste drepturi, vă rugăm să ne contactați la adresa de e-mail de pe site.</p>

              <h2 className="text-2xl font-semibold elegant-text text-[#23272B] pt-6">5. Securitatea datelor</h2>
              <p>Ne angajăm să protejăm datele dumneavoastră. Am implementat măsuri tehnice și organizatorice adecvate pentru a preveni accesul neautorizat, pierderea sau distrugerea datelor.</p>

              <h2 className="text-2xl font-semibold elegant-text text-[#23272B] pt-6">6. Modificări ale politicii</h2>
              <p>Ne rezervăm dreptul de a actualiza această politică de confidențialitate. Orice modificare va fi publicată pe această pagină. Vă încurajăm să revizuiți periodic această secțiune.</p>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
};

export default PoliticaDeConfidentialitate;