import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Vă rugăm completați toate câmpurile obligatorii.' });
      return;
    }
    if (!termsAccepted) {
      setFormStatus({ type: 'error', message: 'Vă rugăm să acceptați politica de confidențialitate și termenii.' });
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzdjdkvd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Mesajul a fost trimis cu succes! Vă vom contacta în curând.' });
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTermsAccepted(false);
      } else {
        const errorData = await response.json();
        if (Object.hasOwn(errorData, 'errors')) {
          setFormStatus({ type: 'error', message: errorData.errors.map(err => err.message).join(", ") });
        } else {
          setFormStatus({ type: 'error', message: 'A apărut o eroare la trimiterea mesajului. Vă rugăm încercați din nou.' });
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({ type: 'error', message: 'A apărut o eroare la trimiterea mesajului. Vă rugăm încercați din nou.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div className="space-y-2">
        <Label htmlFor="name" className="text-lg modern-sans">Nume</Label>
        <Input
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleInputChange}
          className="bg-white"
          aria-label="Nume"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-lg modern-sans">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className="bg-white"
          aria-label="Email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-lg modern-sans">Telefon (opțional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleInputChange}
          className="bg-white"
          aria-label="Telefon"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-lg modern-sans">Mesaj</Label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleInputChange}
          className="bg-white"
          aria-label="Mesaj"
        />
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          id="terms"
          checked={termsAccepted}
          onCheckedChange={setTermsAccepted}
          aria-label="Sunt de acord cu Politica de Confidențialitate și cu Termenii și Condițiile"
          className="mt-1"
        />
        <Label htmlFor="terms" className="text-sm modern-sans leading-relaxed">
          Sunt de acord cu <Link to="/politica-de-confidentialitate" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Politica de Confidențialitate</Link> și cu <Link to="/termeni-si-conditii" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Termenii și Condițiile</Link>
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#23272B] text-[#FAF9F7] hover:bg-[#23272B]/90 text-lg py-6"
      >
        {isSubmitting ? "Se trimite..." : "Trimite Mesajul"}
      </Button>

      {formStatus && (
        <div className={`mt-4 p-4 rounded-md text-center ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {formStatus.message}
        </div>
      )}
    </motion.form>
  );
}