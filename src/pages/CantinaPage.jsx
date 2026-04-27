import { MapPin, Clock, Phone } from 'lucide-react'

const MENU = [
  {
    categoria: 'Sandwiches',
    icon: '🥪',
    items: [
      { nombre: 'Sandwich de milanesa', descripcion: 'Milanesa de ternera con lechuga, tomate y mayonesa', precio: 3500 },
      { nombre: 'Sandwich de jamón y queso', descripcion: 'Jamón cocido, queso y manteca en pan árabe', precio: 2800 },
      { nombre: 'Sandwich de lomito', descripcion: 'Lomito a la plancha con morrones y queso fundido', precio: 4200 },
      { nombre: 'Sandwich veggie', descripcion: 'Berenjena grillada, queso, tomate y rúcula', precio: 3000 },
    ],
  },
  {
    categoria: 'Empanadas',
    icon: '🫔',
    items: [
      { nombre: 'Empanada de carne', descripcion: 'Carne picada con cebolla, morrón y especias', precio: 900 },
      { nombre: 'Empanada de jamón y queso', descripcion: 'Jamón y queso cremoso', precio: 850 },
      { nombre: 'Empanada de humita', descripcion: 'Choclo cremoso con especias', precio: 850 },
      { nombre: 'Empanada de pollo', descripcion: 'Pollo deshebrado con verduras salteadas', precio: 900 },
    ],
  },
  {
    categoria: 'Minutas',
    icon: '🍳',
    items: [
      { nombre: 'Milanesa napolitana', descripcion: 'Con salsa, jamón, queso y papas fritas', precio: 6500 },
      { nombre: 'Milanesa con papas', descripcion: 'Milanesa de ternera con papas fritas', precio: 5800 },
      { nombre: 'Hamburguesa casera', descripcion: 'Con lechuga, tomate, cebolla y papas fritas', precio: 5500 },
      { nombre: 'Revuelto gramajo', descripcion: 'Huevos revueltos con papas pay y jamón', precio: 4500 },
    ],
  },
  {
    categoria: 'Bebidas',
    icon: '🥤',
    items: [
      { nombre: 'Gaseosa (lata)', descripcion: 'Coca-Cola, Sprite, Fanta', precio: 1200 },
      { nombre: 'Agua mineral', descripcion: 'Con o sin gas · 500ml', precio: 900 },
      { nombre: 'Cerveza (porrón)', descripcion: 'Quilmes o Heineken', precio: 1800 },
      { nombre: 'Café / Cortado', descripcion: 'Café espresso o cortado con leche', precio: 1000 },
      { nombre: 'Mate cocido', descripcion: 'Con leche o con agua', precio: 800 },
      { nombre: 'Jugo natural', descripcion: 'Naranja o limón exprimido', precio: 1400 },
    ],
  },
  {
    categoria: 'Postres y snacks',
    icon: '🍰',
    items: [
      { nombre: 'Facturas', descripcion: 'Medialunas, vigilantes o croissants', precio: 700 },
      { nombre: 'Tostado', descripcion: 'Jamón y queso en pan lactal', precio: 1800 },
      { nombre: 'Porción de torta', descripcion: 'Consultar sabores del día', precio: 2200 },
      { nombre: 'Alfajor', descripcion: 'Triple de maicena o de chocolate', precio: 900 },
    ],
  },
]

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
