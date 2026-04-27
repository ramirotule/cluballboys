import { Mail, Phone, ArrowRight, Handshake } from 'lucide-react'
import { Link } from 'react-router-dom'

// ─── AUSPICIANTES ─────────────────────────────────────────────────────────────
// Para agregar un auspiciante: { nombre, rubro, logo, web (opcional) }
const AUSPICIANTES = [
  // Ejemplo (reemplazar con los reales):
  // { nombre: 'Empresa Ejemplo', rubro: 'Construcción', logo: null, web: 'https://...' },
]

const BENEFICIOS = [
  { icon: '📢', titulo: 'Visibilidad', descripcion: 'Tu marca presente en el estadio, las redes sociales y el sitio web del club.' },
  { icon: '🤝', titulo: 'Comunidad', descripcion: 'Asociate a una institución con más de 2.000 socios y décadas de historia.' },
  { icon: '📍', titulo: 'Presencia local', descripcion: 'Llegá a toda la comunidad de Santa Rosa y La Pampa a través del deporte.' },
  { icon: '🏆', titulo: 'Eventos', descripcion: 'Participación y mención en todos los eventos y torneos que organiza el club.' },
]

function AuspicianteCard({ auspiciante }) {
  const card = (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 hover:border-yellow-300 p-6 flex flex-col items-center gap-4 text-center group">
      {auspiciante.logo ? (
        <img src={auspiciante.logo} alt={auspiciante.nombre} className="h-20 object-contain" />
      ) : (
        <div className="w-24 h-24 rounded-xl flex items-center justify-center text-3xl font-display font-black" style={{ backgroundColor: '#F9EA1B', color: '#302782' }}>
          {auspiciante.nombre.charAt(0)}
        </div>
      )}
      <div>
        <p className="font-display font-black uppercase text-base" style={{ color: '#302782' }}>{auspiciante.nombre}</p>
        <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-widest">{auspiciante.rubro}</p>
      </div>
      {auspiciante.web && (
        <span className="flex items-center gap-1 text-xs font-bold font-display uppercase opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#302782' }}>
          Visitar sitio <ArrowRight className="w-3 h-3" />
        </span>
      )}
    </div>
  )

  return auspiciante.web
    ? <a href={auspiciante.web} target="_blank" rel="noopener noreferrer">{card}</a>
    : card
}

export default function AuspiciantesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F4F6' }}>

      {/* Header */}
      <div className="relative overflow-hidden py-20 px-4" style={{ background: 'linear-gradient(135deg, #1e1e6e 0%, #2d2d9e 50%, #1a1a5e 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-8 bg-[#F9EA1B]" style={{ left: `${i * 5.5}%` }} />
          ))}
        </div>
        <div className="relative z-10 container mx-auto text-center">
          <p className="text-[#F9EA1B] text-sm font-display uppercase tracking-widest mb-2">Club All Boys</p>
          <h1 className="text-white font-display font-black text-4xl sm:text-5xl uppercase tracking-tight mb-4">
            Auspiciantes
          </h1>
          <div className="w-20 h-1 bg-[#F9EA1B] rounded-full mx-auto mb-6" />
          <p className="text-white/70 max-w-xl mx-auto text-lg leading-relaxed">
            Las empresas e instituciones que hacen posible el deporte en All Boys.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14 max-w-5xl">

        {/* Grid de auspiciantes */}
        {AUSPICIANTES.length > 0 ? (
          <>
            <h2 className="font-display font-black uppercase text-2xl mb-8 tracking-wide" style={{ color: '#302782' }}>
              Nuestros auspiciantes
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-16">
              {AUSPICIANTES.map((a, i) => <AuspicianteCard key={i} auspiciante={a} />)}
            </div>
          </>
        ) : (
          <div className="text-center py-14 mb-10 rounded-2xl border-2 border-dashed border-gray-200 bg-white">
            <span className="text-5xl block mb-4">🤝</span>
            <p className="font-display font-bold text-lg" style={{ color: '#302782' }}>Próximamente</p>
            <p className="text-gray-400 text-sm mt-1">Los auspiciantes del club aparecerán aquí.</p>
          </div>
        )}

        {/* Beneficios */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <p className="text-sm font-display uppercase tracking-widest mb-1" style={{ color: '#30278260' }}>¿Por qué elegirnos?</p>
            <h2 className="font-display font-black uppercase text-2xl" style={{ color: '#302782' }}>
              Beneficios de auspiciar a All Boys
            </h2>
            <div className="w-12 h-1 rounded-full mx-auto mt-3" style={{ backgroundColor: '#F9EA1B' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFICIOS.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md transition-shadow">
                <span className="text-4xl block mb-3">{b.icon}</span>
                <p className="font-display font-bold uppercase text-sm mb-2" style={{ color: '#302782' }}>{b.titulo}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{b.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA — Quiero ser auspiciante */}
        <div
          className="rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #302782 0%, #1a1660 100%)' }}
        >
          {/* Decoración */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: '#F9EA1B', transform: 'translate(30%, -30%)' }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: '#F9EA1B', transform: 'translate(-30%, 30%)' }} />

          <div className="relative z-10">
            <Handshake className="w-12 h-12 mx-auto mb-4 text-white opacity-80" />
            <h3 className="font-display font-black uppercase text-2xl sm:text-3xl text-white mb-3 tracking-wide">
              ¿Querés ser nuestro auspiciante?
            </h3>
            <p className="text-white/70 max-w-lg mx-auto text-base leading-relaxed mb-8">
              Sumá tu empresa al club más querido de Santa Rosa. Juntos hacemos crecer el deporte y la comunidad pampeana.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contacto"
                className="flex items-center gap-2 px-8 py-3 rounded-xl font-display font-bold uppercase text-sm transition-all duration-200"
                style={{ backgroundColor: '#F9EA1B', color: '#302782' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DFD018'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F9EA1B'}
              >
                <Mail className="w-4 h-4" /> Contactanos
              </Link>
              <a
                href="tel:+5492954000000"
                className="flex items-center gap-2 px-8 py-3 rounded-xl font-display font-bold uppercase text-sm border-2 border-white/30 text-white transition-all duration-200 hover:border-white"
              >
                <Phone className="w-4 h-4" /> Llamanos
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
