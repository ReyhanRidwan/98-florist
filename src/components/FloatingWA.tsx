import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function FloatingWA() {
  return (
    <motion.a
      href="https://wa.me/082121323992"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <Phone size={28} className="fill-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
        Tanya Kami
      </span>
    </motion.a>
  );
}
