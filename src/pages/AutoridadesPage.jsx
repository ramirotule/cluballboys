import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

const mesaDirectiva = [
  { cargo: 'Presidente', nombre: 'José Luis Roston', iniciales: 'JR' },
  { cargo: 'Vicepresidente 1°', nombre: 'Nicolás Altolaguirre', iniciales: 'NA' },
  { cargo: 'Vicepresidente 2°', nombre: 'Arturo Fazzini', iniciales: 'AF' },
  { cargo: 'Vicepresidente 3°', nombre: 'Fernando Gordillo', iniciales: 'FG' },
  { cargo: 'Secretario', nombre: 'Santiago Requejo', iniciales: 'SR' },
  { cargo: 'Prosecretario', nombre: 'Mariano Salomón', iniciales: 'MS' },
  { cargo: 'Tesorera', nombre: 'Silvia Naval', iniciales: 'SN' },
  { cargo: 'Protesorero', nombre: 'Juan Tueros', iniciales: 'JT' },
]

const vocalesTitulares = [
  { cargo: 'Vocal Titular', nombre: 'Jorge Rodríguez', iniciales: 'JR' },
  { cargo: 'Vocal Titular', nombre: 'Fabián Tueros', iniciales: 'FT' },
  { cargo: 'Vocal Titular', nombre: 'Aníbal Bertón', iniciales: 'AB' },
  { cargo: 'Vocal Titular', nombre: 'Juan Saffeni', iniciales: 'JS' },
]

const vocalesSuplentes = [
  { cargo: 'Vocal Suplente', nombre: 'Gustavo Dubie', iniciales: 'GD' },
  { cargo: 'Vocal Suplente', nombre: 'Gabriel Perazzi', iniciales: 'GP' },
]

const comisionRevisora = [
  { cargo: 'Comisión Revisora', nombre: 'Guido Regazzoli', iniciales: 'GR' },
  { cargo: 'Comisión Revisora', nombre: 'Ángel Yorgovan', iniciales: 'AY' },
]

export default function AutoridadesPage() {
  return (
    <div className="min-h-screen bg-white">

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
            Autoridades
          </h1>
          <div className="w-20 h-1 bg-[#F9EA1B] rounded-full mx-auto mb-6" />
          <p className="text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Comisión Directiva <strong className="text-white">período 2024–2026</strong>. Las personas que conducen el club con dedicación y compromiso hacia toda la comunidad.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">

        {/* Mesa Directiva */}
        <div className="mb-4">
          <p className="text-sm font-display uppercase tracking-widest mb-1" style={{ color: '#2E2DA870' }}>Conducción</p>
          <h2 className="font-display font-black uppercase text-2xl mb-8" style={{ color: '#2E2DA8' }}>Mesa Directiva</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {mesaDirectiva.map((a) => (
            <div
              key={a.cargo + a.nombre}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 flex items-center gap-5"
              style={{ borderTop: '3px solid #F9EA1B' }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 font-display font-black text-base text-white shadow-md"
                style={{ background: 'linear-gradient(135deg, #2d2d9e, #1e1e6e)' }}
              >
                {a.iniciales}
              </div>
              <div>
                <p className="text-xs font-display font-bold uppercase tracking-widest mb-0.5" style={{ color: '#DFD018' }}>
                  {a.cargo}
                </p>
                <p className="font-bold text-base" style={{ color: '#2E2DA8' }}>
                  {a.nombre}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vocales Titulares */}
        <GroupSection label="Integrantes" title="Vocales Titulares" members={vocalesTitulares} />

        {/* Vocales Suplentes */}
        <GroupSection label="" title="Vocales Suplentes" members={vocalesSuplentes} />

        {/* Comisión Revisora */}
        <GroupSection label="" title="Comisión Revisora" members={comisionRevisora} />

        {/* CTA contacto */}
        <div
          className="mt-16 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6"
          style={{ background: 'linear-gradient(135deg, #1e1e6e 0%, #2d2d9e 100%)' }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#F9EA1B' }}
          >
            <Mail className="w-6 h-6" style={{ color: '#1e1e6e' }} />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-display font-bold uppercase text-white text-lg mb-1">
              ¿Querés comunicarte con la comisión?
            </h3>
            <p className="text-white/60 text-sm">Escribinos directamente al correo institucional.</p>
          </div>
          <Link to="/contacto" className="btn-primary shrink-0 sm:ml-auto">
            Contactar
          </Link>
        </div>
      </div>
    </div>
  )
}

function GroupSection({ label, title, members }) {
  return (
    <div className="mb-10">
      {label && (
        <p className="text-sm font-display uppercase tracking-widest mb-1" style={{ color: '#2E2DA870' }}>{label}</p>
      )}
      <h2 className="font-display font-black uppercase text-2xl mb-6" style={{ color: '#2E2DA8' }}>{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((a) => (
          <div
            key={a.nombre}
            className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#F9EA1B] hover:shadow-sm transition-all duration-200 flex items-center gap-4"
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-display font-bold text-sm text-white"
              style={{ backgroundColor: '#2E2DA8' }}
            >
              {a.iniciales}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-display font-bold uppercase tracking-wide mb-0.5 truncate" style={{ color: '#2E2DA880' }}>
                {a.cargo}
              </p>
              <p className="font-semibold text-sm truncate" style={{ color: '#2E2DA8' }}>
                {a.nombre}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
