import { useState } from 'react'
import { Plus, Pencil, Trash2, X, Save, CheckCircle, Calendar, Trophy, BarChart2, Target } from 'lucide-react'
import { useLigas } from '../../context/LigasContext'

// ─── CONSTANTES ───────────────────────────────────────────────────────────────

const SPORTS = [
  { id: 'futbol', label: 'Fútbol', emoji: '⚽' },
  { id: 'basket', label: 'Básquet', emoji: '🏀' },
]

const SECTIONS_FUTBOL = [
  { id: 'proximosPartidos', label: 'Próximos', icon: Calendar },
  { id: 'resultados', label: 'Resultados', icon: Trophy },
  { id: 'tabla', label: 'Posiciones', icon: BarChart2 },
  { id: 'goleadores', label: 'Goleadores', icon: Target },
]

const SECTIONS_BASKET = [
  { id: 'proximosPartidos', label: 'Próximos', icon: Calendar },
  { id: 'resultados', label: 'Resultados', icon: Trophy },
  { id: 'tabla', label: 'Posiciones', icon: BarChart2 },
]

const EMPTY_FORMS = {
  proximosPartidos: { fecha: '', hora: '', local: 'All Boys', visitante: '', cancha: '' },
  resultados:       { fecha: '', local: 'All Boys', gLocal: '', gVisitante: '', visitante: '' },
  tabla_futbol:     { equipo: '', pj: '', pg: '', pe: '', pp: '', gf: '', gc: '', pts: '' },
  tabla_basket:     { equipo: '', pj: '', pg: '', pp: '', pf: '', pc: '', pts: '' },
  goleadores:       { nombre: '', equipo: 'All Boys', goles: '' },
}

function getEmptyForm(sport, section) {
  if (section === 'tabla') return sport === 'futbol' ? EMPTY_FORMS.tabla_futbol : EMPTY_FORMS.tabla_basket
  return EMPTY_FORMS[section]
}

function formatFecha(d) {
  if (!d) return ''
  const [y, m, day] = d.split('-')
  return `${day}/${m}/${y}`
}

// ─── ESTILOS COMPARTIDOS ──────────────────────────────────────────────────────

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200'
const inputStyle = { color: '#1e1e6e' }
const focusHandlers = {
  onFocus: e => { e.target.style.borderColor = '#1e1e6e'; e.target.style.boxShadow = '0 0 0 3px #F9EA1B30' },
  onBlur:  e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' },
}

// ─── MODAL ────────────────────────────────────────────────────────────────────

function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: '#00000055' }}>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto" style={{ borderTop: '3px solid #F9EA1B' }}>
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
          <h3 className="font-display font-black uppercase text-base" style={{ color: '#1e1e6e' }}>{title}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-400">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

// ─── FORMULARIOS ──────────────────────────────────────────────────────────────

function FieldGroup({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>{label}</label>
      {children}
    </div>
  )
}

function NumInput({ name, value, onChange, placeholder }) {
  return (
    <input
      type="number" min="0" name={name} value={value} onChange={onChange}
      placeholder={placeholder || '0'} required
      className={inputClass} style={inputStyle} {...focusHandlers}
    />
  )
}

function FormProximos({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <FieldGroup label="Fecha">
          <input type="date" name="fecha" value={form.fecha} onChange={onChange} required className={inputClass} style={inputStyle} {...focusHandlers} />
        </FieldGroup>
        <FieldGroup label="Hora">
          <input type="time" name="hora" value={form.hora} onChange={onChange} required className={inputClass} style={inputStyle} {...focusHandlers} />
        </FieldGroup>
      </div>
      <FieldGroup label="Local">
        <input name="local" value={form.local} onChange={onChange} required placeholder="Equipo local" className={inputClass} style={inputStyle} {...focusHandlers} />
      </FieldGroup>
      <FieldGroup label="Visitante">
        <input name="visitante" value={form.visitante} onChange={onChange} required placeholder="Equipo visitante" className={inputClass} style={inputStyle} {...focusHandlers} />
      </FieldGroup>
      <FieldGroup label="Cancha">
        <input name="cancha" value={form.cancha} onChange={onChange} required placeholder="Nombre del estadio / cancha" className={inputClass} style={inputStyle} {...focusHandlers} />
      </FieldGroup>
    </div>
  )
}

