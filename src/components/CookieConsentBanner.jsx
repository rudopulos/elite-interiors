import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
const COOKIE_CONSENT_KEY = 'cookie_consent_given';
export default function CookieConsentBanner({
  onConsent
}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consentGiven === 'true') {
      onConsent();
    } else if (!consentGiven) {
      setIsVisible(true);
    }
  }, [onConsent]);
  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
    onConsent();
  };
  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'false');
    setIsVisible(false);
  };
  return <AnimatePresence>
      {isVisible && <motion.div initial={{
      y: "100%"
    }} animate={{
      y: 0
    }} exit={{
      y: "100%"
    }} transition={{
      type: "spring",
      stiffness: 300,
      damping: 30
    }} className="fixed bottom-0 left-0 right-0 bg-[#23272B] text-[#FAF9F7] p-6 shadow-lg z-50 flex flex-col sm:flex-row items-center justify-between">
          <p className="modern-sans text-sm mb-4 sm:mb-0 sm:mr-4">
            We use cookies to enhance your experience. By clicking "Accept", you agree to our use of cookies.
          </p>
          <div className="flex space-x-4">
            <Button onClick={handleAccept} className="bg-[#FAF9F7] text-[#23272B] hover:bg-[#FAF9F7]/90 px-6 py-2">Accept</Button>
            <Button onClick={handleDecline} variant="outline" className="border-[#FAF9F7] text-[#FAF9F7] bg-transparent hover:bg-[#FAF9F7]/20 focus-visible:ring-[#FAF9F7] focus-visible:ring-offset-1 focus-visible:ring-offset-[#23272B] px-6 py-2">
              Decline
            </Button>
          </div>
        </motion.div>}
    </AnimatePresence>;
}