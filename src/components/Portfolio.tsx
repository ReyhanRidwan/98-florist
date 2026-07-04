import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { CATEGORIES, PROJECTS as DEFAULT_PROJECTS } from '@/src/data/config';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/src/lib/firebase';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect?: string;
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        const fetchedProjects: Project[] = [];
        querySnapshot.forEach((doc) => {
          fetchedProjects.push({ id: doc.id, ...doc.data() } as Project);
        });
        setProjects([...(DEFAULT_PROJECTS as Project[]), ...fetchedProjects]);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = activeTab === "Semua" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  // Dynamic categories based on fetched projects, or fallback to default
  const categories = ["Semua", ...Array.from(new Set(projects.map(p => p.category)))];

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
          {categories.map((cat) => (
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

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: any) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-2xl shadow-sm break-inside-avoid mb-6"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
                    project.aspect === "vertical" ? "aspect-[3/4.5]" : project.aspect === "horizontal" ? "aspect-[16/10]" : "aspect-[4/3]"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
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
