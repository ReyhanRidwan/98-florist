import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

import { PHONE_NUMBER, WA_LINK } from '@/src/data/config';

export default function CTA() {
  return (
    <section id="kontak" className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] overflow-hidden relative shadow-2xl">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10 p-12 md:p-20 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Wujudkan Taman Impian <br className="hidden md:block" /> Anda Sekarang
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Konsultasikan kebutuhan landscape Anda dengan tim ahli kami. Survey lokasi gratis untuk wilayah Jabodetabek.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-accent/90 transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone size={24} />
              Chat WhatsApp Sekarang
            </a>
          </motion.div>
          
          <p className="text-white/60 text-sm">
            Tersedia Senin - Minggu | 08:00 - 21:00 WIB
          </p>
        </div>
      </div>
    </section>
  );
}
