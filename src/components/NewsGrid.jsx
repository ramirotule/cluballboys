import { Calendar, ArrowRight, BookOpen, Trophy, Users, Phone } from 'lucide-react'

const news = [
  {
    id: 1,
    category: 'Fútbol',
    title: 'All Boys golea y sigue líder de la tabla regional',
    excerpt:
      'Un contundente 3-0 frente al rival de turno dejó al equipo en la cima de la competencia con cuatro fechas por delante.',
    date: '24 Abr 2026',
    color: 'bg-allboys-blue',
  },
  {
    id: 2,
    category: 'Inferiores',
    title: 'Las divisiones menores brillan en el torneo pampeano',
    excerpt:
      'Tres categorías de la cantera avanzaron a instancias decisivas del certamen juvenil provincial.',
    date: '22 Abr 2026',
    color: 'bg-allboys-blue-dark',
  },
  {
    id: 3,
    category: 'Institución',
    title: 'Nueva sede social: el proyecto ya tiene fecha de inicio',
    excerpt:
      'La comisión directiva presentó el plan de obras de la futura sede, que contará con espacios modernos para todos los socios.',
    date: '20 Abr 2026',
    color: 'bg-allboys-blue-light',
  },
  {
    id: 4,
    category: 'Básquet',
    title: 'El equipo de básquet se prepara para la gran final',
    excerpt:
      'Tras una temporada impecable, los chicos de All Boys disputarán la final del campeonato el próximo fin de semana.',
    date: '18 Abr 2026',
    color: 'bg-allboys-blue',
  },
  {
    id: 5,
    category: 'Socios',
    title: '¡Superamos los 2.000 asociados este año!',
    excerpt:
      'El club celebra un hito histórico con más afiliados que nunca, consolidando su base institucional en La Pampa.',
    date: '15 Abr 2026',
    color: 'bg-allboys-blue-dark',
  },
  {
    id: 6,
    category: 'Historia',
    title: 'Un nuevo aniversario: todo lo que hay que saber',
    excerpt:
      'All Boys cumple un nuevo año de vida con festejos en el estadio, actos culturales y una muestra fotográfica histórica.',
    date: '12 Abr 2026',
    color: 'bg-allboys-blue-light',
  },
]

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
    <article className="card group cursor-pointer">
      {/* Image area */}
      <div className={`${item.color} h-44 flex items-center justify-center relative overflow-hidden`}>
        <img
          src="/logo.png"
          alt="All Boys"
          className="h-24 w-auto opacity-20 select-none"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-allboys-yellow text-allboys-blue text-xs font-display font-bold uppercase tracking-wide px-2 py-1 rounded">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-allboys-blue text-lg leading-tight mb-2 group-hover:text-allboys-blue-light transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {item.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            {item.date}
          </span>
          <span className="flex items-center gap-1 text-allboys-blue text-sm font-semibold group-hover:gap-2 transition-all">
            Leer más <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </article>
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
            <a
              href="#noticias"
              className="sm:flex items-center gap-1.5 text-sm font-bold text-allboys-blue hover:gap-3 transition-all hidden font-display uppercase"
            >
              Ver todas <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
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
