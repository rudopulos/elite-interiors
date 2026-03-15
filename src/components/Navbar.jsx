import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const LOGO_URL = "https://storage.googleapis.com/hostinger-horizons-assets-prod/17b03086-244e-4175-8abf-ec84dfd4b2a1/64757815a636161cdcbcdbbae9edfe50.png";

const Navbar = ({ onContactClick }) => {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactNavigation = () => {
    if (location.pathname === '/' && onContactClick) {
      onContactClick();
    } else {
      navigate('/#contact');
    }
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (action, path) => {
    if (path) {
      if (location.pathname === path && path === "/" && !action) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(path);
      }
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    } else if (action) {
       if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => action(), 100); 
      } else {
        action();
      }
      if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    }
  };
  
  const navItems = [
    { label: "DESPRE", path: "/despre" }, 
    { label: "Servicii", path: "/servicii" },
    { 
      type: "logo", 
      src: LOGO_URL, 
      alt: "Elite Interiors Logo", 
      path: "/"
    },
    { label: "PORTOFOLIU", path: "/portofoliu" },
    { label: "CONTACT", isContact: true },
  ];

  const NavItem = ({ item, isMobile }) => {
    if (item.type === 'logo') {
      return (
        <button onClick={() => handleLinkClick(item.action, item.path)} className={`flex items-center justify-center ${isMobile ? 'my-4 py-2' : 'py-2'}`}>
          <img src={item.src} alt={item.alt} className="h-[114px] object-contain" />
        </button>
      );
    }

    const clickHandler = item.isContact ? handleContactNavigation : () => handleLinkClick(item.action, item.path);

    return (
      <button
        onClick={clickHandler}
        className={`modern-sans uppercase tracking-wider text-sm px-3 py-2 transition-colors duration-300
                    ${isScrolled || isMobileMenuOpen ? 'text-[#23272B]' : 'text-[#23272B]'} 
                    hover:text-[#A0A0A0] focus:text-[#A0A0A0] focus:outline-none
                    ${isMobile ? 'block w-full text-left py-3' : ''}`}
      >
        {item.label}
      </button>
    );
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 
                  ${isScrolled || isMobileMenuOpen ? 'bg-[#FAF9F7] shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="hidden md:flex items-center justify-between h-20">
          {navItems.slice(0, 2).map((item, index) => <NavItem key={`desktop-${index}`} item={item} />)}
          <NavItem item={navItems[2]} />
          {navItems.slice(3).map((item, index) => <NavItem key={`desktop-${index + 3}`} item={item} />)}
        </div>
        
        <div className="md:hidden flex items-center justify-center h-[104px] relative">
          <button onClick={() => handleLinkClick(navItems[2].action, navItems[2].path)} className="h-[104px] py-2 flex items-center">
              <img src={navItems[2].src} alt={navItems[2].alt} className="h-full object-contain" />
          </button>

          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 
                          ${isScrolled || isMobileMenuOpen ? 'text-[#23272B]' : 'text-[#23272B]'} 
                          hover:text-[#A0A0A0] focus:text-[#A0A0A0] focus:outline-none`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[#FAF9F7] shadow-lg pb-4 absolute w-full"
          >
            {navItems.filter(item => item.type !== 'logo').map((item, index) => (
              <NavItem key={`mobile-${index}`} item={item} isMobile />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;