
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/src/assets/me1.jpg")' }}
    >
      {/* Overlay hitam blur di belakang */}
      <div
        className="absolute inset-0 backdrop-blur-md z-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} // Ubah 0.3 sesuai kebutuhan transparansi
      ></div>

      {/* Konten tetap di depan */}
      <div className="relative z-10 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Hi, I'm <span className="text-blue-500">Pahrin Hadi Fikri</span>
        </h2>
        <p className="text-lg mb-6 text-white">
          Fullstack Developer • Laravel & React • UI/UX & Graphic Designer • Editor
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Hubungi Saya
        </button>
      </div>
    </section>
  );
};

export default Home;
