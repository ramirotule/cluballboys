import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const FUNDACION = new Date(1923, 3, 23) // 23 de abril de 1923
const añosDeHistoria = new Date().getFullYear() - FUNDACION.getFullYear()

const heartbeat = {
  scale: [1, 1.13, 1, 1.08, 1],
  transition: {
    duration: 0.7,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 1.4,
  },
}

const glowPulse = {
  opacity: [0.3, 0.6, 0.3, 0.55, 0.3],
  scale: [1.1, 1.22, 1.1, 1.18, 1.1],
  transition: {
    duration: 0.7,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 1.4,
  },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex-grow flex items-start justify-center overflow-hidden min-h-screen pt-12 sm:pt-24"
    >
      {/* Fondo con gradiente de colores del club */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e6e] via-[#2d2d9e] to-[#1a1a5e]" />

      {/* Patrón de rayas verticales (como el escudo) */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-8 bg-[#F9EA1B]"
            style={{ left: `${i * 5.5}%` }}
          />
        ))}
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#F9EA1B]/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#F9EA1B]/8 blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-20">
        {/* Escudo con latido */}
        <div className="flex justify-center mb-8">
          <div className="relative flex items-center justify-center">
            {/* Glow que late sincronizado */}
            <motion.div
              className="absolute rounded-full bg-[#F9EA1B] blur-2xl"
              style={{ width: '176px', height: '176px' }}
              animate={glowPulse}
            />
            <motion.img
              src="/logo.png"
              alt="Escudo Club All Boys"
              className="relative w-44 h-44 object-contain drop-shadow-2xl"
              animate={heartbeat}
            />
          </div>
        </div>

        <h1 className="text-white font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-4 font-display">
          Club <span className="text-[#F9EA1B]">All Boys</span>
        </h1>

        <p className="text-white/70 text-lg sm:text-xl font-medium tracking-widest uppercase mb-2">
          Santa Rosa · La Pampa
        </p>

        <div className="flex justify-center my-6">
          <div className="w-24 h-1 bg-[#F9EA1B] rounded-full" />
        </div>

        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Más de {añosDeHistoria} años de historia, deporte y comunidad en el corazón de La
          Pampa. Orgullo azul y amarillo.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/noticias"
            className="btn-primary px-8 py-3 text-base"
          >
            Ver Noticias
          </Link>
          <Link
            to="/contacto"
            className="btn-outline px-8 py-3 text-base"
          >
            Asociarse
          </Link>
        </div>
      </div>
    </section>
  )
}
