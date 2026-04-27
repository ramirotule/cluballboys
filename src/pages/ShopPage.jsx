import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react'

const CATEGORIAS = ['Todo', 'Indumentaria', 'Accesorios', 'Merchandising']

const PRODUCTOS = [
  {
    id: 1,
    nombre: 'Camiseta Oficial Titular 2026',
    categoria: 'Indumentaria',
    precio: 28000,
    descripcion: 'Camiseta azul con rayas amarillas. Tela deportiva de alta transpirabilidad.',
    talles: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Nuevo',
    emoji: '👕',
    color: '#1e1e6e',
  },
  {
    id: 2,
    nombre: 'Camiseta Oficial Alternativa 2026',
    categoria: 'Indumentaria',
    precio: 28000,
    descripcion: 'Versión alternativa amarilla con detalles en azul. Edición limitada.',
    talles: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Nuevo',
    emoji: '👕',
    color: '#DFD018',
  },
  {
    id: 3,
    nombre: 'Buzo Hoodie Club',
    categoria: 'Indumentaria',
    precio: 22000,
    descripcion: 'Buzo con capucha y escudo bordado. Interior afelpado, ideal para el invierno.',
    talles: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: null,
    emoji: '🧥',
    color: '#1e1e6e',
  },
  {
    id: 4,
    nombre: 'Remera Casual All Boys',
    categoria: 'Indumentaria',
    precio: 12000,
    descripcion: 'Remera de algodón con logo del club. Diseño urbano y cómodo para el día a día.',
    talles: ['XS', 'S', 'M', 'L', 'XL'],
    badge: null,
    emoji: '👚',
    color: '#1e1e6e',
  },
  {
    id: 5,
    nombre: 'Short Deportivo',
    categoria: 'Indumentaria',
    precio: 10000,
    descripcion: 'Short oficial de entrenamiento con escudo bordado y tela liviana.',
    talles: ['S', 'M', 'L', 'XL'],
    badge: null,
    emoji: '🩳',
    color: '#1e1e6e',
  },
  {
    id: 6,
    nombre: 'Campera Rompeviento',
    categoria: 'Indumentaria',
    precio: 32000,
    descripcion: 'Campera liviana e impermeable con logo bordado. Perfecta para días fríos en la cancha.',
    talles: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Destacado',
    emoji: '🧥',
    color: '#2d2d9e',
  },
  {
    id: 7,
    nombre: 'Gorra Oficial',
    categoria: 'Accesorios',
    precio: 8500,
    descripcion: 'Gorra estructurada azul con escudo bordado. Regulable, talle único.',
    talles: ['Único'],
    badge: null,
    emoji: '🧢',
    color: '#1e1e6e',
  },
  {
    id: 8,
    nombre: 'Bufanda del Club',
    categoria: 'Accesorios',
    precio: 7000,
    descripcion: 'Bufanda tejida en los colores azul y amarillo. Perfecta para los días de partido.',
    talles: ['Único'],
    badge: null,
    emoji: '🧣',
    color: '#1e1e6e',
  },
  {
    id: 9,
    nombre: 'Medias Deportivas',
    categoria: 'Accesorios',
    precio: 3500,
    descripcion: 'Medias deportivas oficiales azul y amarillo. Pack x2 pares.',
    talles: ['35-38', '39-42', '43-46'],
    badge: null,
    emoji: '🧦',
    color: '#1e1e6e',
  },
  {
    id: 10,
    nombre: 'Mochila All Boys',
    categoria: 'Accesorios',
    precio: 18000,
    descripcion: 'Mochila deportiva 25L con logo bordado, compartimento para botella y bolsillo frontal.',
    talles: ['Único'],
    badge: 'Destacado',
    emoji: '🎒',
    color: '#1e1e6e',
  },
  {
    id: 11,
    nombre: 'Taza Cerámica',
    categoria: 'Merchandising',
    precio: 4500,
    descripcion: 'Taza de cerámica 350ml con escudo del club. Apta para microondas y lavavajillas.',
    talles: ['Único'],
    badge: null,
    emoji: '☕',
    color: '#1e1e6e',
  },
  {
    id: 12,
    nombre: 'Llavero Escudo',
    categoria: 'Merchandising',
    precio: 1800,
    descripcion: 'Llavero metálico con el escudo del club en relieve. Acabado premium.',
    talles: ['Único'],
    badge: null,
    emoji: '🔑',
    color: '#DFD018',
  },
  {
    id: 13,
    nombre: 'Botella Deportiva',
    categoria: 'Merchandising',
    precio: 9000,
    descripcion: 'Botella de aluminio 750ml con logo grabado. Mantiene la temperatura hasta 12 hs.',
    talles: ['Único'],
    badge: null,
    emoji: '🍶',
    color: '#1e1e6e',
  },
  {
    id: 14,
    nombre: 'Parche Escudo Bordado',
    categoria: 'Merchandising',
    precio: 2200,
    descripcion: 'Parche bordado del escudo oficial para personalizar tu ropa o mochila.',
    talles: ['Único'],
    badge: null,
    emoji: '🛡️',
    color: '#1e1e6e',
  },
]

