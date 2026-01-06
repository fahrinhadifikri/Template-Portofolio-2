import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Environment } from '@react-three/drei'
import LanyardScene from './LanyardScene'

const LanyardSection: React.FC = () => {
  return (
    <section
      id="lanyard"
      className="relative w-full flex flex-col items-center py-6 px-6 overflow-hidden"
    >
      {/* Background blur pakai gambar */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/cv-background.png')" }}
      />

      {/* Overlay gelap */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      />

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Interactive Lanyard
        </h2>

        {/* Canvas container */}
        <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 35 }}
            onCreated={({ gl }) => gl.setClearColor('#000000')}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 6, 5]} intensity={1.2} />
            <directionalLight position={[-5, 2, 2]} intensity={0.8} />

            <Physics gravity={[0, -40, 0]}>
              <LanyardScene />
            </Physics>

            <Environment preset="city" />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default LanyardSection
