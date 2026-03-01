import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; // Assuming you want the navbar on this page too

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F7] text-[#23272B]">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-28" // Added py-28 for top padding below fixed navbar
      >
        <h1 className="elegant-text text-4xl md:text-5xl mb-12 text-center">Termeni și Condiții</h1>
        <div className="modern-sans space-y-6 max-w-3xl mx-auto text-lg">
          <p>Accesarea și utilizarea acestui site implică acceptarea următorilor termeni și condiții:</p>
          
          <ol className="list-decimal list-inside space-y-3">
            <li>Informațiile prezentate pe acest site au caracter informativ și pot fi modificate fără o notificare prealabilă.</li>
            <li>Toate materialele (texte, imagini, grafice, logo etc.) sunt protejate prin drepturi de autor și nu pot fi copiate sau utilizate fără acordul prealabil scris al proprietarului site-ului.</li>
            <li>Datele cu caracter personal completate în formularul de contact sunt tratate confidențial și nu vor fi transmise către terți fără consimțământul explicit al utilizatorului.</li>
            <li>Ne rezervăm dreptul de a refuza colaborarea cu utilizatori care folosesc limbaj sau comportament inadecvat în corespondență.</li>
            <li>Prin completarea și trimiterea formularului de contact, sunteți de acord cu acești termeni și condiții.</li>
          </ol>

          <p>Pentru întrebări sau clarificări suplimentare, ne puteți contacta direct.</p>
        </div>
      </motion.div>
    </div>
  );
}