function FormResultados({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <FieldGroup label="Fecha">
        <input type="date" name="fecha" value={form.fecha} onChange={onChange} required className={inputClass} style={inputStyle} {...focusHandlers} />
      </FieldGroup>
      <FieldGroup label="Equipo local">
        <input name="local" value={form.local} onChange={onChange} required placeholder="Equipo local" className={inputClass} style={inputStyle} {...focusHandlers} />
      </FieldGroup>
      <div className="grid grid-cols-2 gap-4">
        <FieldGroup label="Goles local">
          <NumInput name="gLocal" value={form.gLocal} onChange={onChange} />
        </FieldGroup>
        <FieldGroup label="Goles visitante">
          <NumInput name="gVisitante" value={form.gVisitante} onChange={onChange} />
        </FieldGroup>
      </div>
      <FieldGroup label="Equipo visitante">
        <input name="visitante" value={form.visitante} onChange={onChange} required placeholder="Equipo visitante" className={inputClass} style={inputStyle} {...focusHandlers} />
      </FieldGroup>
    </div>
  )
}

function FormTablaFutbol({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <FieldGroup label="Equipo">
        <input name="equipo" value={form.equipo} onChange={onChange} required placeholder="Nombre del equipo" className={inputClass} style={inputStyle} {...focusHandlers} />
      </FieldGroup>
      <div className="grid grid-cols-3 gap-3">
        <FieldGroup label="PJ"><NumInput name="pj" value={form.pj} onChange={onChange} /></FieldGroup>
        <FieldGroup label="PG"><NumInput name="pg" value={form.pg} onChange={onChange} /></FieldGroup>
        <FieldGroup label="PE"><NumInput name="pe" value={form.pe} onChange={onChange} /></FieldGroup>
        <FieldGroup label="PP"><NumInput name="pp" value={form.pp} onChange={onChange} /></FieldGroup>
        <FieldGroup label="GF"><NumInput name="gf" value={form.gf} onChange={onChange} /></FieldGroup>
        <FieldGroup label="GC"><NumInput name="gc" value={form.gc} onChange={onChange} /></FieldGroup>
      </div>
      <FieldGroup label="Puntos">
        <NumInput name="pts" value={form.pts} onChange={onChange} placeholder="Pts" />
      </FieldGroup>
    </div>
  )
}

function FormTablaBasket({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <FieldGroup label="Equipo">
        <input name="equipo" value={form.equipo} onChange={onChange} required placeholder="Nombre del equipo" className={inputClass} style={inputStyle} {...focusHandlers} />
      </FieldGroup>
      <div className="grid grid-cols-3 gap-3">
        <FieldGroup label="PJ"><NumInput name="pj" value={form.pj} onChange={onChange} /></FieldGroup>
        <FieldGroup label="PG"><NumInput name="pg" value={form.pg} onChange={onChange} /></FieldGroup>
        <FieldGroup label="PP"><NumInput name="pp" value={form.pp} onChange={onChange} /></FieldGroup>
        <FieldGroup label="PF"><NumInput name="pf" value={form.pf} onChange={onChange} /></FieldGroup>
        <FieldGroup label="PC"><NumInput name="pc" value={form.pc} onChange={onChange} /></FieldGroup>
        <FieldGroup label="Puntos"><NumInput name="pts" value={form.pts} onChange={onChange} /></FieldGroup>
      </div>
    </div>
  )
}

function FormGoleadores({ form, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <FieldGroup label="Jugador">
        <input name="nombre" value={form.nombre} onChange={onChange} required placeholder="Apellido, Nombre" className={inputClass} style={inputStyle} {...focusHandlers} />
      </FieldGroup>
      <FieldGroup label="Equipo">
        <input name="equipo" value={form.equipo} onChange={onChange} required placeholder="Equipo del jugador" className={inputClass} style={inputStyle} {...focusHandlers} />
      </FieldGroup>
      <FieldGroup label="Goles">
        <NumInput name="goles" value={form.goles} onChange={onChange} />
      </FieldGroup>
    </div>
  )
}

function SectionForm({ sport, section, form, onChange }) {
  if (section === 'proximosPartidos') return <FormProximos form={form} onChange={onChange} />
  if (section === 'resultados')       return <FormResultados form={form} onChange={onChange} />
  if (section === 'tabla' && sport === 'futbol') return <FormTablaFutbol form={form} onChange={onChange} />
  if (section === 'tabla' && sport === 'basket') return <FormTablaBasket form={form} onChange={onChange} />
  if (section === 'goleadores')       return <FormGoleadores form={form} onChange={onChange} />
  return null
}

// ─── DISPLAY DE ÍTEMS ─────────────────────────────────────────────────────────

function ItemProximos({ item }) {
  return (
    <div className="flex-1 min-w-0">
      <p className="font-display font-bold text-sm truncate" style={{ color: '#1e1e6e' }}>
        {item.local} <span className="font-normal text-gray-400">vs</span> {item.visitante}
      </p>
      <p className="text-xs text-gray-400 mt-0.5">{formatFecha(item.fecha)} · {item.hora} · {item.cancha}</p>
    </div>
  )
}

