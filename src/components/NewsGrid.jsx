import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, BookOpen, Trophy, Users, Phone } from 'lucide-react'
import { useNoticias } from '../context/NoticiasContext'

function formatFecha(fechaISO) {
  if (!fechaISO) return ''
  const [y, m, d] = fechaISO.split('-')
  const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  return `${parseInt(d)} ${meses[parseInt(m) - 1]} ${y}`
}

const sections = [
  {
    id: 'historia',
    icon: BookOpen,
    title: 'Historia',
    description: 'Conocé el origen, los hitos y la trayectoria de nuestro club a lo largo de los años.',
    cta: 'Ver historia',
  },
  {
    id: 'deportes',
    icon: Trophy,
    title: 'Deportes',
    description: 'Fútbol, básquet, vóley y más. Todas las disciplinas que hacen grande a All Boys.',
    cta: 'Ver deportes',
  },
  {
    id: 'autoridades',
    icon: Users,
    title: 'Autoridades',
    description: 'Conocé a la comisión directiva y a quienes conducen el club día a día.',
    cta: 'Ver autoridades',
  },
  {
    id: 'contacto',
    icon: Phone,
    title: 'Contacto',
    description: 'Escribinos, acercate a la sede o encontranos en redes sociales.',
    cta: 'Contactar',
  },
]

function NewsCard({ item }) {
  return (
    <Link to={`/noticias/${item.id}`} className="card group cursor-pointer block">
      <div className="h-44 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: item.color || '#2E2DA8' }}>
        {item.fotoPreview
          ? <img src={item.fotoPreview} alt={item.titulo} className="w-full h-full object-cover" />
          : <img src="/logo.png" alt="All Boys" className="h-24 w-auto opacity-20 select-none" />
        }
        <div className="absolute top-3 left-3">
          <span className="bg-allboys-yellow text-allboys-blue text-xs font-display font-bold uppercase tracking-wide px-2 py-1 rounded">
            {item.categoria}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-allboys-blue text-lg leading-tight mb-2 group-hover:text-allboys-blue-light transition-colors">
          {item.titulo}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{item.resumen}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            {formatFecha(item.fecha)}
          </span>
          <span className="flex items-center gap-1 text-allboys-blue text-sm font-semibold group-hover:gap-2 transition-all">
            Leer más <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

function SectionCard({ section }) {
  const Icon = section.icon
  return (
    <a
      href={`#${section.id}`}
      className="card group block p-6 border-2 border-transparent hover:border-allboys-yellow transition-colors duration-200"
    >
      <div className="w-12 h-12 bg-allboys-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-allboys-yellow transition-colors duration-200">
        <Icon className="w-6 h-6 text-allboys-yellow group-hover:text-allboys-blue transition-colors duration-200" />
      </div>
      <h3 className="font-display font-bold uppercase text-xl mb-2 text-allboys-blue">{section.title}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{section.description}</p>
      <span className="flex items-center gap-1.5 text-sm font-bold text-allboys-blue group-hover:gap-2 transition-all uppercase font-display">
        {section.cta} <ArrowRight className="w-4 h-4" />
      </span>
    </a>
  )
}

export default function NewsGrid() {
  const { noticias } = useNoticias()
  const recientes = [...noticias].sort((a, b) => b.fecha.localeCompare(a.fecha)).slice(0, 6)

  return (
    <div>
      {/* Noticias */}
      <section id="noticias" className="py-16 md:py-24 bg-allboys-gray">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-allboys-blue/50 text-sm font-display uppercase tracking-widest mb-1">
                Lo último
              </p>
              <h2 className="section-title">Noticias</h2>
            </div>
            <Link
              to="/noticias"
              className="sm:flex items-center gap-1.5 text-sm font-bold text-allboys-blue hover:gap-3 transition-all hidden font-display uppercase"
            >
              Ver todas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recientes.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Secciones del club */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-allboys-blue/50 text-sm font-display uppercase tracking-widest mb-1">
              El Club
            </p>
            <h2 className="section-title">Todo All Boys</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section) => (
              <SectionCard key={section.id} section={section} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
