import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const CATEGORIES = ["Semua", "Minimalis", "Tropis", "Vertical Garden", "Kolam Hias", "Hardscape"];

const PROJECTS = [
  {
    id: 1,
    category: "Minimalis",
    image: "https://instagram.fcgk33-1.fna.fbcdn.net/v/t1.15752-9/657762933_1420976045996876_5059208154390473513_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=O6tSPjPnyDoQ7kNvwH16T7I&_nc_oc=AdpGZutdkhBO1X8ULfDbeJqJHoMBkqUV3Q854IqfEIOOycw3co2f74W7zvGPPNtzh580WI95fvj1KTApetXfLzqh&_nc_zt=23&_nc_ht=instagram.fcgk33-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AGfORrlpbuslnilOZTEdSqMO_V0zw72eOlQTQJjXpK0pQ&oe=69FB3AEC",
    title: "Taman Depan Rumah Minimalis"
  },
  {
    id: 2,
    category: "Tropis",
    image: "https://instagram.fcgk33-1.fna.fbcdn.net/v/t1.15752-9/664112044_1107238804917949_4962049671179376389_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=109&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=q09EhcFDU0gQ7kNvwEkUf_M&_nc_oc=AdrD7Wz0RonDOUdzNLsssPcnRZt-d9h60EWfaOsQNocKPSqXCeObzPbG0eEONtQ2Y1Cn56cBwwESgHScNX1wgD9E&_nc_zt=23&_nc_ht=instagram.fcgk33-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AFYE84WEvD9ZMS6MIWAagPzd7NpkKB5UCJqsrozG2gWOw&oe=69FB1446",
    title: "Halaman Belakang Tropis"
  },
  {
    id: 3,
    category: "Hardscape",
    image: "https://instagram.fcgk33-1.fna.fbcdn.net/v/t1.15752-9/659650849_2908540809509293_3257047460079622925_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=TUfHFFOWgKEQ7kNvwF_7-WW&_nc_oc=AdrGSW-6JWg1tENjLe2a2oE8TNP5YPAZm0-s3RVndrjoLejKG4QE_M8gmFrOTXpXtv6p6Zj94OWlBWUoCvp6YoU2&_nc_zt=23&_nc_ht=instagram.fcgk33-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AFFRQqyENBEFTny3IDGz0LPoIHmJsUfewBtFgR7TZZKNA&oe=69FB2A88",
    title: "Area Santai Gazebo"
  },
  {
    id: 4,
    category: "Minimalis",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/658372854_1669863117531731_3178817597552396113_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=QnPadBH4fsMQ7kNvwFGklQf&_nc_oc=AdpsexyLgpye-M8H7Y3dLhLAvZ0Td_ma09ZyFDGGVk2B7En_eg2xr92JnUTizyq1-Y9OL_PDSp17VTSNvu3h2Ukp&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AHJqVj7fNrpj-Neq68ZhUfGZWd0nR0n8oSwJw7VEqyB0Q&oe=69F72CB0",
    title: "Taman Kering Minimalis"
  },
  {
    id: 5,
    category: "Hardscape",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/661444452_823178730279611_7379588697716753328_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=IYxytN_cILoQ7kNvwFQ1kSC&_nc_oc=Adp0UMUqyX2-4zJldkvNyXdW5pytlW0QZy5Ioy5CozWzhL3BzThUlNwIjeBYHUfVBiof_5GNt41w076pwzRKVc3w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AEroGxtv1QMAH_mDychaCJ2YztBIwnkelbPC0KIcw0wBg&oe=69F73EE8",
    title: "Paving & Batu Alam"
  },
  {
    id: 6,
    category: "Vertical Garden",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/661542538_2814491302258261_7081437908575069863_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=dOhvMHK4hU4Q7kNvwGWYoLu&_nc_oc=AdrfHAAPb1H_gbfUSxpzDx67EmUekwvcv-1DzbJZ2TfyqupLINdaop2q31E1IvsnnwGh_OFwA7Ju4VCY-8IV8Ja0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AE9JjZlZ97gz4kjze1xQJ5DZeuqubMl9jCR4lJqD9fMYA&oe=69F72DA9",
    title: "Dinding Hijau Vertikal"
  },
  {
    id: 7,
    category: "Kolam Hias",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/658327752_957342713534054_186065741987715165_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=y1PppfLH7zwQ7kNvwEu04nx&_nc_oc=AdqfarvT4MlFzROGfFzC2LcbmWkBxbC7rjoKxiZrBiqVrnpcHOUsjlqvAVQ7HQe0I9GkVgcVdY8KpVafKN9zEhhB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AE71vZv7x2HW-16ws4GbC-Hj_eK2p8pP5GNTpAGMJZpmQ&oe=69F73AB7",
    title: "Kolam Koi Modern"
  },
  {
    id: 8,
    category: "Hardscape",
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/664731380_1857324728309573_836257247417149924_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=EC50d4os7eYQ7kNvwGGxkBv&_nc_oc=Adqz2lZI60sgg0OkkO8t9YsuA9NYJfgFywTNcbCWAdvwKyJbqeR8RF7GyhR2ytkpTNs8262oo-ct87D-m6k0dl-m&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AHQPb9k9trKg5ahicICWFjgEyjYpOwhvFVSVftFzlkpNA&oe=69F747BF",
    title: "Jalan Setapak Taman"
  }
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Semua");

  const filteredProjects = activeTab === "Semua" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="portofolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Portofolio</span>
          <h2 className="text-4xl md:text-5xl font-bold">Hasil Karya Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi berbagai proyek taman yang telah kami selesaikan untuk klien kami di berbagai lokasi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === cat 
                  ? "bg-primary text-white shadow-md" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group aspect-[4/3] overflow-hidden rounded-2xl shadow-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
