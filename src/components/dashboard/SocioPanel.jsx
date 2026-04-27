import { useRef } from 'react'
import { useAuth } from '../../context/AuthContext'
import { User, Activity, CreditCard, IdCard, Download, Printer, CheckCircle, Clock, AlertCircle } from 'lucide-react'

const SECTIONS = [
  { id: 'datos', label: 'Mis Datos', icon: User },
  { id: 'actividades', label: 'Mis Actividades', icon: Activity },
  { id: 'cuotas', label: 'Estado de Cuotas', icon: CreditCard },
  { id: 'carnet', label: 'Mi Carnet', icon: IdCard },
]

function MisDatos({ user }) {
  const campos = [
    { label: 'Nombre completo', value: user.nombre },
    { label: 'N° de Socio', value: user.nroSocio },
    { label: 'DNI', value: user.dni },
    { label: 'Email', value: user.email },
    { label: 'Teléfono', value: user.telefono },
    { label: 'Dirección', value: user.direccion },
    { label: 'Fecha de alta', value: user.fechaAlta },
  ]
  return (
    <div>
      <h2 className="font-display font-black uppercase text-2xl mb-6" style={{ color: '#1e1e6e' }}>Mis Datos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {campos.map(({ label, value }) => (
          <div key={label} className="bg-allboys-gray rounded-xl p-4 border border-gray-100">
            <p className="text-xs font-display font-bold uppercase tracking-widest mb-1" style={{ color: '#1e1e6e70' }}>{label}</p>
            <p className="font-semibold text-sm" style={{ color: '#1e1e6e' }}>{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MisActividades({ user }) {
  const todas = ['Fútbol', 'Básquet', 'Gimnasia Artística', 'Softbol', 'Pelota Paleta', 'Natación']
  return (
    <div>
      <h2 className="font-display font-black uppercase text-2xl mb-6" style={{ color: '#1e1e6e' }}>Mis Actividades</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {todas.map(act => {
          const activo = user.actividades.includes(act)
          return (
            <div
              key={act}
              className="rounded-xl p-5 border-2 flex items-center gap-3 transition-all"
              style={{
                borderColor: activo ? '#1e1e6e' : '#e5e7eb',
                backgroundColor: activo ? '#1e1e6e08' : 'white',
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: activo ? '#1e1e6e' : '#e5e7eb' }}
              >
                {activo
                  ? <CheckCircle className="w-4 h-4 text-white" />
                  : <span className="w-2 h-2 rounded-full bg-gray-400 block" />
                }
              </div>
              <div>
                <p className="font-display font-bold text-sm uppercase" style={{ color: activo ? '#1e1e6e' : '#9ca3af' }}>
                  {act}
                </p>
                <p className="text-xs" style={{ color: activo ? '#F9EA1B' : '#9ca3af' }}>
                  {activo ? 'Inscripto' : 'No inscripto'}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function EstadoCuotas({ user }) {
  const pagadas = user.cuotas.filter(c => c.estado === 'pagada').length
  return (
    <div>
      <h2 className="font-display font-black uppercase text-2xl mb-2" style={{ color: '#1e1e6e' }}>Estado de Cuotas</h2>
      <p className="text-gray-400 text-sm mb-6">{new Date().getFullYear()} · {pagadas}/12 cuotas abonadas</p>

      {/* Barra de progreso */}
      <div className="bg-gray-100 rounded-full h-3 mb-8 overflow-hidden">
        <div
          className="h-3 rounded-full transition-all duration-500"
          style={{ width: `${(pagadas / 12) * 100}%`, backgroundColor: '#F9EA1B' }}
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {user.cuotas.map(({ mes, estado, fecha }) => (
          <div
            key={mes}
            className="rounded-xl p-4 border text-center"
            style={{
              borderColor: estado === 'pagada' ? '#22c55e30' : '#e5e7eb',
              backgroundColor: estado === 'pagada' ? '#22c55e08' : 'white',
            }}
          >
            <div className="flex justify-center mb-2">
              {estado === 'pagada'
                ? <CheckCircle className="w-5 h-5" style={{ color: '#22c55e' }} />
                : <Clock className="w-5 h-5 text-gray-300" />
              }
            </div>
            <p className="font-display font-bold uppercase text-xs" style={{ color: estado === 'pagada' ? '#1e1e6e' : '#9ca3af' }}>
              {mes}
            </p>
            {fecha && <p className="text-xs text-gray-400 mt-0.5">{fecha}</p>}
            {!fecha && <p className="text-xs mt-0.5" style={{ color: '#F9EA1B' }}>Pendiente</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

function MiCarnet({ user }) {
  const carnetRef = useRef()

  const handlePrint = () => {
    const contenido = carnetRef.current.innerHTML
    const ventana = window.open('', '_blank')
    ventana.document.write(`
      <html><head><title>Carnet - All Boys</title>
      <style>
        body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f3f4f6; font-family: Arial, sans-serif; }
        .carnet { width: 340px; border-radius: 16px; overflow: hidden; box-shadow: 0 8px 32px rgba(30,30,110,0.18); }
      </style></head>
      <body><div class="carnet">${contenido}</div></body></html>
    `)
    ventana.document.close()
    ventana.focus()
    setTimeout(() => { ventana.print(); ventana.close() }, 300)
  }

  return (
    <div>
      <h2 className="font-display font-black uppercase text-2xl mb-6" style={{ color: '#1e1e6e' }}>Mi Carnet</h2>

      {/* Carnet preview */}
      <div className="flex justify-center mb-8">
        <div ref={carnetRef} className="w-80 rounded-2xl overflow-hidden shadow-2xl select-none">
          {/* Header del carnet */}
          <div
            className="px-5 py-4 flex items-center gap-3"
            style={{ background: 'linear-gradient(135deg, #1e1e6e 0%, #2d2d9e 100%)' }}
          >
            <img src="/logo.png" alt="All Boys" className="h-10 w-auto" />
            <div>
              <p className="text-white font-display font-black uppercase text-sm tracking-widest leading-tight">All Boys</p>
              <p className="text-xs tracking-wide" style={{ color: '#F9EA1B' }}>Santa Rosa · La Pampa</p>
            </div>
            <span
              className="ml-auto text-xs font-display font-bold uppercase px-2 py-0.5 rounded"
              style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}
            >
              Socio
            </span>
          </div>

          {/* Cuerpo */}
          <div className="bg-white px-5 py-4">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-display font-black text-2xl text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #2d2d9e, #1e1e6e)' }}
              >
                {user.nombre.split(' ').map(n => n[0]).slice(0,2).join('')}
              </div>
              <div>
                <p className="font-bold text-sm leading-tight" style={{ color: '#1e1e6e' }}>{user.nombre}</p>
                <p className="text-xs text-gray-400 mt-0.5">DNI: {user.dni}</p>
                <p className="text-xs text-gray-400">Alta: {user.fechaAlta}</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-display">N° Socio</p>
                <p className="font-display font-black text-xl" style={{ color: '#1e1e6e' }}>#{user.nroSocio}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-display">Vigencia</p>
                <p className="font-bold text-sm" style={{ color: '#1e1e6e' }}>2026</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-2 text-center" style={{ backgroundColor: '#F9EA1B' }}>
            <p className="text-xs font-display font-bold uppercase tracking-widest" style={{ color: '#1e1e6e' }}>
              Club Atlético All Boys
            </p>
          </div>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-display font-bold uppercase text-sm transition-all duration-200"
          style={{ backgroundColor: '#1e1e6e', color: 'white' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2d2d9e'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e1e6e'}
        >
          <Printer className="w-4 h-4" /> Imprimir carnet
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-display font-bold uppercase text-sm border-2 transition-all duration-200"
          style={{ borderColor: '#1e1e6e', color: '#1e1e6e' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1e1e6e'; e.currentTarget.style.color = 'white' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1e1e6e' }}
        >
          <Download className="w-4 h-4" /> Descargar PDF
        </button>
      </div>
    </div>
  )
}

export default function SocioPanel({ section }) {
  const { user } = useAuth()
  return (
    <div>
      {section === 'datos' && <MisDatos user={user} />}
      {section === 'actividades' && <MisActividades user={user} />}
      {section === 'cuotas' && <EstadoCuotas user={user} />}
      {section === 'carnet' && <MiCarnet user={user} />}
    </div>
  )
}

export { SECTIONS }
