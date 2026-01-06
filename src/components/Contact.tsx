import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="min-h-[70vh] flex justify-center items-start px-6 py-16 bg-gray-50"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-12">

        {/* LEFT SIDE - FORM */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4 text-left">Kirim Pesan</h3>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows={5}
              placeholder="Tulis pesan di sini..."
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              Kirim
            </button>
          </form>
        </div>

        {/* RIGHT SIDE - PROFILE & SOCIAL */}
        <div className="flex-1 flex flex-col justify-start text-left">
          <h2 className="text-3xl font-bold mb-4 text-blue-500">Pahrin Hadi Fikri</h2>

          <p className="text-gray-600 italic mb-6">
            "Kalau kisahnya terasa cepat, maka itu kisah mereka, bukan kisahmu."
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Saya berasal dari <span className="font-semibold">Indonesia</span> dan
            saat ini berdomisili di{" "}
            <span className="font-semibold">Banjarmasin</span>.  
            Jika ingin berdiskusi, bekerja sama, atau hanya menyapa saya, saya sangat terbuka 😊
          </p>

          {/* VERTICAL ICONS */}
          <div className="flex flex-col gap-4 mt-4">
            <a
              href="mailto:phfikri001@gmail.com"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition"
            >
              <MdEmail size={24} />
              <span>phfikri001@gmail.com</span>
            </a>

            <a
              href="https://wa.me/6282211026943"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-green-500 transition"
            >
              <FaWhatsapp size={24} />
              <span>+6282211026943</span>
            </a>

            <a
              href="https://linkedin.com/in/pahrinhadifikri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <FaLinkedin size={24} />
              <span>Pahrin Hadi Fikri</span>
            </a>

            <a
              href="https://instagram.com/frinciple"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition"
            >
              <FaInstagram size={24} />
              <span>@frinciple</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
