import { motion } from 'motion/react';
import { Leaf, Palmtree, BrickWall, Sprout, Droplets, Home } from 'lucide-react';

const SERVICES = [
  {
    title: "Taman Minimalis",
    icon: <Leaf className="text-accent" size={32} />,
    description: "Desain taman modern yang simpel namun elegan untuk lahan terbatas.",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/658372854_1669863117531731_3178817597552396113_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=QnPadBH4fsMQ7kNvwFGklQf&_nc_oc=AdpsexyLgpye-M8H7Y3dLhLAvZ0Td_ma09ZyFDGGVk2B7En_eg2xr92JnUTizyq1-Y9OL_PDSp17VTSNvu3h2Ukp&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AHJqVj7fNrpj-Neq68ZhUfGZWd0nR0n8oSwJw7VEqyB0Q&oe=69F72CB0"
  },
  {
    title: "Taman Tropis",
    icon: <Palmtree className="text-accent" size={32} />,
    description: "Hadirkan nuansa hutan tropis yang rimbun dan menyegarkan di rumah Anda.",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/658917299_1254254786860905_4129162894248003456_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=K7J2P7Xd0TcQ7kNvwEmK3e3&_nc_oc=AdqizmnX7TZtC0wysxB92RVzme--Q81VphT0C5dw7LUREaGdzfJDX0XQj_aIRyw6g-OpIM8iE2UTIZ9nwq-u0UKe&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AFIJq2BOcWsY3XqVLDr1fdW1C5MTDabEFM4OVBhREN_FA&oe=69F75328"
  },
  {
    title: "Taman Kering",
    icon: <BrickWall className="text-accent" size={32} />,
    description: "Taman rendah perawatan dengan perpaduan batu alam dan tanaman sukulen.",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/661444452_823178730279611_7379588697716753328_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=IYxytN_cILoQ7kNvwFQ1kSC&_nc_oc=Adp0UMUqyX2-4zJldkvNyXdW5pytlW0QZy5Ioy5CozWzhL3BzThUlNwIjeBYHUfVBiof_5GNt41w076pwzRKVc3w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AEroGxtv1QMAH_mDychaCJ2YztBIwnkelbPC0KIcw0wBg&oe=69F73EE8"
  },
  {
    title: "Vertical Garden",
    icon: <Sprout className="text-accent" size={32} />,
    description: "Solusi cerdas menghijaukan dinding untuk area yang sangat terbatas.",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/661542538_2814491302258261_7081437908575069863_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=dOhvMHK4hU4Q7kNvwGWYoLu&_nc_oc=AdrfHAAPb1H_gbfUSxpzDx67EmUekwvcv-1DzbJZ2TfyqupLINdaop2q31E1IvsnnwGh_OFwA7Ju4VCY-8IV8Ja0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AE9JjZlZ97gz4kjze1xQJ5DZeuqubMl9jCR4lJqD9fMYA&oe=69F72DA9"
  },
  {
    title: "Kolam Hias / Air Mancur",
    icon: <Droplets className="text-accent" size={32} />,
    description: "Pembuatan kolam koi, kolam minimalis, dan fitur air yang menenangkan.",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/658327752_957342713534054_186065741987715165_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=y1PppfLH7zwQ7kNvwEu04nx&_nc_oc=AdqfarvT4MlFzROGfFzC2LcbmWkBxbC7rjoKxiZrBiqVrnpcHOUsjlqvAVQ7HQe0I9GkVgcVdY8KpVafKN9zEhhB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AE71vZv7x2HW-16ws4GbC-Hj_eK2p8pP5GNTpAGMJZpmQ&oe=69F73AB7"
  },
  {
    title: "Gazebo & Hardscape",
    icon: <Home className="text-accent" size={32} />,
    description: "Pembangunan gazebo kayu, jalan setapak, dan elemen dekoratif taman lainnya.",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/664731380_1857324728309573_836257247417149924_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=EC50d4os7eYQ7kNvwGGxkBv&_nc_oc=Adqz2lZI60sgg0OkkO8t9YsuA9NYJfgFywTNcbCWAdvwKyJbqeR8RF7GyhR2ytkpTNs8262oo-ct87D-m6k0dl-m&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AHQPb9k9trKg5ahicICWFjgEyjYpOwhvFVSVftFzlkpNA&oe=69F747BF"
  }
];

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
          {SERVICES.map((service, idx) => (
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
                  {service.icon}
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
