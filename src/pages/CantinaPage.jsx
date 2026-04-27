import { MapPin, Clock, Phone } from 'lucide-react'
import { useCantina } from '../context/CantinaContext'

function formatPrecio(n) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n)
}

function MenuCard({ categoria }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-5 py-4 flex items-center gap-3 border-b border-gray-100" style={{ backgroundColor: '#F8F8FF' }}>
        <span className="text-2xl">{categoria.icon}</span>
        <h3 className="font-display font-black uppercase tracking-wide text-base" style={{ color: '#302782' }}>
          {categoria.categoria}
        </h3>
      </div>
      <ul className="divide-y divide-gray-50">
        {categoria.items.map((item, i) => (
          <li key={i} className="px-5 py-4 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors">
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-sm" style={{ color: '#302782' }}>{item.nombre}</p>
              <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.descripcion}</p>
            </div>
            <span className="font-display font-black text-sm shrink-0 mt-0.5" style={{ color: '#302782' }}>
              {formatPrecio(item.precio)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CantinaPage() {
  const { menu: MENU } = useCantina()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F4F6' }}>

      {/* Hero con foto */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: '480px' }}>
        <img
          src="/lacantina.png"
          alt="La Cantina del Club All Boys"
          className="w-full object-cover"
          style={{ maxHeight: '480px' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #00000022 0%, #000000BB 100%)' }} />

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-10">
          <span className="inline-block text-xs font-display font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3" style={{ backgroundColor: '#F9EA1B', color: '#302782' }}>
            Club All Boys
          </span>
          <h1 className="text-white font-display font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight">
            La Cantina
          </h1>
          <p className="text-white/80 text-base mt-2 max-w-xl">
            Un viejo anhelo hecho realidad. El punto de encuentro después de cada partido o entrenamiento.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 max-w-5xl">

        {/* Info rápida */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: Clock, label: 'Horario', valor: 'Lunes a Viernes 8–22 hs · Fines de semana 9–23 hs' },
            { icon: MapPin, label: 'Ubicación', valor: 'Hilario Lagos 435' },
            { icon: Phone, label: 'Contacto', valor: 'Consultar en administración del club' },
          ].map(({ icon: Icon, label, valor }) => (
            <div key={label} className="bg-white rounded-xl px-5 py-4 flex items-start gap-3 border border-gray-100 shadow-sm">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#302782' }}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-display font-bold uppercase tracking-widest text-gray-400">{label}</p>
                <p className="text-sm font-semibold mt-0.5" style={{ color: '#302782' }}>{valor}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Aviso de precios */}
        <div className="rounded-xl px-5 py-3 mb-8 flex items-center gap-3 text-sm" style={{ backgroundColor: '#F9EA1B20', borderLeft: '3px solid #F9EA1B' }}>
          <span className="text-xl">⚠️</span>
          <p style={{ color: '#302782' }}>Los precios son orientativos y pueden variar. Consultá en el mostrador el menú del día.</p>
        </div>

        {/* Menú */}
        <h2 className="font-display font-black uppercase text-2xl mb-6 tracking-wide" style={{ color: '#302782' }}>
          Menú
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {MENU.map(cat => <MenuCard key={cat.categoria} categoria={cat} />)}
        </div>
      </div>
    </div>
  )
}
