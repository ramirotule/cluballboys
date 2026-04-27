import { useState, useRef } from 'react'
import { Plus, Pencil, Trash2, X, Image, Save, Newspaper, CheckCircle } from 'lucide-react'
import { useNoticias } from '../../context/NoticiasContext'

const CATEGORIAS = ['Fútbol', 'Básquet', 'Gimnasia Artística', 'Softbol', 'Pelota Paleta', 'Natación', 'Inferiores', 'Fútbol Femenino', 'Vóley', 'Socios', 'Institución', 'Historia', 'Eventos']

const COLORS = ['#2E2DA8', '#1a1660', '#302782', '#1e3a8a', '#1e6e3a']

const EMPTY_FORM = { titulo: '', categoria: 'Fútbol', fecha: '', resumen: '', cuerpo: '', foto: null, fotoPreview: null, color: '#2E2DA8' }

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200'
const inputStyle = { color: '#1e1e6e' }
const focusHandlers = {
  onFocus: e => { e.target.style.borderColor = '#1e1e6e'; e.target.style.boxShadow = '0 0 0 3px #F9EA1B30' },
  onBlur:  e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' },
}

function formatFecha(fechaISO) {
  if (!fechaISO) return ''
  const [y, m, d] = fechaISO.split('-')
  const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  return `${parseInt(d)} ${meses[parseInt(m) - 1]} ${y}`
}

function NewsForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || EMPTY_FORM)
  const [saved, setSaved] = useState(false)
  const fileRef = useRef()

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleFile = e => {
    const file = e.target.files[0]
    if (!file) return
    setForm({ ...form, foto: file, fotoPreview: URL.createObjectURL(file) })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSave(form)
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Foto */}
      <div>
        <label className="block text-xs font-display font-bold uppercase tracking-widest mb-2" style={{ color: '#1e1e6e' }}>
          Foto de portada
        </label>
        <div
          onClick={() => fileRef.current.click()}
          className="relative border-2 border-dashed rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:border-[#1e1e6e]"
          style={{ borderColor: form.fotoPreview ? '#1e1e6e' : '#d1d5db', minHeight: '140px' }}
        >
          {form.fotoPreview ? (
            <>
              <img src={form.fotoPreview} alt="preview" className="w-full h-40 object-cover" />
              <button
                type="button"
                onClick={e => { e.stopPropagation(); setForm({ ...form, foto: null, fotoPreview: null }) }}
                className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 gap-2">
              <Image className="w-8 h-8 text-gray-300" />
              <p className="text-sm text-gray-400">Hacé click para subir una foto</p>
              <p className="text-xs text-gray-300">JPG, PNG, WEBP · Máx. 5MB</p>
            </div>
          )}
        </div>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />

        {/* Color de fondo (cuando no hay foto) */}
        {!form.fotoPreview && (
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-400">Color de fondo:</span>
            {COLORS.map(c => (
              <button
                key={c}
                type="button"
                onClick={() => setForm({ ...form, color: c })}
                className="w-6 h-6 rounded-full border-2 transition-all"
                style={{ backgroundColor: c, borderColor: form.color === c ? '#F9EA1B' : 'transparent' }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Título */}
      <div>
        <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>Título</label>
        <input name="titulo" value={form.titulo} onChange={handleChange} required placeholder="Título de la noticia" className={inputClass} style={inputStyle} {...focusHandlers} />
      </div>

      {/* Categoría + Fecha */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>Categoría</label>
          <select name="categoria" value={form.categoria} onChange={handleChange} className={inputClass} style={inputStyle} {...focusHandlers}>
            {CATEGORIAS.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>Fecha</label>
          <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required className={inputClass} style={inputStyle} {...focusHandlers} />
        </div>
      </div>

      {/* Resumen */}
      <div>
        <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>
          Resumen <span className="text-gray-400 normal-case font-normal">(se muestra en las cards)</span>
        </label>
        <textarea
          name="resumen" value={form.resumen} onChange={handleChange} required rows={2}
          placeholder="Breve descripción para la card de la noticia (1-2 líneas)..."
          className={`${inputClass} resize-none`} style={inputStyle} {...focusHandlers}
        />
      </div>

      {/* Cuerpo */}
      <div>
        <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>
          Artículo completo <span className="text-gray-400 normal-case font-normal">(se muestra al abrir la noticia)</span>
        </label>
        <textarea
          name="cuerpo" value={form.cuerpo} onChange={handleChange} required rows={8}
          placeholder="Escribí el contenido completo de la noticia. Dejá una línea en blanco entre párrafos."
          className={`${inputClass} resize-none`} style={inputStyle} {...focusHandlers}
        />
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

export default function AdminPanel() {
  const { noticias, agregarNoticia, editarNoticia, eliminarNoticia } = useNoticias()
  const [view, setView] = useState('list') // 'list' | 'create' | 'edit'
  const [editing, setEditing] = useState(null)

  const ordenadas = [...noticias].sort((a, b) => b.fecha.localeCompare(a.fecha))

  const handleSave = (form) => {
    if (editing !== null) {
      editarNoticia(editing.id, form)
      setEditing(null)
    } else {
      agregarNoticia(form)
    }
    setView('list')
  }

  const handleDelete = (id) => {
    if (window.confirm('¿Eliminás esta noticia?')) eliminarNoticia(id)
  }

  const handleEdit = (noticia) => { setEditing(noticia); setView('edit') }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-display font-black uppercase text-2xl" style={{ color: '#1e1e6e' }}>
            {view === 'list' ? 'Noticias' : view === 'create' ? 'Nueva Noticia' : 'Editar Noticia'}
          </h2>
          <p className="text-gray-400 text-sm mt-0.5">
            {view === 'list' ? `${noticias.length} noticias publicadas` : 'Completá los campos y guardá'}
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
            <Plus className="w-4 h-4" /> Nueva noticia
          </button>
        )}
      </div>

      {/* Lista */}
      {view === 'list' && (
        <div className="flex flex-col gap-4">
          {ordenadas.map(n => (
            <div key={n.id} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-start gap-4 hover:shadow-sm transition-shadow" style={{ borderLeft: '4px solid #F9EA1B' }}>
              {/* Thumb */}
              <div className="w-16 h-16 rounded-lg shrink-0 overflow-hidden flex items-center justify-center" style={{ backgroundColor: n.color || '#1e1e6e15' }}>
                {n.fotoPreview
                  ? <img src={n.fotoPreview} alt="" className="w-full h-full object-cover" />
                  : <Newspaper className="w-6 h-6" style={{ color: '#1e1e6e40' }} />
                }
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs font-display font-bold uppercase px-2 py-0.5 rounded" style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}>{n.categoria}</span>
                  <span className="text-xs text-gray-400">{formatFecha(n.fecha)}</span>
                </div>
                <p className="font-display font-bold text-base truncate" style={{ color: '#1e1e6e' }}>{n.titulo}</p>
                <p className="text-gray-400 text-sm line-clamp-1 mt-0.5">{n.resumen}</p>
              </div>
              {/* Acciones */}
              <div className="flex gap-2 shrink-0">
                <button onClick={() => handleEdit(n)} className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-200 hover:border-[#1e1e6e] transition-colors" style={{ color: '#1e1e6e' }}>
                  <Pencil className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(n.id)} className="w-9 h-9 rounded-lg flex items-center justify-center border border-gray-200 hover:border-red-400 hover:text-red-500 transition-colors text-gray-400">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Crear / Editar */}
      {(view === 'create' || view === 'edit') && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6" style={{ borderTop: '3px solid #F9EA1B' }}>
          <NewsForm
            initial={view === 'edit' ? editing : null}
            onSave={handleSave}
            onCancel={() => { setView('list'); setEditing(null) }}
          />
        </div>
      )}
    </div>
  )
}
