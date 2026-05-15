import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Clock, Wallet } from 'lucide-react';
import { USP_IMAGE } from '@/src/data/config';

const USPs = [
  {
    title: "Konsultasi & Survey Gratis",
    icon: <CheckCircle2 className="text-accent" size={24} />,
    description: "Kami berikan layanan survey lokasi dan konsultasi desain tanpa biaya."
  },
  {
    title: "Desain Sesuai Budget",
    icon: <Wallet className="text-accent" size={24} />,
    description: "Taman indah tidak harus mahal. Kami sesuaikan desain dengan anggaran Anda."
  },
  {
    title: "Tim Profesional",
    icon: <ShieldCheck className="text-accent" size={24} />,
    description: "Dikerjakan oleh tenaga ahli berpengalaman di bidang landscape."
  },
  {
    title: "Pengerjaan Tepat Waktu",
    icon: <Clock className="text-accent" size={24} />,
    description: "Komitmen kami adalah menyelesaikan proyek sesuai jadwal yang disepakati."
  }
];

export default function USP() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">Keunggulan Kami</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Mengapa Memilih 98_florist?
              </h2>
              <p className="text-gray-300 text-lg">
                Kami berkomitmen memberikan hasil terbaik untuk setiap proyek taman, mulai dari skala rumah tinggal hingga area komersial.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {USPs.map((usp, idx) => (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-3">
                    {usp.icon}
                    <h3 className="font-bold text-xl">{usp.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {usp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-full border-2 border-accent/30 p-8">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={USP_IMAGE}
                  alt="Landscape Excellence"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-center p-2 text-xs">
              Terpercaya Sejak 2014
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
