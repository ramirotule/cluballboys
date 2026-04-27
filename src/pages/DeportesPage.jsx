import { Link } from 'react-router-dom'
import { Trophy, ArrowRight } from 'lucide-react'

const deportes = [
  {
    emoji: '⚽',
    nombre: 'Fútbol',
    descripcion: 'La disciplina emblema del club. Participamos en torneos regionales y el campeonato pampeano con equipos en todas las categorías, desde inferiores hasta primera división.',
    categorias: ['Primera División', 'Reserva', 'Inferiores', 'Femenino'],
    logro: '12 campeonatos provinciales',
  },
  {
    emoji: '🏀',
    nombre: 'Básquet',
    descripcion: 'Una de las disciplinas con más trayectoria del club. El equipo masculino y femenino compiten a nivel provincial con destacado rendimiento y una sólida cantera.',
    categorias: ['Primera Masculino', 'Primera Femenino', 'U19', 'U15'],
    logro: '5 títulos regionales',
  },
  {
    emoji: '🤸',
    nombre: 'Gimnasia Artística',
    descripcion: 'Actividad de alta exigencia técnica con un espacio propio dentro del complejo deportivo. Formamos gimnastas desde edades tempranas con entrenadores especializados.',
    categorias: ['Infantil', 'Juvenil', 'Adultos'],
    logro: 'Representantes en torneos nacionales',
  },
  {
    emoji: '🥎',
    nombre: 'Softbol',
    descripcion: 'Deporte colectivo en crecimiento dentro del club, con participación en ligas provinciales y un fuerte trabajo de formación en categorías juveniles.',
    categorias: ['Primera Mixto', 'Juveniles'],
    logro: 'Participación en liga pampeana',
  },
  {
    emoji: null,
    svgIcon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        {/* Cabeza de la paleta — forma ovalada */}
        <ellipse cx="26" cy="22" rx="18" ry="20" fill="#F9EA1B" stroke="#1e1e6e" strokeWidth="3" />
        {/* Cuerdas horizontales */}
        <line x1="10" y1="16" x2="42" y2="16" stroke="#1e1e6e" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8"  y1="22" x2="44" y2="22" stroke="#1e1e6e" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="28" x2="42" y2="28" stroke="#1e1e6e" strokeWidth="1.5" strokeLinecap="round" />
        {/* Cuerdas verticales */}
        <line x1="18" y1="3"  x2="18" y2="41" stroke="#1e1e6e" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="2"  x2="26" y2="42" stroke="#1e1e6e" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="34" y1="3"  x2="34" y2="41" stroke="#1e1e6e" strokeWidth="1.5" strokeLinecap="round" />
        {/* Mango */}
        <rect x="21" y="40" width="10" height="20" rx="4" fill="#1e1e6e" />
        {/* Pelota */}
        <circle cx="52" cy="48" r="7" fill="#F9EA1B" stroke="#1e1e6e" strokeWidth="2.5" />
      </svg>
    ),
    nombre: 'Pelota Paleta',
    descripcion: 'Contamos con el trinquete Oscar Gallego, una instalación histórica del club donde se práctica esta disciplina tradicional en distintas modalidades.',
    categorias: ['Paleta Goma', 'Paleta Cuero', 'Pelota a Mano'],
    logro: 'Trinquete propio — Oscar Gallego',
  },
  {
    emoji: '🏊',
    nombre: 'Natación',
    descripcion: 'Clases de natación para todas las edades en el natatorio Ismael Amit —que recibió la visita de Diego Maradona en 1994— con profesores certificados.',
    categorias: ['Bebés', 'Niños', 'Adultos', 'Tercera edad'],
    logro: 'Más de 300 alumnos activos',
  },
]

export default function DeportesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header hero */}
      <div className="relative overflow-hidden py-20" style={{ background: 'linear-gradient(135deg, #1e1e6e 0%, #2d2d9e 50%, #1a1a5e 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-8 bg-[#F9EA1B]" style={{ left: `${i * 5.5}%` }} />
          ))}
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#F9EA1B]/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#F9EA1B]/8 blur-3xl" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-[#F9EA1B] text-sm font-display uppercase tracking-widest mb-2">Club Atlético All Boys</p>
          <h1 className="text-white font-display font-black text-5xl sm:text-6xl uppercase tracking-tight mb-4">
            Deportes
          </h1>
          <div className="w-20 h-1 bg-[#F9EA1B] rounded-full mx-auto mb-6" />
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            All Boys es un club <strong className="text-white">multideportivo</strong>. Encontrá la disciplina que más te guste y sumate a la familia azul y amarilla.
          </p>
        </div>
      </div>

      {/* Grid de deportes */}
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deportes.map((deporte) => (
            <div
              key={deporte.nombre}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 flex flex-col"
              style={{ borderTop: '3px solid #F9EA1B' }}
            >
              <div className="mb-4 h-10 flex items-center">
                {deporte.svgIcon ?? <span className="text-4xl leading-none">{deporte.emoji}</span>}
              </div>

              <h2 className="font-display font-bold uppercase text-xl mb-2" style={{ color: '#2E2DA8' }}>
                {deporte.nombre}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                {deporte.descripcion}
              </p>

              {/* Categorías */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {deporte.categorias.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs font-display font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: '#2E2DA815', color: '#2E2DA8' }}
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Logro */}
              <div
                className="flex items-center gap-2 pt-3 border-t border-gray-100 text-xs font-semibold"
                style={{ color: '#2E2DA880' }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#F9EA1B' }} />
                {deporte.logro}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-16 rounded-2xl p-10 text-center"
          style={{ background: 'linear-gradient(135deg, #1e1e6e 0%, #2d2d9e 100%)' }}
        >
          <div className="text-5xl mb-4">🏆</div>
          <h3 className="font-display font-bold uppercase text-2xl text-white mb-2">
            ¿Querés sumarte?
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-sm mx-auto">
            Hacete socio y accedé a todas las disciplinas con descuentos exclusivos.
          </p>
          <Link to="/contacto" className="btn-primary inline-flex items-center gap-2">
            Contactanos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
