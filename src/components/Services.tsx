import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Palmtree, BrickWall, Sprout, Droplets, Home } from 'lucide-react';
import { SERVICES_DATA } from '@/src/data/config';

const ICON_MAP: Record<string, React.ReactNode> = {
  "Taman Minimalis": <Leaf className="text-accent" size={32} />,
  "Taman Tropis": <Palmtree className="text-accent" size={32} />,
  "Taman Kering": <BrickWall className="text-accent" size={32} />,
  "Vertical Garden": <Sprout className="text-accent" size={32} />,
  "Kolam Hias / Air Mancur": <Droplets className="text-accent" size={32} />,
  "Gazebo & Hardscape": <Home className="text-accent" size={32} />,
};

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Layanan Kami</span>
          <h2 className="text-4xl md:text-5xl font-bold">Solusi Lengkap Untuk Taman Anda</h2>
          <p className="text-gray-600">
            Kami menawarkan berbagai layanan landscape profesional yang dapat disesuaikan dengan keinginan dan kebutuhan Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-4">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                  {ICON_MAP[service.title] || <Leaf className="text-accent" size={32} />}
                </div>
                <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
