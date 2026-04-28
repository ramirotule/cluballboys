import { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Copy, Building2, Smartphone, MapPin, ChevronRight, ChevronDown } from 'lucide-react'
import { useDatosBancarios } from '../context/DatosBancariosContext'

const MercadoPagoIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect width="48" height="48" rx="10" fill="#009EE3" />
    <path d="M8 24C8 15.163 15.163 8 24 8C32.837 8 40 15.163 40 24C40 32.837 32.837 40 24 40C15.163 40 8 32.837 8 24Z" fill="#009EE3" />
    <path d="M24 13C18.477 13 14 17.477 14 23C14 26.176 15.512 29.003 17.851 30.851L16 35L20.92 33.394C21.892 33.782 22.922 34 24 34C29.523 34 34 29.523 34 24C34 18.477 29.523 13 24 13Z" fill="white" />
    <path d="M19 22.5C19 21.672 19.672 21 20.5 21C21.328 21 22 21.672 22 22.5C22 23.328 21.328 24 20.5 24C19.672 24 19 23.328 19 22.5Z" fill="#009EE3" />
    <path d="M26 22.5C26 21.672 26.672 21 27.5 21C28.328 21 29 21.672 29 22.5C29 23.328 28.328 24 27.5 24C26.672 24 26 23.328 26 22.5Z" fill="#009EE3" />
    <path d="M19.5 26.5C20.5 28 22.1 29 24 29C25.9 29 27.5 28 28.5 26.5" stroke="#009EE3" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

function formatPrecio(n) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n)
}

const METODOS = [
  {
    id: 'transferencia',
    titulo: 'Transferencia bancaria',
    subtitulo: 'Acreditación en 24–48 hs hábiles',
    icon: <Building2 className="w-6 h-6" />,
    color: '#1e1e6e',
  },
  {
    id: 'mercadopago',
    titulo: 'MercadoPago',
    subtitulo: 'Pagá con tarjeta, débito o saldo MP',
    icon: <MercadoPagoIcon />,
    color: '#009EE3',
  },
  {
    id: 'efectivo',
    titulo: 'Efectivo en ventanilla',
    subtitulo: 'Pagá presencialmente en la sede',
    icon: <MapPin className="w-6 h-6" />,
    color: '#22c55e',
  },
]

function Copiable({ label, value }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="flex items-center justify-between bg-allboys-gray rounded-xl px-4 py-3 gap-3">
      <div className="min-w-0">
        <p className="text-xs font-display font-bold uppercase tracking-widest text-gray-400">{label}</p>
        <p className="font-bold text-xs sm:text-sm mt-0.5 break-all" style={{ color: '#1e1e6e' }}>{value}</p>
      </div>
      <button
        onClick={copy}
        className="flex items-center gap-1.5 text-xs font-bold font-display uppercase px-3 py-1.5 rounded-lg transition-all duration-200"
        style={{ backgroundColor: copied ? '#22c55e' : '#1e1e6e', color: 'white' }}
      >
        <Copy className="w-3.5 h-3.5" />
        {copied ? 'Copiado' : 'Copiar'}
      </button>
    </div>
  )
}

function DetalleTransferencia({ total }) {
  const { datos } = useDatosBancarios()
  return (
    <div className="flex flex-col gap-3 mt-4">
      <p className="text-sm text-gray-500 leading-relaxed">
        Realizá la transferencia por el monto exacto y envianos el comprobante por WhatsApp para confirmar tu pedido.
      </p>
      <Copiable label="Titular" value={datos.titular} />
      <Copiable label="CBU"     value={datos.cbu}     />
      <Copiable label="Alias"   value={datos.alias}   />
      <Copiable label="CUIT"    value={datos.cuit}    />
      <Copiable label="Banco"   value={datos.banco}   />
      <Copiable label="N° de cuenta" value={datos.cuenta} />
      <div className="rounded-xl px-4 py-3 text-sm" style={{ backgroundColor: '#F9EA1B20', borderLeft: '3px solid #F9EA1B' }}>
        <p className="font-bold" style={{ color: '#1e1e6e' }}>Importe a transferir: <span style={{ color: '#DFD018' }}>{formatPrecio(total)}</span></p>
      </div>
      <a
        href="https://wa.me/5492954592312"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-display font-bold uppercase text-sm text-white transition-all duration-200"
        style={{ backgroundColor: '#25D366' }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1da851'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#25D366'}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Enviar comprobante por WhatsApp
      </a>
    </div>
  )
}

