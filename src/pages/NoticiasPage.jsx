import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'
import { useNoticias } from '../context/NoticiasContext'

function formatFecha(fechaISO) {
  if (!fechaISO) return ''
  const [y, m, d] = fechaISO.split('-')
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  return `${parseInt(d)} ${meses[parseInt(m) - 1]} ${y}`
}

function NewsCard({ item }) {
  return (
    <Link to={`/noticias/${item.id}`} className="card group cursor-pointer block">
      <div className="h-40 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: item.color || '#2E2DA8' }}>
        {item.fotoPreview
          ? <img src={item.fotoPreview} alt={item.titulo} className="w-full h-full object-cover" />
          : <img src="/logo.png" alt="All Boys" className="h-20 w-auto opacity-20 select-none" />
        }
        <div className="absolute top-3 left-3">
          <span className="text-xs font-display font-bold uppercase tracking-wide px-2 py-1 rounded" style={{ backgroundColor: '#F9EA1B', color: '#2E2DA8' }}>
            {item.categoria}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg leading-tight mb-2 group-hover:opacity-70 transition-opacity" style={{ color: '#2E2DA8' }}>
          {item.titulo}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{item.resumen}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            {formatFecha(item.fecha)}
          </span>
          <span className="flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all font-display uppercase" style={{ color: '#2E2DA8' }}>
            Leer más <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function NoticiasPage() {
  const { noticias } = useNoticias()
  const ordenadas = [...noticias].sort((a, b) => b.fecha.localeCompare(a.fecha))

  return (
    <div className="min-h-screen bg-allboys-gray">

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
          <p className="text-[#F9EA1B] text-sm font-display uppercase tracking-widest mb-2">Club All Boys</p>
          <h1 className="text-white font-display font-black text-5xl sm:text-6xl uppercase tracking-tight mb-4">Noticias</h1>
          <div className="w-20 h-1 bg-[#F9EA1B] rounded-full mx-auto mb-6" />
          <p className="text-white/70 max-w-xl mx-auto text-lg leading-relaxed">
            Todo lo que pasa en el club: resultados, eventos, institucional y más.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {ordenadas.length === 0 ? (
          <p className="text-center text-gray-400 py-20">No hay noticias publicadas todavía.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ordenadas.map(item => <NewsCard key={item.id} item={item} />)}
          </div>
        )}
      </div>
    </div>
  )
}
