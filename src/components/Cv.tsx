import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Cv: React.FC = () => {
  return (
    <section
      id="cv"
      className="relative w-full flex flex-col items-center py-6 px-6 overflow-hidden"
    >
      {/* Background blur pakai gambar */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/cv-background.png')" }}
      ></div>

      {/* Overlay gelap pakai rgba (bukan class tailwind) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      ></div>

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Curriculum Vitae
        </h2>

        <div className="w-full">
          <img
            src="/assets/cv-preview.jpg"
            alt="CV Preview"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <a
          href="/assets/CV-fahrin.pdf"
          download
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          Download CV (PDF)
        </a>
      </div>
    </section>
  );
};

export default Cv;
