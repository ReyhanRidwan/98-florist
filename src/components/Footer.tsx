import { Instagram, Phone, MapPin, Mail, Flower2 } from 'lucide-react';
import { LOGO_URL, PHONE_NUMBER, WA_LINK } from '@/src/data/config';
import { useState } from 'react';

export default function Footer() {
  const [logoError, setLogoError] = useState(false);
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              {logoError ? (
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                  <Flower2 className="h-8 w-8 text-primary" />
                </div>
              ) : (
                <img 
                  src={LOGO_URL} 
                  alt="98_florist Logo" 
                  className="h-12 w-12 rounded-full object-cover border-2 border-primary"
                  onError={() => setLogoError(true)}
                />
              )}
              <span className="font-serif text-2xl font-bold text-primary tracking-tight">
                98_florist
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Solusi landscape profesional untuk keindahan dan kesejukan hunian Anda. Kami melayani desain, pembuatan, dan perawatan taman.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={WA_LINK} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Navigasi</h4>
            <ul className="space-y-4">
              {['Beranda', 'Tentang Kami', 'Layanan', 'Portofolio', 'Kontak'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-gray-500 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Layanan</h4>
            <ul className="space-y-4 text-gray-500">
              <li>Taman Minimalis</li>
              <li>Taman Tropis</li>
              <li>Vertical Garden</li>
              <li>Kolam Hias & Koi</li>
              <li>Gazebo & Hardscape</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-500">
                <MapPin className="text-accent shrink-0" size={20} />
                <span>Melayani Jabodetabek & Jawa Barat</span>
              </li>
              <li className="flex gap-3 text-gray-500">
                <Phone className="text-accent shrink-0" size={20} />
                <span>{PHONE_NUMBER}</span>
              </li>
              <li className="flex gap-3 text-gray-500">
                <Mail className="text-accent shrink-0" size={20} />
                <span>info@98florist.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} 98_florist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
