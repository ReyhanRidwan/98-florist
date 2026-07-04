import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, serverTimestamp, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { useNavigate } from 'react-router-dom';
import { Trash2, UploadCloud, LogOut, Plus } from 'lucide-react';
import { PROJECTS } from '../data/config'; // fallback
import imageCompression from 'browser-image-compression';

interface PortfolioItem {
  id: string | number;
  title: string;
  category: string;
  image: string;
}

export default function AdminDashboard() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/admin');
      } else {
        fetchItems();
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'portfolio'));
      const fetchedItems: PortfolioItem[] = [];
      querySnapshot.forEach((doc) => {
        fetchedItems.push({ id: doc.id, ...doc.data() } as PortfolioItem);
      });
      
      setItems([...(PROJECTS as any), ...fetchedItems]);
    } catch (error) {
      console.error("Error fetching items: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadStatus('Mengkompresi gambar...');
    try {
      // Compress image
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      };
      
      const compressedFile = await imageCompression(file, options);
      
      setUploadStatus('Mengupload ke server Cloudinary...');
      const formData = new FormData();
      formData.append('file', compressedFile);
      formData.append('upload_preset', 'di6ziqvtp'); // Unsigned upload preset
      formData.append('cloud_name', 'di6ziqvtp'); // Cloudinary cloud name

      const res = await fetch('https://api.cloudinary.com/v1_1/di6ziqvtp/image/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error?.message || "Gagal mengupload ke Cloudinary");
      }
      
      if (data.secure_url) {
        setUploadStatus('Menyimpan ke database...');
        // Add to firestore
        await addDoc(collection(db, 'portfolio'), {
          title: title || 'Untitled Project',
          category: category || 'Landscape',
          image: data.secure_url,
          createdAt: serverTimestamp()
        });
        setTitle('');
        setCategory('');
        fetchItems();
      }
    } catch (err: any) {
      console.error("Upload failed", err);
      alert("Gagal mengupload gambar: " + err.message);
    } finally {
      setUploading(false);
      setUploadStatus('');
      // Reset input file
      e.target.value = '';
    }
  };

  const handleDelete = async (id: string | number) => {
    if (typeof id === 'number') {
      alert("Ini adalah gambar bawaan (default) dan tidak dapat dihapus dari dashboard.");
      return;
    }
    
    if (window.confirm("Apakah Anda yakin ingin menghapus foto ini?")) {
      try {
        await deleteDoc(doc(db, 'portfolio', id));
        fetchItems();
      } catch (err) {
        console.error("Delete failed", err);
      }
    }
  };

  const handleLogout = () => {
    auth.signOut();
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard - 98 Florist</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-gray-600 hover:text-red-600">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </nav>

      <main className="max-w-6xl mx-auto py-8 px-4">
        <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Plus size={20} /> Tambah Foto Portofolio Baru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Judul Proyek (cth: Taman Rumah Minimalis)"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <select
              className="border border-gray-300 rounded-md p-2 w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Pilih Kategori</option>
              <option value="Landscape">Landscape</option>
              <option value="Kolam Ikan">Kolam Ikan</option>
              <option value="Vertical Garden">Vertical Garden</option>
              <option value="Taman Kering">Taman Kering</option>
              <option value="Perawatan">Perawatan</option>
            </select>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className={`flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-md p-2 w-full h-full text-center ${uploading ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              >
                <UploadCloud size={20} className="text-gray-500" />
                <span className="text-gray-600">
                  {uploading ? (uploadStatus || 'Mengupload...') : 'Pilih/Tarik Foto'}
                </span>
              </label>
            </div>
          </div>
          <p className="text-sm text-gray-500 italic">* Isi judul dan kategori terlebih dahulu, lalu pilih foto untuk langsung mengupload.</p>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Daftar Portofolio ({items.length})</h2>
        </div>
        {items.length === 0 ? (
           <p className="text-gray-500">Belum ada foto portofolio. Portofolio dari konfigurasi awal (default) masih digunakan di website. Tambahkan foto di sini untuk menggantikannya.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 group relative">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full mb-2 inline-block">
                    {item.category}
                  </span>
                  <h3 className="font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  title="Hapus"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
