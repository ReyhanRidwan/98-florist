import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Bapak Andi",
    location: "BSD City, Tangerang",
    text: "Sangat puas dengan hasil kerja 98_florist. Taman minimalis saya jadi sangat cantik dan rapi. Timnya sangat profesional dan komunikatif.",
    rating: 5
  },
  {
    name: "Ibu Maya",
    location: "Sentul City, Bogor",
    text: "Kolam koi yang dibuat sangat bagus, sistem filtrasinya berjalan lancar. Sekarang halaman belakang jadi tempat favorit keluarga.",
    rating: 5
  },
  {
    name: "Bapak Rizky",
    location: "Kemang, Jakarta Selatan",
    text: "Pengerjaan tepat waktu dan hasilnya sesuai dengan desain yang diajukan. Harga juga sangat kompetitif dibanding jasa lainnya.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Testimoni</span>
          <h2 className="text-4xl md:text-5xl font-bold">Apa Kata Klien Kami</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <Quote className="text-accent/20 absolute top-6 right-8" size={48} />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="font-bold text-primary">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