function DetalleMercadoPago({ total }) {
  const [clicked, setClicked] = useState(false)
  return (
    <div className="flex flex-col gap-4 mt-4">
      <p className="text-sm text-gray-500 leading-relaxed">
        Serás redirigido a MercadoPago para completar el pago de forma segura con tu tarjeta, débito o saldo disponible.
      </p>
      <div className="flex gap-3 flex-wrap">
        {['Visa', 'Mastercard', 'Débito', 'Saldo MP'].map(m => (
          <span key={m} className="text-xs font-display font-bold uppercase px-3 py-1 rounded-full border border-gray-200 text-gray-500">{m}</span>
        ))}
      </div>

      {/* Cuotas Banco La Pampa */}
      <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: '#1e1e6e08', border: '1.5px solid #1e1e6e20' }}>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-lg" style={{ backgroundColor: '#1e1e6e15' }}>
          🏦
        </div>
        <div>
          <p className="text-xs font-display font-bold uppercase tracking-widest" style={{ color: '#1e1e6e' }}>
            Hasta 4 cuotas sin interés
          </p>
          <p className="text-xs text-gray-400 mt-0.5">Con tarjetas de crédito del Banco de La Pampa</p>
        </div>
      </div>
      <div className="rounded-xl px-4 py-3 text-sm" style={{ backgroundColor: '#009EE310', borderLeft: '3px solid #009EE3' }}>
        <p className="font-bold" style={{ color: '#1e1e6e' }}>Total a pagar: <span style={{ color: '#009EE3' }}>{formatPrecio(total)}</span></p>
      </div>
      <button
        onClick={() => setClicked(true)}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-display font-bold uppercase text-sm text-white transition-all duration-200"
        style={{ backgroundColor: clicked ? '#22c55e' : '#009EE3' }}
        onMouseEnter={e => { if (!clicked) e.currentTarget.style.backgroundColor = '#007bb5' }}
        onMouseLeave={e => { if (!clicked) e.currentTarget.style.backgroundColor = '#009EE3' }}
      >
        {clicked
          ? <><CheckCircle className="w-4 h-4" /> Redirigiendo a MercadoPago...</>
          : <><Smartphone className="w-4 h-4" /> Pagar con MercadoPago</>
        }
      </button>
      <p className="text-xs text-center text-gray-400">Pago 100% seguro · Encriptado SSL</p>
    </div>
  )
}

function DetalleEfectivo() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <p className="text-sm text-gray-500 leading-relaxed">
        Acercate a nuestra sede y abonás en ventanilla. Una vez confirmado el pago, retirás tu pedido en el momento.
      </p>
      <div className="rounded-xl overflow-hidden border border-gray-100">
        <div className="p-4 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
            <div>
              <p className="font-bold text-sm" style={{ color: '#1e1e6e' }}>Hilario Lagos 435</p>
              <p className="text-xs text-gray-400">Santa Rosa, La Pampa</p>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-3">
            <p className="text-xs font-display font-bold uppercase tracking-widest text-gray-400 mb-2">Horarios de atención</p>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Lunes a Viernes</span>
                <span className="font-bold" style={{ color: '#1e1e6e' }}>8:00 – 21:00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Sábados</span>
                <span className="font-bold" style={{ color: '#1e1e6e' }}>9:00 – 13:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://maps.google.com/?q=Hilario+Lagos+435,+Santa+Rosa,+La+Pampa"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-display font-bold uppercase text-sm transition-all duration-200 border-2"
        style={{ borderColor: '#22c55e', color: '#22c55e' }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#22c55e'; e.currentTarget.style.color = 'white' }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#22c55e' }}
      >
        <MapPin className="w-4 h-4" /> Ver en Google Maps
      </a>
    </div>
  )
}