function ItemResultado({ item }) {
  return (
    <div className="flex-1 min-w-0">
      <p className="font-display font-bold text-sm" style={{ color: '#1e1e6e' }}>
        {item.local} <span className="px-2 py-0.5 rounded bg-gray-900 text-white text-xs mx-1 tabular-nums">{item.gLocal} - {item.gVisitante}</span> {item.visitante}
      </p>
      <p className="text-xs text-gray-400 mt-0.5">{formatFecha(item.fecha)}</p>
    </div>
  )
}

function ItemTablaFutbol({ item, pos }) {
  return (
    <div className="flex-1 min-w-0 flex items-center gap-3">
      <span className="text-xs font-bold text-gray-400 w-4">{pos}</span>
      <div>
        <p className="font-display font-bold text-sm" style={{ color: '#1e1e6e' }}>{item.equipo}</p>
        <p className="text-xs text-gray-400">PJ {item.pj} · PG {item.pg} · PE {item.pe} · PP {item.pp} · GF {item.gf} · GC {item.gc}</p>
      </div>
      <span className="ml-auto font-extrabold text-base pr-2" style={{ color: '#1e1e6e' }}>{item.pts} pts</span>
    </div>
  )
}

function ItemTablaBasket({ item, pos }) {
  return (
    <div className="flex-1 min-w-0 flex items-center gap-3">
      <span className="text-xs font-bold text-gray-400 w-4">{pos}</span>
      <div>
        <p className="font-display font-bold text-sm" style={{ color: '#1e1e6e' }}>{item.equipo}</p>
        <p className="text-xs text-gray-400">PJ {item.pj} · PG {item.pg} · PP {item.pp} · PF {item.pf} · PC {item.pc}</p>
      </div>
      <span className="ml-auto font-extrabold text-base pr-2" style={{ color: '#1e1e6e' }}>{item.pts} pts</span>
    </div>
  )
}

function ItemGoleador({ item, pos }) {
  return (
    <div className="flex-1 min-w-0 flex items-center gap-3">
      <span className="text-xs font-bold text-gray-400 w-4">{pos}</span>
      <div>
        <p className="font-display font-bold text-sm" style={{ color: '#1e1e6e' }}>{item.nombre}</p>
        <p className="text-xs text-gray-400">{item.equipo}</p>
      </div>
      <span className="ml-auto font-extrabold text-base pr-2" style={{ color: '#1e1e6e' }}>{item.goles} goles</span>
    </div>
  )
}

function ItemDisplay({ sport, section, item, pos }) {
  if (section === 'proximosPartidos') return <ItemProximos item={item} />
  if (section === 'resultados')       return <ItemResultado item={item} />
  if (section === 'tabla' && sport === 'futbol') return <ItemTablaFutbol item={item} pos={pos} />
  if (section === 'tabla' && sport === 'basket') return <ItemTablaBasket item={item} pos={pos} />
  if (section === 'goleadores')       return <ItemGoleador item={item} pos={pos} />
  return null
}

// ─── PANEL PRINCIPAL ──────────────────────────────────────────────────────────

const SECTION_TITLES = {
  proximosPartidos: 'Próximos partidos',
  resultados: 'Resultados',
  tabla: 'Tabla de posiciones',
  goleadores: 'Goleadores',
}

const MODAL_TITLES = {
  proximosPartidos: { add: 'Nuevo partido', edit: 'Editar partido' },
  resultados: { add: 'Nuevo resultado', edit: 'Editar resultado' },
  tabla: { add: 'Agregar equipo', edit: 'Editar equipo' },
  goleadores: { add: 'Agregar goleador', edit: 'Editar goleador' },
}

// Items ordenados por pts desc para tabla y goles desc para goleadores
function sortedItems(section, items) {
  if (section === 'tabla') return [...items].sort((a, b) => b.pts - a.pts)
  if (section === 'goleadores') return [...items].sort((a, b) => b.goles - a.goles)
  if (section === 'resultados') return [...items].sort((a, b) => b.fecha.localeCompare(a.fecha))
  if (section === 'proximosPartidos') return [...items].sort((a, b) => a.fecha.localeCompare(b.fecha))
  return items
}

