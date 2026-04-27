import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react'
import { useNoticias } from '../context/NoticiasContext'

function formatFecha(fechaISO) {
  if (!fechaISO) return ''
  const [y, m, d] = fechaISO.split('-')
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  return `${parseInt(d)} ${meses[parseInt(m) - 1]} ${y}`
}

function OtraNoticia({ noticia }) {
  return (
    <Link
      to={`/noticias/${noticia.id}`}
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
    >
      <div className="h-32 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: noticia.color || '#2E2DA8' }}>
        {noticia.fotoPreview
          ? <img src={noticia.fotoPreview} alt={noticia.titulo} className="w-full h-full object-cover" />
          : <img src="/logo.png" alt="All Boys" className="h-14 w-auto opacity-20 select-none" />
        }
        <span className="absolute top-2 left-2 text-xs font-display font-bold uppercase px-2 py-0.5 rounded" style={{ backgroundColor: '#F9EA1B', color: '#2E2DA8' }}>
          {noticia.categoria}
        </span>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h4 className="font-display font-bold text-sm leading-tight mb-2 group-hover:opacity-70 transition-opacity line-clamp-2" style={{ color: '#2E2DA8' }}>
          {noticia.titulo}
        </h4>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-xs text-gray-400">{formatFecha(noticia.fecha)}</span>
          <span className="flex items-center gap-1 text-xs font-bold font-display uppercase group-hover:gap-1.5 transition-all" style={{ color: '#2E2DA8' }}>
            Leer <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function NoticiaPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { noticias } = useNoticias()

  const noticia = noticias.find(n => String(n.id) === String(id))

  if (!noticia) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
        <p className="text-2xl font-display font-bold" style={{ color: '#2E2DA8' }}>Noticia no encontrada</p>
        <Link to="/noticias" className="flex items-center gap-2 text-sm font-bold font-display uppercase" style={{ color: '#2E2DA8' }}>
          <ArrowLeft className="w-4 h-4" /> Volver a noticias
        </Link>
      </div>
    )
  }

  const otras = noticias.filter(n => n.id !== noticia.id).slice(0, 3)

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F4F6' }}>

      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '380px' }}>
        {noticia.fotoPreview ? (
          <>
            <img
              src={noticia.fotoPreview}
              alt={noticia.titulo}
              className="w-full h-full object-cover absolute inset-0"
              style={{ minHeight: '380px' }}
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #00000033 0%, #000000BB 100%)' }} />
          </>
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${noticia.color || '#302782'} 0%, #1a1660 100%)` }}
          >
            <img src="/logo.png" alt="All Boys" className="h-40 w-auto opacity-10 select-none" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, #00000066 100%)' }} />
          </div>
        )}

        {/* Back button */}
        <div className="relative z-10 container mx-auto px-4 pt-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wide px-4 py-2 rounded-lg transition-all duration-200"
            style={{ backgroundColor: '#ffffff22', color: 'white', backdropFilter: 'blur(4px)' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#ffffff33'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ffffff22'}
          >
            <ArrowLeft className="w-4 h-4" /> Volver
          </button>
        </div>

        {/* Meta info sobre la imagen */}
        <div className="relative z-10 container mx-auto px-4 pb-10 pt-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-xs font-display font-bold uppercase px-3 py-1 rounded-full" style={{ backgroundColor: '#F9EA1B', color: '#2E2DA8' }}>
              <Tag className="w-3 h-3" />
              {noticia.categoria}
            </span>
            <span className="flex items-center gap-1.5 text-white/80 text-sm">
              <Calendar className="w-4 h-4" />
              {formatFecha(noticia.fecha)}
            </span>
          </div>
          <h1 className="text-white font-display font-black text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-3xl">
            {noticia.titulo}
          </h1>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10 mb-10" style={{ borderTop: '3px solid #F9EA1B' }}>

          {/* Resumen destacado */}
          {noticia.resumen && (
            <p className="text-base sm:text-lg font-semibold leading-relaxed mb-8 pb-8 border-b border-gray-100" style={{ color: '#302782' }}>
              {noticia.resumen}
            </p>
          )}

          {/* Cuerpo del artículo */}
          {noticia.cuerpo ? (
            <div className="prose-custom">
              {noticia.cuerpo.split('\n\n').map((parrafo, i) => (
                <p key={i} className="text-gray-600 text-base leading-relaxed mb-5 last:mb-0">
                  {parrafo}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 italic">El contenido completo de esta noticia no está disponible.</p>
          )}

          {/* Pie del artículo */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <img src="/logo.png" alt="All Boys" className="h-6 w-auto opacity-50" />
              Club All Boys · Santa Rosa, La Pampa
            </div>
            <Link
              to="/noticias"
              className="flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wide transition-all"
              style={{ color: '#2E2DA8' }}
            >
              <ArrowLeft className="w-4 h-4" /> Todas las noticias
            </Link>
          </div>
        </div>

        {/* Otras noticias */}
        {otras.length > 0 && (
          <div>
            <h2 className="font-display font-black uppercase text-lg mb-5 tracking-wide" style={{ color: '#2E2DA8' }}>
              Otras noticias
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otras.map(n => <OtraNoticia key={n.id} noticia={n} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
