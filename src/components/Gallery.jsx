import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Gallery = ({ images = [] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, index])

  const open = (i) => {
    setIndex(i)
    setIsOpen(true)

    // Most reliable cross-browser fix for scrollbar layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.paddingRight = `${scrollbarWidth}px`
    document.body.style.overflow = 'hidden'
  }

  const close = () => {
    setIsOpen(false)
    document.body.style.paddingRight = ''
    document.body.style.overflow = ''
  }

  const prev = (e) => {
    e.stopPropagation()
    setIndex((i) => (i - 1 + images.length) % images.length)
  }
  const next = (e) => {
    e.stopPropagation()
    setIndex((i) => (i + 1) % images.length)
  }

  return (
    <div className="w-full">
      {/* 2-Column Masonry */}
      <div className="columns-1 md:columns-2 gap-4 md:gap-6 w-full mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => open(i)}
            className="cursor-pointer overflow-hidden bg-white/5 relative group break-inside-avoid mb-4 md:mb-6 inline-block w-full"
          >
            <img
              src={src}
              alt={`Proiect imagine ${i + 1}`}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 block"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox / Fullscreen View */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAF9F7]/98 p-4 md:p-12"
            onClick={close}
          >
            {/* Close Button */}
            <button
              onClick={(e) => { e.stopPropagation(); close() }}
              className="absolute top-6 right-6 z-50 text-[#23272B] hover:text-[#23272B]/70 hover:scale-110 transition-all p-2"
              aria-label="Close gallery"
            >
              <X strokeWidth={1.5} className="w-8 h-8" />
            </button>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 text-[#23272B] hover:text-[#23272B]/70 hover:-translate-x-1 transition-all p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft strokeWidth={1} className="w-10 h-10 md:w-16 md:h-16" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 text-[#23272B] hover:text-[#23272B]/70 hover:translate-x-1 transition-all p-2"
                  aria-label="Next image"
                >
                  <ChevronRight strokeWidth={1} className="w-10 h-10 md:w-16 md:h-16" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="relative w-full h-full flex flex-col items-center justify-center max-w-[90vw] max-h-[90vh]">
              <motion.img
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                src={images[index]}
                alt={`Imagine mărită ${index + 1}`}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="absolute bottom-[-2rem] text-[#23272B]/60 modern-sans text-sm tracking-widest">
                {index + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
