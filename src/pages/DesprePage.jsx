import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Facebook, Instagram } from "lucide-react";
const fadeIn = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.8,
    ease: "easeInOut"
  }
};
const instagramPosts = [{
  link: "https://www.instagram.com/p/DJMWik5o0dp/?hl=en&img_index=1",
  imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/17b03086-244e-4175-8abf-ec84dfd4b2a1/f396a233215dcfbe3bc89ce606bda0b3.jpg",
  alt: "Instagram post 1"
}, {
  link: "https://www.instagram.com/p/DJMWik5o0dp/?hl=en&img_index=2",
  imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/17b03086-244e-4175-8abf-ec84dfd4b2a1/8e6044e6d1e877022659b0c5abaad5e0.jpg",
  alt: "Instagram post 2"
}, {
  link: "https://www.instagram.com/p/DJMWik5o0dp/?hl=en&img_index=3",
  imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/17b03086-244e-4175-8abf-ec84dfd4b2a1/d4f90381dafb56bd462ea0b57b75eff1.jpg",
  alt: "Instagram post 3"
}, {
  link: "https://www.instagram.com/p/DJlnXmho0U3/?hl=en",
  imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/17b03086-244e-4175-8abf-ec84dfd4b2a1/4e68490da6b1028f5e6660533b2a9da0.jpg",
  alt: "Instagram post 4"
}];
export default function DesprePage() {
  return <div className="min-h-screen bg-[#FAF9F7] text-[#23272B]">
    <Navbar />

    <motion.section className="relative h-[70vh] min-h-[400px] flex items-center justify-center text-center bg-[#FAF9F7]" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }}>
      <motion.div className="relative z-10 p-4" variants={fadeIn} initial="initial" animate="animate">
        <h1 className="elegant-text text-5xl md:text-7xl font-bold uppercase mb-4 text-[#23272B]">DESPRE NOI</h1>
        <p className="modern-sans text-lg md:text-xl max-w-2xl mx-auto text-[#23272B]/80">Noi creăm interioare durabile și plăcute estetic. Alegem materiale de înaltă calitate și tehnici inovatoare, pentru a crea spații ce rămân relevante și apreciate indiferent de trecerea timpului.</p>
      </motion.div>
    </motion.section>

    <motion.section className="py-16 md:py-24 bg-[#FAF9F7]" variants={fadeIn} initial="initial" whileInView="animate" viewport={{
      once: true
    }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <h2 className="elegant-text text-3xl md:text-4xl mb-6">Cu ce te ajut?</h2>
            <p className="modern-sans text-lg mb-4">
              Te ajut să transformi spațiul tău într-un interior funcțional, echilibrat și coerent, adaptat stilului tău de viață sau identității businessului tău. Îți ofer concept și direcție estetică clară, organizare eficientă a spațiului și un proiect tehnic complet, pregătit pentru implementare. Gândesc mobilier personalizat, optimizat și coordonez procesul astfel încât rezultatul final să fie exact așa cum a fost planificat. Creez spații care nu doar arată bine, ci funcționează corect și natural în fiecare zi.
            </p>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto md:min-h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <img alt="Elegant interior design detail" className="w-full h-full object-cover" src="https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Despre/Adina-15-2.jpg" />
          </div>
        </div>
      </div>
    </motion.section>

    <motion.section className="py-16 md:py-24 bg-[#FAF9F7]" variants={fadeIn} initial="initial" whileInView="animate" viewport={{
      once: true
    }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <div className="md:w-1/2">
            <h2 className="elegant-text text-3xl md:text-4xl mb-6">Viziunea Noastră</h2>
            <p className="modern-sans text-lg mb-4">
              Aspirăm să fim lideri în designul interior personalizat, recunoscuți pentru creativitatea noastră, atenția la detalii și angajamentul față de excelență. Viziunea noastră este de a modela spații care nu doar reflectă individualitatea clienților, ci și transcend tendințele efemere, oferind o valoare durabilă.
            </p>
            <p className="modern-sans text-lg">Ne imaginăm un viitor în care fiecare spațiu este o operă de artă funcțională, un sanctuar personalizat care aduce bucurie și inspirație zilnică. Prin inovație continuă și dedicare, ne propunem să ridicăm standardele designului interior. </p>
          </div>
          <div className="md:w-1/2 h-64 md:h-auto md:min-h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <img alt="Bright and modern office space" className="w-full h-full object-cover" src="https://jboovofuecyfrsbbahrs.supabase.co/storage/v1/object/public/Rezidential/2025.08.06%20AronCotrus-56.jpg" />
          </div>
        </div>
      </div>
    </motion.section>

    <motion.section className="py-16 md:py-24 bg-[#FAF9F7]" variants={fadeIn} initial="initial" whileInView="animate" viewport={{
      once: true
    }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="elegant-text text-3xl md:text-4xl mb-12">Urmărește-ne pe Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {instagramPosts.map((post, index) => <a key={index} href={post.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg group">
            <img src={post.imgSrc} alt={post.alt} className="w-full h-full object-cover aspect-square transition-transform duration-300 ease-in-out group-hover:scale-110" />
          </a>)}
        </div>
      </div>
    </motion.section>

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