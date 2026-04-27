import { useState, useRef } from 'react'
import { Plus, Pencil, Trash2, X, Image, Save, CheckCircle, Handshake } from 'lucide-react'
import { useAuspiciantes } from '../../context/AuspiciantesContext'

const EMPTY_FORM = { nombre: '', rubro: '', web: '', logo: null, logoPreview: null }

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200'
const inputStyle = { color: '#1e1e6e' }
const focusHandlers = {
  onFocus: e => { e.target.style.borderColor = '#1e1e6e'; e.target.style.boxShadow = '0 0 0 3px #F9EA1B30' },
  onBlur:  e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' },
}

function AuspicianteForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || EMPTY_FORM)
  const [saved, setSaved] = useState(false)
  const fileRef = useRef()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleFile = e => {
    const file = e.target.files[0]
    if (!file) return
    setForm({ ...form, logo: file, logoPreview: URL.createObjectURL(file) })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSave(form)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* Logo */}
      <div>
        <label className="block text-xs font-display font-bold uppercase tracking-widest mb-2" style={{ color: '#1e1e6e' }}>
          Logo del auspiciante
        </label>
        <div
          onClick={() => fileRef.current.click()}
          className="relative border-2 border-dashed rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:border-[#1e1e6e]"
          style={{ borderColor: form.logoPreview ? '#1e1e6e' : '#d1d5db', minHeight: '120px' }}
        >
          {form.logoPreview ? (
            <>
              <div className="flex items-center justify-center p-4 bg-gray-50" style={{ minHeight: '120px' }}>
                <img src={form.logoPreview} alt="preview" className="max-h-24 object-contain" />
              </div>
              <button
                type="button"
                onClick={e => { e.stopPropagation(); setForm({ ...form, logo: null, logoPreview: null }) }}
                className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 gap-2">
              <Image className="w-8 h-8 text-gray-300" />
              <p className="text-sm text-gray-400">Hacé click para subir el logo</p>
              <p className="text-xs text-gray-300">PNG, SVG, JPG · Fondo transparente recomendado</p>
            </div>
          )}
        </div>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      </div>

      {/* Nombre */}
      <div>
        <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>Nombre *</label>
        <input name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Nombre de la empresa o marca" className={inputClass} style={inputStyle} {...focusHandlers} />
      </div>

      {/* Rubro */}
      <div>
        <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>Rubro</label>
        <input name="rubro" value={form.rubro} onChange={handleChange} placeholder="Ej: Construcción, Gastronomía, Salud..." className={inputClass} style={inputStyle} {...focusHandlers} />
      </div>

      {/* Web */}
      <div>
        <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>
          Sitio web <span className="text-gray-400 normal-case font-normal">(opcional)</span>
        </label>
        <input name="web" value={form.web} onChange={handleChange} placeholder="https://www.empresa.com" className={inputClass} style={inputStyle} {...focusHandlers} />
      </div>

      {/* Acciones */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-display font-bold uppercase text-sm text-white transition-all duration-200"
          style={{ backgroundColor: saved ? '#22c55e' : '#1e1e6e' }}
          onMouseEnter={e => { if (!saved) e.currentTarget.style.backgroundColor = '#2d2d9e' }}
          onMouseLeave={e => { if (!saved) e.currentTarget.style.backgroundColor = '#1e1e6e' }}
        >
          {saved ? <><CheckCircle className="w-4 h-4" /> Guardado</> : <><Save className="w-4 h-4" /> Guardar</>}
        </button>
        <button type="button" onClick={onCancel} className="px-6 py-2.5 rounded-xl font-display font-bold uppercase text-sm border-2 transition-all duration-200" style={{ borderColor: '#e5e7eb', color: '#6b7280' }}>
          Cancelar
        </button>
      </div>
    </form>
  )
}

export default function AuspiciantesPanel() {
  const { auspiciantes, agregar, editar, eliminar } = useAuspiciantes()
  const [view, setView] = useState('list') // 'list' | 'create' | 'edit'
  const [editing, setEditing] = useState(null)

  const handleSave = (form) => {
    if (editing) {
      editar(editing.id, form)
      setEditing(null)
    } else {
      agregar(form)
    }
    setView('list')
  }

  const handleDelete = (id) => {
    if (window.confirm('¿Eliminás este auspiciante?')) eliminar(id)
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-display font-black uppercase text-2xl" style={{ color: '#1e1e6e' }}>
            {view === 'list' ? 'Auspiciantes' : view === 'create' ? 'Nuevo Auspiciante' : 'Editar Auspiciante'}
          </h2>
          <p className="text-gray-400 text-sm mt-0.5">
            {view === 'list' ? `${auspiciantes.length} auspiciante${auspiciantes.length !== 1 ? 's' : ''} cargado${auspiciantes.length !== 1 ? 's' : ''}` : 'Completá los datos y guardá'}
          </p>
        </div>
        {view === 'list' && (
          <button
            onClick={() => setView('create')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold uppercase text-sm transition-all duration-200"
            style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DFD018'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F9EA1B'}
          >
            <Plus className="w-4 h-4" /> Nuevo auspiciante
          </button>
        )}
      </div>

      {/* Lista */}
      {view === 'list' && (
        auspiciantes.length === 0 ? (
          <div className="text-center py-16 rounded-2xl border-2 border-dashed border-gray-200">
            <Handshake className="w-10 h-10 mx-auto mb-3 text-gray-300" />
            <p className="font-display font-bold text-base text-gray-400">No hay auspiciantes cargados</p>
            <p className="text-sm text-gray-300 mt-1">Hacé click en <strong>"Nuevo auspiciante"</strong> para agregar uno.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {auspiciantes.map(a => (
              <div key={a.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col gap-3 hover:shadow-sm transition-shadow" style={{ borderTop: '3px solid #F9EA1B' }}>
                {/* Logo */}
                <div className="h-20 flex items-center justify-center rounded-xl bg-gray-50">
                  {a.logoPreview
                    ? <img src={a.logoPreview} alt={a.nombre} className="max-h-16 object-contain" />
                    : <Handshake className="w-8 h-8 text-gray-200" />
                  }
                </div>
                {/* Info */}
                <div className="flex-1">
                  <p className="font-display font-bold text-base truncate" style={{ color: '#1e1e6e' }}>{a.nombre}</p>
                  {a.rubro && <p className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">{a.rubro}</p>}
                  {a.web && <p className="text-xs text-blue-400 mt-1 truncate">{a.web}</p>}
                </div>
                {/* Acciones */}
                <div className="flex gap-2">
                  <button onClick={() => { setEditing(a); setView('edit') }} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-gray-200 hover:border-[#1e1e6e] transition-colors text-xs font-display font-bold uppercase" style={{ color: '#1e1e6e' }}>
                    <Pencil className="w-3.5 h-3.5" /> Editar
                  </button>
                  <button onClick={() => handleDelete(a.id)} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border border-gray-200 hover:border-red-400 hover:text-red-500 transition-colors text-xs font-display font-bold uppercase text-gray-400">
                    <Trash2 className="w-3.5 h-3.5" /> Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )
      )}

      {/* Crear / Editar */}
      {(view === 'create' || view === 'edit') && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6" style={{ borderTop: '3px solid #F9EA1B' }}>
          <AuspicianteForm
            initial={view === 'edit' ? editing : null}
            onSave={handleSave}
            onCancel={() => { setView('list'); setEditing(null) }}
          />
        </div>
      )}
    </div>
  )
}
