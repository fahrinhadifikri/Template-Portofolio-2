import { useEffect, useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const About: React.FC = () => {
  const images = [
    "/assets/me-landscape.jpg",
    "/assets/me-landscape2.jpg",
    "/assets/me-landscape3.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex justify-center items-start px-6 pt-20 py-20"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start gap-12">

        {/* Kiri: Logo + Deskripsi */}
        <div className="flex-1 text-left">
          <div className="flex flex-wrap justify-start items-center gap-6 mb-8">
            <img src="/assets/laravel.png" alt="Laravel" className="w-12 h-12 object-contain" />
            <img src="/assets/react.png" alt="React" className="w-12 h-12 object-contain" />
            <img src="/assets/figma.png" alt="Figma" className="w-12 h-12 object-contain" />
            <img src="/assets/canva.png" alt="Canva" className="w-12 h-12 object-contain" />
            <img src="/assets/photoshop.png" alt="Photoshop" className="w-12 h-12 object-contain" />
            <img src="/assets/illustrator.png" alt="Illustrator" className="w-12 h-12 object-contain" />
            <img src="/assets/premiere.png" alt="Premiere Pro" className="w-12 h-12 object-contain" />
            <img src="/assets/aftereffects.png" alt="After Effects" className="w-12 h-12 object-contain" />
          </div>

          <h2 className="text-3xl font-bold mb-4">Tentang Saya</h2>
          <p className="text-gray-600 leading-relaxed">
            Saya adalah seorang <strong className="text-blue-500">Fullstack Developer</strong> dan 
            <strong className="text-blue-500"> Creative Designer</strong> yang terbiasa membangun aplikasi berbasis 
            <strong className="text-blue-500"> arsitektur terstruktur</strong> menggunakan 
            <strong className="text-blue-500"> Laravel</strong>, <strong className="text-blue-500">React</strong>, dan integrasi 
            <strong className="text-blue-500"> database</strong> yang kompleks. Saya memahami alur aplikasi dari 
            <strong className="text-blue-500"> frontend hingga backend</strong>, termasuk 
            <strong className="text-blue-500"> pengelolaan data</strong>, <strong className="text-blue-500">autentikasi</strong>, 
            <strong className="text-blue-500"> relasi antar tabel</strong>, <strong className="text-blue-500">RESTful API</strong>, dan pengembangan fitur seperti 
            <strong className="text-blue-500"> presensi</strong>, <strong className="text-blue-500">manajemen proyek</strong>, 
            <strong className="text-blue-500"> ekspor-impor data</strong>, serta 
            <strong className="text-blue-500"> manajemen pengguna</strong>.
            <br /><br />
            Selain di bidang pemrograman, saya juga memiliki keahlian dalam 
            <strong className="text-blue-500"> UI/UX</strong>, 
            <strong className="text-blue-500"> desain grafis</strong>, dan 
            <strong className="text-blue-500"> multimedia</strong> menggunakan 
            <strong className="text-blue-500"> Figma</strong>, <strong className="text-blue-500">Photoshop</strong>, 
            <strong className="text-blue-500">Illustrator</strong>, <strong className="text-blue-500">Canva</strong>, 
            <strong className="text-blue-500">Premiere Pro</strong>, <strong className="text-blue-500">After Effects</strong>, dan 
            <strong className="text-blue-500">CapCut</strong>. Saya juga sering mengembangkan 
            <strong className="text-blue-500"> desain produk</strong> seperti pakaian, cover, topi, serta 
            <strong className="text-blue-500"> branding digital</strong> untuk 
            <strong className="text-blue-500"> media sosial</strong> dan 
            <strong className="text-blue-500"> kebutuhan promosi</strong>.
          </p>
        </div>

        {/* Kanan: Foto Landscape (auto ganti) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={images[index]}
            alt="Foto Saya"
            className={`w-full max-w-md rounded-lg shadow-lg object-cover h-[470px] transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
