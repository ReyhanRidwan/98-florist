import { motion } from 'motion/react';
import { MessageSquare, MapPin, FileText, Hammer, Sparkles } from 'lucide-react';

const STEPS = [
  {
    title: "Konsultasi",
    icon: <MessageSquare size={24} />,
    description: "Diskusi awal mengenai keinginan dan kebutuhan taman Anda via WhatsApp."
  },
  {
    title: "Survey Lokasi",
    icon: <MapPin size={24} />,
    description: "Tim kami akan datang ke lokasi untuk pengukuran dan pengecekan kondisi lahan."
  },
  {
    title: "Desain & Penawaran",
    icon: <FileText size={24} />,
    description: "Kami buatkan konsep desain dan rincian biaya yang transparan."
  },
  {
    title: "Pengerjaan",
    icon: <Hammer size={24} />,
    description: "Proses eksekusi pembuatan taman oleh tim profesional kami."
  },
  {
    title: "Finishing",
    icon: <Sparkles size={24} />,
    description: "Pengecekan akhir dan serah terima taman impian Anda."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Cara Kerja</span>
          <h2 className="text-4xl md:text-5xl font-bold">Proses Pengerjaan Kami</h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  {step.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-primary">{idx + 1}. {step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