function formatPrecio(n) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n)
}

function ProductCard({ producto, onAdd }) {
  const [talleSeleccionado, setTalleSeleccionado] = useState(producto.talles[0])
  const [added, setAdded] = useState(false)
  const [hovered, setHovered] = useState(false)

  const handleAdd = () => {
    onAdd({ ...producto, talleSeleccionado })
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  const btnBg = added ? '#22c55e' : hovered ? '#F9EA1B' : '#1e1e6e'
  const btnColor = added ? 'white' : hovered ? '#1e1e6e' : 'white'

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden hover:shadow-md transition-all duration-200 group" style={{ borderTop: '3px solid #F9EA1B' }}>
      {/* Imagen / placeholder */}
      <div className="h-44 flex items-center justify-center relative" style={{ backgroundColor: producto.color + '15' }}>
        <span className="text-7xl select-none group-hover:scale-110 transition-transform duration-300">
          {producto.emoji}
        </span>
        {producto.badge && (
          <span
            className="absolute top-3 left-3 text-xs font-display font-bold uppercase tracking-wide px-2 py-0.5 rounded"
            style={{ backgroundColor: producto.badge === 'Nuevo' ? '#F9EA1B' : '#1e1e6e', color: producto.badge === 'Nuevo' ? '#1e1e6e' : '#F9EA1B' }}
          >
            {producto.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <p className="text-xs font-display font-bold uppercase tracking-widest mb-1" style={{ color: '#1e1e6e60' }}>
            {producto.categoria}
          </p>
          <h3 className="font-display font-bold text-base leading-tight" style={{ color: '#1e1e6e' }}>
            {producto.nombre}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed mt-1">{producto.descripcion}</p>
        </div>

        {/* Talles */}
        {producto.talles.length > 1 && (
          <div>
            <p className="text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e60' }}>Talle</p>
            <div className="flex flex-wrap gap-1.5">
              {producto.talles.map(t => (
                <button
                  key={t}
                  onClick={() => setTalleSeleccionado(t)}
                  className="text-xs font-display font-bold uppercase px-2.5 py-1 rounded-lg border-2 transition-all duration-150"
                  style={{
                    borderColor: talleSeleccionado === t ? '#1e1e6e' : '#e5e7eb',
                    backgroundColor: talleSeleccionado === t ? '#1e1e6e' : 'white',
                    color: talleSeleccionado === t ? 'white' : '#9ca3af',
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Precio + CTA */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <p className="font-display font-black text-xl" style={{ color: '#1e1e6e' }}>
            {formatPrecio(producto.precio)}
          </p>
          <button
            onClick={handleAdd}
            onMouseEnter={() => !added && setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-display font-bold uppercase text-xs transition-all duration-200"
            style={{ backgroundColor: btnBg, color: btnColor }}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {added ? '¡Agregado!' : 'Agregar'}
          </button>
        </div>
      </div>
    </div>
  )
}

function CartDrawer({ cart, onClose, onRemove, onQty, onCheckout }) {
  const total = cart.reduce((acc, item) => acc + item.precio * item.qty, 0)
  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      <div className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-white flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: '#F9EA1B', borderBottomWidth: 3 }}>
          <div>
            <h3 className="font-display font-black uppercase text-lg" style={{ color: '#1e1e6e' }}>Tu carrito</h3>
            <p className="text-gray-400 text-xs">{cart.length} {cart.length === 1 ? 'producto' : 'productos'}</p>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
          {cart.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
              <ShoppingCart className="w-12 h-12 text-gray-200" />
              <p className="font-display font-bold uppercase text-sm text-gray-400">Tu carrito está vacío</p>
            </div>
          )}
          {cart.map(item => (
            <div key={item.cartId} className="flex items-start gap-3 bg-allboys-gray rounded-xl p-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: item.color + '20' }}>
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm leading-tight truncate" style={{ color: '#1e1e6e' }}>{item.nombre}</p>
                {item.talleSeleccionado !== 'Único' && (
                  <p className="text-xs text-gray-400">Talle: {item.talleSeleccionado}</p>
                )}
                <p className="font-display font-black text-sm mt-1" style={{ color: '#F9EA1B', filter: 'brightness(0.85)' }}>
                  {formatPrecio(item.precio * item.qty)}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button onClick={() => onRemove(item.cartId)} className="text-gray-300 hover:text-red-400 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => onQty(item.cartId, -1)} className="w-6 h-6 rounded-lg border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors">
                    <Minus className="w-3 h-3 text-gray-500" />
                  </button>
                  <span className="text-sm font-bold w-5 text-center" style={{ color: '#1e1e6e' }}>{item.qty}</span>
                  <button onClick={() => onQty(item.cartId, 1)} className="w-6 h-6 rounded-lg border border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors">
                    <Plus className="w-3 h-3 text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="font-display font-bold uppercase text-sm text-gray-500">Total</span>
              <span className="font-display font-black text-2xl" style={{ color: '#1e1e6e' }}>{formatPrecio(total)}</span>
            </div>
            <button
              className="w-full py-3 rounded-xl font-display font-bold uppercase tracking-wide text-sm text-white transition-all duration-200"
              style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DFD018'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F9EA1B'}
              onClick={onCheckout}
            >
              Ir a pagar
            </button>
            <p className="text-center text-xs text-gray-400 mt-3">El pago se coordina directamente con el club</p>
          </div>
        )}
      </div>
    </>
  )
}

export default function ShopPage() {
  const navigate = useNavigate()
  const [catActiva, setCatActiva] = useState('Todo')
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const handleCheckout = () => {
    setCartOpen(false)
    navigate('/checkout', { state: { cart } })
  }

  const productosFiltrados = catActiva === 'Todo'
    ? PRODUCTOS
    : PRODUCTOS.filter(p => p.categoria === catActiva)

  const totalItems = cart.reduce((acc, i) => acc + i.qty, 0)

  const handleAdd = (producto) => {
    setCart(prev => {
      const key = `${producto.id}-${producto.talleSeleccionado}`
      const existe = prev.find(i => i.cartId === key)
      if (existe) return prev.map(i => i.cartId === key ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...producto, cartId: key, qty: 1 }]
    })
  }

  const handleRemove = (cartId) => setCart(prev => prev.filter(i => i.cartId !== cartId))

  const handleQty = (cartId, delta) => setCart(prev =>
    prev.map(i => i.cartId === cartId ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
  )

  return (
    <div className="min-h-screen bg-allboys-gray">

      {/* Filtros + carrito sticky */}
      <div className="sticky top-16 z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Categorías */}
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {CATEGORIAS.map(cat => (
              <button
                key={cat}
                onClick={() => setCatActiva(cat)}
                className="shrink-0 px-4 py-1.5 rounded-full font-display font-bold uppercase text-xs tracking-wide transition-all duration-200"
                style={{
                  backgroundColor: catActiva === cat ? '#1e1e6e' : 'transparent',
                  color: catActiva === cat ? 'white' : '#1e1e6e80',
                  border: catActiva === cat ? '2px solid #1e1e6e' : '2px solid #e5e7eb',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Botón carrito */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center gap-2 px-4 py-2 rounded-xl font-display font-bold uppercase text-sm text-white transition-all duration-200 shrink-0"
            style={{ backgroundColor: '#1e1e6e' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F9EA1B'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e1e6e'}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs font-black flex items-center justify-center" style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-sm text-gray-400 mb-6">
          {productosFiltrados.length} {productosFiltrados.length === 1 ? 'producto' : 'productos'}
          {catActiva !== 'Todo' && ` en ${catActiva}`}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {productosFiltrados.map(producto => (
            <ProductCard key={producto.id} producto={producto} onAdd={handleAdd} />
          ))}
        </div>
      </div>

      {/* Info pedidos */}
      <div className="container mx-auto px-4 pb-16">
        <div className="rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center" style={{ background: 'linear-gradient(135deg, #1e1e6e 0%, #2d2d9e 100%)' }}>
          {[
            { emoji: '📦', titulo: 'Retiro en sede', texto: 'Hilario Lagos 435, Santa Rosa' },
            { emoji: '💳', titulo: 'Múltiples pagos', texto: 'Efectivo, transferencia o tarjeta' },
            { emoji: '📞', titulo: 'Consultas', texto: 'Por WhatsApp al +54 9 2954 592312' },
          ].map(({ emoji, titulo, texto }) => (
            <div key={titulo}>
              <div className="text-3xl mb-2">{emoji}</div>
              <p className="font-display font-bold uppercase text-sm text-white mb-1">{titulo}</p>
              <p className="text-white/60 text-xs">{texto}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cart drawer */}
      {cartOpen && (
        <CartDrawer cart={cart} onClose={() => setCartOpen(false)} onRemove={handleRemove} onQty={handleQty} onCheckout={handleCheckout} />
      )}
    </div>
  )
}
