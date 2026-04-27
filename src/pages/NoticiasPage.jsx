import { Calendar, ArrowRight } from 'lucide-react'

const allNews = [
  { id: 1, category: 'Fútbol', title: 'All Boys golea y sigue líder de la tabla regional', excerpt: 'Un contundente 3-0 frente al rival de turno dejó al equipo en la cima de la competencia con cuatro fechas por delante.', date: '24 Abr 2026', color: 'bg-allboys-blue' },
  { id: 2, category: 'Inferiores', title: 'Las divisiones menores brillan en el torneo pampeano', excerpt: 'Tres categorías de la cantera avanzaron a instancias decisivas del certamen juvenil provincial.', date: '22 Abr 2026', color: 'bg-allboys-blue-dark' },
  { id: 3, category: 'Institución', title: 'Nueva sede social: el proyecto ya tiene fecha de inicio', excerpt: 'La comisión directiva presentó el plan de obras de la futura sede, que contará con espacios modernos para todos los socios.', date: '20 Abr 2026', color: 'bg-allboys-blue-light' },
  { id: 4, category: 'Básquet', title: 'El equipo de básquet se prepara para la gran final', excerpt: 'Tras una temporada impecable, los chicos de All Boys disputarán la final del campeonato el próximo fin de semana.', date: '18 Abr 2026', color: 'bg-allboys-blue' },
  { id: 5, category: 'Socios', title: '¡Superamos los 2.000 asociados este año!', excerpt: 'El club celebra un hito histórico con más afiliados que nunca, consolidando su base institucional en La Pampa.', date: '15 Abr 2026', color: 'bg-allboys-blue-dark' },
  { id: 6, category: 'Historia', title: 'Un nuevo aniversario: todo lo que hay que saber', excerpt: 'All Boys cumple un nuevo año de vida con festejos en el estadio, actos culturales y una muestra fotográfica histórica.', date: '12 Abr 2026', color: 'bg-allboys-blue-light' },
  { id: 7, category: 'Fútbol Femenino', title: 'El femenino debuta con victoria en el torneo provincial', excerpt: 'Excelente arranque del equipo femenino en la competencia oficial, con un triunfo claro ante rivales de Realicó.', date: '10 Abr 2026', color: 'bg-allboys-blue' },
  { id: 8, category: 'Vóley', title: 'Vóley convoca nuevos jugadores para la temporada', excerpt: 'La disciplina abre las puertas para incorporar jugadores de todas las edades. Las pruebas son los martes y jueves.', date: '8 Abr 2026', color: 'bg-allboys-blue-dark' },
  { id: 9, category: 'Eventos', title: 'Gran cena de socios: éxito rotundo', excerpt: 'Más de 300 personas participaron de la cena anual del club, que recaudó fondos para las obras de infraestructura.', date: '5 Abr 2026', color: 'bg-allboys-blue-light' },
]

function NewsCard({ item }) {
  return (
    <article className="card group cursor-pointer">
      <div className={`${item.color} h-40 flex items-center justify-center relative overflow-hidden`}>
        <img src="/logo.png" alt="All Boys" className="h-20 w-auto opacity-20 select-none" />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-display font-bold uppercase tracking-wide px-2 py-1 rounded" style={{ backgroundColor: '#F9EA1B', color: '#2E2DA8' }}>
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg leading-tight mb-2 group-hover:opacity-70 transition-opacity" style={{ color: '#2E2DA8' }}>
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{item.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-gray-400 text-xs">
            <Calendar className="w-3.5 h-3.5" />
            {item.date}
          </span>
          <span className="flex items-center gap-1 text-sm font-bold group-hover:gap-2 transition-all font-display uppercase" style={{ color: '#2E2DA8' }}>
            Leer más <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </article>
  )
}

export default function NoticiasPage() {
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
          <p className="text-[#F9EA1B] text-sm font-display uppercase tracking-widest mb-2">Club Atlético All Boys</p>
          <h1 className="text-white font-display font-black text-5xl sm:text-6xl uppercase tracking-tight mb-4">
            Noticias
          </h1>
          <div className="w-20 h-1 bg-[#F9EA1B] rounded-full mx-auto mb-6" />
          <p className="text-white/70 max-w-xl mx-auto text-lg leading-relaxed">
            Todo lo que pasa en el club: resultados, eventos, institucional y más.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