export default function CheckoutPage() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const [metodo, setMetodo] = useState(null)
  const [confirmado, setConfirmado] = useState(false)

  const cart = state?.cart || []
  const total = cart.reduce((acc, i) => acc + i.precio * i.qty, 0)

  if (cart.length === 0) return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <p className="text-gray-400 font-display uppercase">No hay productos en el carrito</p>
      <Link to="/shop" className="btn-primary">Ir al Shop</Link>
    </div>
  )

  if (confirmado) return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(135deg, #1e1e6e 0%, #2d2d9e 100%)' }}>
      <div className="bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-2xl" style={{ borderTop: '4px solid #F9EA1B' }}>
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: '#22c55e20' }}>
          <CheckCircle className="w-10 h-10" style={{ color: '#22c55e' }} />
        </div>
        <img src="/logo.png" alt="All Boys" className="h-14 w-auto mx-auto mb-4" />
        <h2 className="font-display font-black uppercase text-2xl mb-2" style={{ color: '#1e1e6e' }}>¡Pedido confirmado!</h2>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          Gracias por tu compra. Te contactaremos a la brevedad para coordinar la entrega.
        </p>
        <Link to="/shop" className="btn-primary block w-full text-center">Seguir comprando</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-allboys-gray">

      {/* Header */}
      <div className="relative overflow-hidden py-14" style={{ background: 'linear-gradient(135deg, #1e1e6e 0%, #2d2d9e 50%, #1a1a5e 100%)' }}>
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-8 bg-[#F9EA1B]" style={{ left: `${i * 5.5}%` }} />
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-display uppercase tracking-wide mb-6">
            <ArrowLeft className="w-4 h-4" /> Volver al carrito
          </button>
          <p className="text-[#F9EA1B] text-sm font-display uppercase tracking-widest mb-1">Club All Boys</p>
          <h1 className="text-white font-display font-black text-4xl sm:text-5xl uppercase tracking-tight">Checkout</h1>
          <div className="w-16 h-1 bg-[#F9EA1B] rounded-full mt-4" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Selección de método */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div>
              <h2 className="font-display font-black uppercase text-xl mb-5" style={{ color: '#1e1e6e' }}>
                Elegí cómo pagar
              </h2>

              <div className="flex flex-col gap-3">
                {METODOS.map(m => {
                  const activo = metodo === m.id
                  return (
                    <div key={m.id} className="rounded-2xl border-2 overflow-hidden transition-all duration-200 cursor-pointer" style={{ borderColor: activo ? m.color : '#e5e7eb', backgroundColor: 'white' }}>
                      <button
                        onClick={() => setMetodo(activo ? null : m.id)}
                        className="w-full flex items-center gap-4 p-5 text-left"
                      >
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: m.color + '15', color: m.color }}>
                          {m.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-display font-bold uppercase text-sm" style={{ color: '#1e1e6e' }}>{m.titulo}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{m.subtitulo}</p>
                        </div>
                        <div className="shrink-0" style={{ color: activo ? m.color : '#d1d5db' }}>
                          {activo ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                        </div>
                      </button>

                      {/* Detalle expandible */}
                      {activo && (
                        <div className="px-5 pb-5 border-t border-gray-100">
                          {m.id === 'transferencia' && <DetalleTransferencia total={total} />}
                          {m.id === 'mercadopago' && <DetalleMercadoPago total={total} />}
                          {m.id === 'efectivo' && <DetalleEfectivo />}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {metodo && (
              <button
                onClick={() => setConfirmado(true)}
                className="w-full py-3.5 rounded-xl font-display font-bold uppercase tracking-wide text-sm transition-all duration-200"
                style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DFD018'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F9EA1B'}
              >
                Confirmar pedido
              </button>
            )}
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24" style={{ borderTop: '3px solid #F9EA1B' }}>
              <h2 className="font-display font-black uppercase text-base mb-5" style={{ color: '#1e1e6e' }}>
                Resumen del pedido
              </h2>

              <div className="flex flex-col gap-3 mb-5">
                {cart.map(item => (
                  <div key={item.cartId} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0" style={{ backgroundColor: item.color + '15' }}>
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate" style={{ color: '#1e1e6e' }}>{item.nombre}</p>
                      {item.talleSeleccionado !== 'Único' && (
                        <p className="text-xs text-gray-400">Talle {item.talleSeleccionado} · x{item.qty}</p>
                      )}
                      {item.talleSeleccionado === 'Único' && (
                        <p className="text-xs text-gray-400">x{item.qty}</p>
                      )}
                    </div>
                    <p className="text-sm font-bold shrink-0" style={{ color: '#1e1e6e' }}>
                      {formatPrecio(item.precio * item.qty)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <span className="font-display font-bold uppercase text-sm text-gray-500">Total</span>
                <span className="font-display font-black text-2xl" style={{ color: '#1e1e6e' }}>{formatPrecio(total)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
