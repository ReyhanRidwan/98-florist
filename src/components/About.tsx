import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const STATS = [
  { label: "Proyek Selesai", value: 150, suffix: "+" },
  { label: "Klien Puas", value: 120, suffix: "+" },
  { label: "Tahun Pengalaman", value: 10, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://instagram.fcgk33-1.fna.fbcdn.net/v/t1.15752-9/657762933_1420976045996876_5059208154390473513_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=O6tSPjPnyDoQ7kNvwH16T7I&_nc_oc=AdpGZutdkhBO1X8ULfDbeJqJHoMBkqUV3Q854IqfEIOOycw3co2f74W7zvGPPNtzh580WI95fvj1KTApetXfLzqh&_nc_zt=23&_nc_ht=instagram.fcgk33-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AGfORrlpbuslnilOZTEdSqMO_V0zw72eOlQTQJjXpK0pQ&oe=69FB3AEC"
                alt="Tentang 98_florist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl hidden md:block shadow-lg">
              <p className="text-white font-serif italic text-xl">
                "Kualitas adalah prioritas kami."
              </p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Tentang Kami</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ahli Landscape & Taman Profesional
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                98_florist adalah penyedia jasa landscape yang berdedikasi untuk menciptakan ruang terbuka hijau yang indah dan fungsional. Kami melayani jasa desain taman, pembuatan taman, hingga perawatan rutin.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dengan pengalaman bertahun-tahun, tim profesional kami menjamin pengerjaan yang rapi, tepat waktu, dan dapat disesuaikan dengan kebutuhan serta budget Anda.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-gray-500 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
