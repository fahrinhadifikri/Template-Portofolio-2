import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Projects: React.FC = () => {
  const projectList = [
    { 
      title: "HRIS & Presensi Karyawan", 
      desc: "Sistem manajemen karyawan dengan presensi, cuti, autentikasi, dan export laporan.", 
      img: "/src/assets/project1.png",
      live: "https://depotkonsultantriyasa.vps-poliban.my.id/"
    },
    { 
      title: "Task & Project Management", 
      desc: "Aplikasi pengelolaan proyek dan tugas dengan role user, progress, dan upload berkas.", 
      img: "/src/assets/project2.png",
      live: "#"
    },
    { 
      title: "Point of Sale (POS)", 
      desc: "Aplikasi kasir web dengan fitur transaksi, invoice, stok produk, dan laporan penjualan.", 
      img: "/src/assets/project3.jpg",
      live: "#"
    },
    { 
      title: "RESTful API Service", 
      desc: "Backend API dengan autentikasi token/JWT, CRUD data, dan dokumentasi Postman.", 
      img: "/src/assets/project4.jpg",
      live: "#"
    },
    { 
      title: "Sistem Booking & Reservasi", 
      desc: "Aplikasi reservasi untuk hotel/klinik/lapangan dengan kalender, user, dan notifikasi.", 
      img: "/src/assets/project5.jpg",
      preview: "#",
      live: "#"
    },
    { 
      title: "E-Commerce Mini", 
      desc: "Toko online sederhana dengan fitur produk, keranjang, checkout, dan dashboard admin.", 
      img: "/src/assets/project6.jpg",
      preview: "#",
      live: "#"
    },
    { 
      title: "Inventory & Gudang", 
      desc: "Sistem manajemen stok barang, supplier, barang masuk/keluar, dan dashboard laporan.", 
      img: "/src/assets/project7.jpg",
      preview: "#",
      live: "#"
    },
    { 
      title: "CMS Company Profile", 
      desc: "Website dinamis dengan panel admin untuk mengelola konten, gambar, dan halaman publik.", 
      img: "/src/assets/project2.jpg",
      live: "https://depotkonsultantriyasa.vps-poliban.my.id/"
    },
  ];

  return (
    <section id="projects" className="min-h-screen pt-6 py-12 flex justify-center bg-gray-900">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-500">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-40 group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gelap + tombol */}
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
                <a
                  href={project.preview}
                  className="px-3 py-2 bg-white text-gray-800 text-sm font-semibold rounded shadow hover:bg-gray-200"
                >
                  Preview
                </a>
                <a
                  href={project.live}
                  className="px-3 py-2 bg-blue-500 text-white text-sm font-semibold rounded shadow hover:bg-blue-600"
                >
                  Live Demo
                </a>
              </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