export default function LigasPanel() {
  const { futbol, basket, updateSection } = useLigas()

  const [sport, setSport] = useState('futbol')
  const [section, setSection] = useState('proximosPartidos')
  const [modal, setModal] = useState(null) // null | { mode: 'add'|'edit', item: {...} }
  const [form, setForm] = useState({})
  const [saved, setSaved] = useState(false)

  const sections = sport === 'futbol' ? SECTIONS_FUTBOL : SECTIONS_BASKET
  const data = sport === 'futbol' ? futbol : basket
  const items = data[section] || []
  const sorted = sortedItems(section, items)

  const handleChangeSport = (s) => {
    setSport(s)
    // Si la sección actual no existe en el nuevo deporte, resetear
    const newSections = s === 'futbol' ? SECTIONS_FUTBOL : SECTIONS_BASKET
    if (!newSections.find(sec => sec.id === section)) setSection('proximosPartidos')
  }

  const openAdd = () => {
    setForm(getEmptyForm(sport, section))
    setModal({ mode: 'add', item: null })
  }

  const openEdit = (item) => {
    setForm({ ...item })
    setModal({ mode: 'edit', item })
  }

  const closeModal = () => { setModal(null); setForm({}) }

  const handleChange = e => {
    const { name, value, type } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'number' ? (value === '' ? '' : Number(value)) : value }))
  }

  const handleSave = e => {
    e.preventDefault()
    let newItems
    if (modal.mode === 'add') {
      newItems = [...items, { id: Date.now(), ...form }]
    } else {
      newItems = items.map(i => i.id === modal.item.id ? { ...i, ...form } : i)
    }
    updateSection(sport, section, newItems)
    setSaved(true)
    setTimeout(() => { setSaved(false); closeModal() }, 800)
  }

  const handleDelete = (id) => {
    if (!window.confirm('¿Eliminás este registro?')) return
    updateSection(sport, section, items.filter(i => i.id !== id))
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-display font-black uppercase text-2xl" style={{ color: '#1e1e6e' }}>Ligas</h2>
        <p className="text-gray-400 text-sm mt-0.5">Gestioná partidos, resultados y posiciones</p>
      </div>

      {/* Selector de deporte */}
      <div className="flex gap-3 mb-6">
        {SPORTS.map(({ id, label, emoji }) => {
          const active = sport === id
          return (
            <button
              key={id}
              onClick={() => handleChangeSport(id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-sm transition-all duration-200"
              style={{
                backgroundColor: active ? '#F9EA1B' : 'white',
                color: '#1e1e6e',
                border: active ? '2px solid #1e1e6e' : '2px solid #e5e7eb',
                boxShadow: active ? '0 4px 12px #F9EA1B55' : 'none',
              }}
            >
              <span className="text-lg">{emoji}</span> {label}
            </button>
          )
        })}
      </div>

      {/* Tabs de sección */}
      <div className="flex gap-2 flex-wrap mb-6 border-b border-gray-100 pb-4">
        {sections.map(({ id, label, icon: Icon }) => {
          const active = section === id
          return (
            <button
              key={id}
              onClick={() => setSection(id)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-display font-semibold text-xs uppercase tracking-wide transition-all duration-200"
              style={{
                backgroundColor: active ? '#1e1e6e' : '#f3f4f6',
                color: active ? 'white' : '#1e1e6e80',
              }}
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          )
        })}
      </div>

      {/* Lista */}
      <div className="flex items-center justify-between mb-4">
        <p className="font-display font-bold uppercase text-sm tracking-wide" style={{ color: '#1e1e6e' }}>
          {SECTION_TITLES[section]}
          <span className="ml-2 text-xs font-normal text-gray-400">({sorted.length})</span>
        </p>
        <button
          onClick={openAdd}
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-display font-bold uppercase text-xs text-white transition-all duration-200"
          style={{ backgroundColor: '#1e1e6e' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2d2d9e'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e1e6e'}
        >
          <Plus className="w-4 h-4" /> Agregar
        </button>
      </div>

      {sorted.length === 0 ? (
        <div className="text-center py-12 rounded-2xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-sm">No hay registros. Hacé click en <strong>Agregar</strong> para comenzar.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {sorted.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-100 px-4 py-3 flex items-center gap-3 hover:shadow-sm transition-shadow"
              style={{ borderLeft: '3px solid #F9EA1B' }}
            >
              <ItemDisplay sport={sport} section={section} item={item} pos={idx + 1} />
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={() => openEdit(item)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 hover:border-[#1e1e6e] transition-colors"
                  style={{ color: '#1e1e6e' }}
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 hover:border-red-400 hover:text-red-500 transition-colors text-gray-400"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de formulario */}
      {modal && (
        <Modal
          title={MODAL_TITLES[section]?.[modal.mode] || 'Formulario'}
          onClose={closeModal}
        >
          <form onSubmit={handleSave} className="flex flex-col gap-5">
            <SectionForm sport={sport} section={section} form={form} onChange={handleChange} />
            <div className="flex gap-3 pt-2 border-t border-gray-100">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-display font-bold uppercase text-sm text-white transition-all duration-200"
                style={{ backgroundColor: saved ? '#22c55e' : '#1e1e6e' }}
              >
                {saved ? <><CheckCircle className="w-4 h-4" /> Guardado</> : <><Save className="w-4 h-4" /> Guardar</>}
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="px-6 py-2.5 rounded-xl font-display font-bold uppercase text-sm border-2 transition-all duration-200"
                style={{ borderColor: '#e5e7eb', color: '#6b7280' }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  )
}
