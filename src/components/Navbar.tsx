import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const LOGO_URL = "https://scontent.xx.fbcdn.net/v/t1.15752-9/666637501_902738225919407_1453720350393172042_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=V2HmJpghRcUQ7kNvwFHNxEJ&_nc_oc=Adr8Gj79HyD7Fk7Ds0T5O7sMbqxefbwrn4xfTeMKWFK6hp0l2BcNknPe0sPOx4Y-_39xKD8izrr5PpeBYSuWp7OW&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AF25lpgCkctKosfAoCB4ybv-MJ1UQxRYqoeWMuLjtqyZg&oe=6A019323";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="98_florist Logo" 
            className="h-10 w-10 rounded-full object-cover border-2 border-primary"
            referrerPolicy="no-referrer"
          />
          <span className={cn(
            "font-serif text-xl font-bold tracking-tight",
            isScrolled ? "text-primary" : "text-white"
          )}>
            98_florist
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                isScrolled ? "text-primary" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/082121323992"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-primary/90 transition-all"
          >
            <Phone size={16} />
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-md",
            isScrolled ? "text-primary" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-primary text-lg font-medium border-b border-gray-100 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/082121323992"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-full text-center font-medium flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              WhatsApp Kami
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
