import { useState } from 'react'
import { Calendar, Trophy, BarChart2, Target, Clock } from 'lucide-react'
import { useLigas } from '../context/LigasContext'

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function formatFecha(dateStr) {
  const [y, m, d] = dateStr.split('-')
  return `${d}/${m}/${y}`
}

function ResultBadge({ gl, gv }) {
  if (gl > gv) return <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">V</span>
  if (gl < gv) return <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-100 text-red-700">D</span>
  return <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">E</span>
}

// ─── SECCIÓN: PRÓXIMOS PARTIDOS ───────────────────────────────────────────────

function ProximosPartidos({ partidos }) {
  return (
    <div className="space-y-3">
      {partidos.map((p, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-500 min-w-[130px]">
            <Calendar className="w-4 h-4 flex-shrink-0" style={{ color: '#2E2DA8' }} />
            <span>{formatFecha(p.fecha)}</span>
            <Clock className="w-4 h-4 flex-shrink-0 ml-1" style={{ color: '#2E2DA8' }} />
            <span>{p.hora}</span>
          </div>
          <div className="flex-1 flex items-center justify-center gap-3 font-display font-bold text-base sm:text-lg" style={{ color: '#302782' }}>
            <span className={`text-right flex-1 ${p.local === 'All Boys' ? 'underline decoration-yellow-400 decoration-2' : ''}`}>{p.local}</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-500 flex-shrink-0">vs</span>
            <span className={`text-left flex-1 ${p.visitante === 'All Boys' ? 'underline decoration-yellow-400 decoration-2' : ''}`}>{p.visitante}</span>
          </div>
          <div className="text-xs text-gray-400 text-center sm:text-right min-w-[120px]">
            {p.cancha}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── SECCIÓN: RESULTADOS ──────────────────────────────────────────────────────

function Resultados({ resultados }) {
  return (
    <div className="space-y-3">
      {resultados.map((r, i) => {
        const esLocal = r.local === 'All Boys'
        const gl = esLocal ? r.gLocal : r.gVisitante
        const gv = esLocal ? r.gVisitante : r.gLocal
        return (
          <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
            <span className="text-xs text-gray-400 min-w-[75px]">{formatFecha(r.fecha)}</span>
            <div className="flex-1 flex items-center justify-center gap-3 font-display font-bold text-base sm:text-lg" style={{ color: '#302782' }}>
              <span className={`text-right flex-1 ${r.local === 'All Boys' ? 'underline decoration-yellow-400 decoration-2' : ''}`}>{r.local}</span>
              <span className="text-lg font-extrabold px-4 py-1 rounded-lg bg-gray-900 text-white flex-shrink-0 tabular-nums">
                {r.gLocal} - {r.gVisitante}
              </span>
              <span className={`text-left flex-1 ${r.visitante === 'All Boys' ? 'underline decoration-yellow-400 decoration-2' : ''}`}>{r.visitante}</span>
            </div>
            <ResultBadge gl={gl} gv={gv} />
          </div>
        )
      })}
    </div>
  )
}

// ─── SECCIÓN: TABLA DE POSICIONES (FÚTBOL) ───────────────────────────────────

function TablaFutbol({ tabla }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: '#302782' }}>
            <th className="px-3 py-3 text-left">#</th>
            <th className="px-3 py-3 text-left">Equipo</th>
            <th className="px-3 py-3 text-center">PJ</th>
            <th className="px-3 py-3 text-center">PG</th>
            <th className="px-3 py-3 text-center">PE</th>
            <th className="px-3 py-3 text-center">PP</th>
            <th className="px-3 py-3 text-center">GF</th>
            <th className="px-3 py-3 text-center">GC</th>
            <th className="px-3 py-3 text-center">DG</th>
            <th className="px-3 py-3 text-center font-extrabold">PTS</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((row, i) => {
            const esAllBoys = row.equipo === 'All Boys'
            return (
              <tr
                key={row.id ?? i}
                className={`border-t border-gray-100 transition-colors ${esAllBoys ? 'bg-yellow-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="px-3 py-3 font-bold text-gray-500">{i + 1}</td>
                <td className="px-3 py-3 font-display font-bold" style={{ color: '#302782' }}>
                  {row.equipo}
                  {esAllBoys && <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full font-bold" style={{ backgroundColor: '#F9EA1B', color: '#302782' }}>●</span>}
                </td>
                <td className="px-3 py-3 text-center text-gray-600">{row.pj}</td>
                <td className="px-3 py-3 text-center text-green-600 font-semibold">{row.pg}</td>
                <td className="px-3 py-3 text-center text-gray-500">{row.pe}</td>
                <td className="px-3 py-3 text-center text-red-500">{row.pp}</td>
                <td className="px-3 py-3 text-center text-gray-600">{row.gf}</td>
                <td className="px-3 py-3 text-center text-gray-600">{row.gc}</td>
                <td className="px-3 py-3 text-center text-gray-600">{row.gf - row.gc > 0 ? `+${row.gf - row.gc}` : row.gf - row.gc}</td>
                <td className="px-3 py-3 text-center font-extrabold text-lg" style={{ color: '#302782' }}>{row.pts}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

// ─── SECCIÓN: TABLA DE POSICIONES (BÁSQUET) ──────────────────────────────────

function TablaBasket({ tabla }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: '#302782' }}>
            <th className="px-3 py-3 text-left">#</th>
            <th className="px-3 py-3 text-left">Equipo</th>
            <th className="px-3 py-3 text-center">PJ</th>
            <th className="px-3 py-3 text-center">PG</th>
            <th className="px-3 py-3 text-center">PP</th>
            <th className="px-3 py-3 text-center">PF</th>
            <th className="px-3 py-3 text-center">PC</th>
            <th className="px-3 py-3 text-center font-extrabold">PTS</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((row, i) => {
            const esAllBoys = row.equipo === 'All Boys'
            return (
              <tr
                key={row.id ?? i}
                className={`border-t border-gray-100 transition-colors ${esAllBoys ? 'bg-yellow-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="px-3 py-3 font-bold text-gray-500">{i + 1}</td>
                <td className="px-3 py-3 font-display font-bold" style={{ color: '#302782' }}>
                  {row.equipo}
                  {esAllBoys && <span className="ml-2 text-xs px-1.5 py-0.5 rounded-full font-bold" style={{ backgroundColor: '#F9EA1B', color: '#302782' }}>●</span>}
                </td>
                <td className="px-3 py-3 text-center text-gray-600">{row.pj}</td>
                <td className="px-3 py-3 text-center text-green-600 font-semibold">{row.pg}</td>
                <td className="px-3 py-3 text-center text-red-500">{row.pp}</td>
                <td className="px-3 py-3 text-center text-gray-600">{row.pf}</td>
                <td className="px-3 py-3 text-center text-gray-600">{row.pc}</td>
                <td className="px-3 py-3 text-center font-extrabold text-lg" style={{ color: '#302782' }}>{row.pts}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

// ─── SECCIÓN: GOLEADORES ─────────────────────────────────────────────────────

function Goleadores({ goleadores }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: '#302782' }}>
            <th className="px-3 py-3 text-left">#</th>
            <th className="px-3 py-3 text-left">Jugador</th>
            <th className="px-3 py-3 text-left">Equipo</th>
            <th className="px-3 py-3 text-center">Goles</th>
          </tr>
        </thead>
        <tbody>
          {goleadores.map((g, i) => {
            const pos = i + 1
            const esAllBoys = g.equipo === 'All Boys'
            return (
              <tr
                key={g.id ?? i}
                className={`border-t border-gray-100 transition-colors ${esAllBoys ? 'bg-yellow-50' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="px-3 py-3 font-bold text-gray-500">
                  {pos === 1 && <span>🥇</span>}
                  {pos === 2 && <span>🥈</span>}
                  {pos === 3 && <span>🥉</span>}
                  {pos > 3 && pos}
                </td>
                <td className="px-3 py-3 font-display font-bold" style={{ color: '#302782' }}>{g.nombre}</td>
                <td className="px-3 py-3 text-gray-500">{g.equipo}</td>
                <td className="px-3 py-3 text-center">
                  <span className="font-extrabold text-base" style={{ color: '#302782' }}>{g.goles}</span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

// ─── TABS INTERNOS ────────────────────────────────────────────────────────────

const SPORT_TABS_FUTBOL = [
  { id: 'proximos', label: 'Próximos', icon: Calendar },
  { id: 'resultados', label: 'Resultados', icon: Trophy },
  { id: 'tabla', label: 'Posiciones', icon: BarChart2 },
  { id: 'goleadores', label: 'Goleadores', icon: Target },
]

const SPORT_TABS_BASKET = [
  { id: 'proximos', label: 'Próximos', icon: Calendar },
  { id: 'resultados', label: 'Resultados', icon: Trophy },
  { id: 'tabla', label: 'Posiciones', icon: BarChart2 },
]

function SportView({ sport, data }) {
  const isFutbol = sport === 'futbol'
  const tabs = isFutbol ? SPORT_TABS_FUTBOL : SPORT_TABS_BASKET
  const [activeTab, setActiveTab] = useState('proximos')

  return (
    <div>
      {/* Tabs internos */}
      <div className="flex gap-2 flex-wrap mb-6">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-display font-semibold text-sm transition-all duration-200"
              style={{
                backgroundColor: isActive ? '#302782' : '#F3F4F6',
                color: isActive ? 'white' : '#302782',
              }}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          )
        })}
      </div>

      {/* Contenido */}
      {activeTab === 'proximos' && <ProximosPartidos partidos={[...(data.proximosPartidos || [])].sort((a,b) => a.fecha.localeCompare(b.fecha))} />}
      {activeTab === 'resultados' && <Resultados resultados={[...(data.resultados || [])].sort((a,b) => b.fecha.localeCompare(a.fecha))} />}
      {activeTab === 'tabla' && isFutbol && <TablaFutbol tabla={[...(data.tabla || [])].sort((a,b) => b.pts - a.pts)} />}
      {activeTab === 'tabla' && !isFutbol && <TablaBasket tabla={[...(data.tabla || [])].sort((a,b) => b.pts - a.pts)} />}
      {activeTab === 'goleadores' && isFutbol && <Goleadores goleadores={[...(data.goleadores || [])].sort((a,b) => b.goles - a.goles)} />}
    </div>
  )
}

// ─── PAGE PRINCIPAL ───────────────────────────────────────────────────────────

const SPORTS = [
  { id: 'futbol', label: 'Fútbol', emoji: '⚽' },
  { id: 'basket', label: 'Básquet', emoji: '🏀' },
]

export default function LigasPage() {
  const { futbol, basket } = useLigas()
  const [activeSport, setActiveSport] = useState('futbol')

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F3F4F6' }}>
      {/* Header */}
      <div className="py-10 px-4" style={{ background: 'linear-gradient(135deg, #302782 0%, #1a1660 100%)' }}>
        <div className="container mx-auto">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-widest text-white mb-1">
            Ligas
          </h1>
          <p className="text-sm font-medium" style={{ color: '#F9EA1B' }}>
            Seguí los torneos del Club All Boys
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Selector de deporte */}
        <div className="flex gap-3 mb-8">
          {SPORTS.map(({ id, label, emoji }) => {
            const isActive = activeSport === id
            return (
              <button
                key={id}
                onClick={() => setActiveSport(id)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-base transition-all duration-200 shadow-sm"
                style={{
                  backgroundColor: isActive ? '#F9EA1B' : 'white',
                  color: '#302782',
                  border: isActive ? '2px solid #302782' : '2px solid transparent',
                  boxShadow: isActive ? '0 4px 12px #F9EA1B66' : '0 1px 4px #00000015',
                }}
              >
                <span className="text-xl">{emoji}</span>
                {label}
              </button>
            )
          })}
        </div>

        {/* Vista del deporte seleccionado */}
        <SportView key={activeSport} sport={activeSport} data={activeSport === 'futbol' ? futbol : basket} />
      </div>
    </div>
  )
}
