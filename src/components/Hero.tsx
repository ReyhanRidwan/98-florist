import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    image: "https://dpa79oyyyfxcd.cloudfront.net/laravel/design/20b70250-67fa-43ee-a247-41a22a23dd0f.png",
    subtitle: "Desain Taman",
    title: "Wujudkan Taman Impian Anda",
    description: "Solusi landscape profesional untuk keindahan hunian Anda.",
  },
  {
    id: 2,
    image: "https://platinumadisentosa.com/wp-content/uploads/2025/02/Ternyata-Begini-Cara-Membuat-Kolam-Ikan-Ideal-dan-Nyaman-1536x864.jpg",
    subtitle: "Kolam Koi",
    title: "Kesejukan Air di Rumah",
    description: "Pembuatan kolam hias dan koi dengan sistem filtrasi modern.",
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${SLIDES[current].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content Container */}
          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            {/* Left Column (Empty as requested) */}
            <div className="hidden md:block md:w-1/2" />

            {/* Right Column (Text starts from 50%) */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-4"
              >
                <span className="inline-block text-accent font-medium tracking-widest uppercase text-xs md:text-sm">
                  {SLIDES[current].subtitle}
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight">
                  {SLIDES[current].title}
                </h1>
                <p className="text-gray-200 text-lg md:text-xl max-w-md">
                  {SLIDES[current].description}
                </p>
                <div className="pt-4">
                  <a
                    href="#layanan"
                    className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-white transition-all transform hover:scale-105"
                  >
                    Lihat Layanan
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === current ? "bg-accent w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
