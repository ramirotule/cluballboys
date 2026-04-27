import { useState } from 'react'
import { Plus, Pencil, Trash2, Save, CheckCircle, ChevronDown, ChevronUp, UtensilsCrossed } from 'lucide-react'
import { useCantina } from '../../context/CantinaContext'

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200'
const inputStyle = { color: '#1e1e6e' }
const focusHandlers = {
  onFocus: e => { e.target.style.borderColor = '#1e1e6e'; e.target.style.boxShadow = '0 0 0 3px #F9EA1B30' },
  onBlur:  e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' },
}

function formatPrecio(n) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(Number(n))
}

// ─── FORM ITEM ────────────────────────────────────────────────────────────────

function ItemForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || { nombre: '', descripcion: '', precio: '' })
  const [saved, setSaved] = useState(false)
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    onSave({ ...form, precio: Number(form.precio) })
    setSaved(true)
    setTimeout(() => { setSaved(false); onCancel() }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-4 flex flex-col gap-3 border border-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1" style={{ color: '#1e1e6e' }}>Nombre *</label>
          <input name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Ej: Milanesa con papas" className={inputClass} style={inputStyle} {...focusHandlers} />
        </div>
        <div>
          <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1" style={{ color: '#1e1e6e' }}>Precio (ARS) *</label>
          <input type="number" min="0" name="precio" value={form.precio} onChange={handleChange} required placeholder="0" className={inputClass} style={inputStyle} {...focusHandlers} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1" style={{ color: '#1e1e6e' }}>Descripción</label>
        <input name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Breve descripción del producto" className={inputClass} style={inputStyle} {...focusHandlers} />
      </div>
      <div className="flex gap-2">
        <button type="submit" className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-display font-bold uppercase text-xs text-white transition-all" style={{ backgroundColor: saved ? '#22c55e' : '#1e1e6e' }}>
          {saved ? <><CheckCircle className="w-3.5 h-3.5" /> Guardado</> : <><Save className="w-3.5 h-3.5" /> Guardar</>}
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg font-display font-bold uppercase text-xs border-2 transition-all" style={{ borderColor: '#e5e7eb', color: '#6b7280' }}>
          Cancelar
        </button>
      </div>
    </form>
  )
}

// ─── FORM CATEGORÍA ───────────────────────────────────────────────────────────

function CategoriaForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || { categoria: '', icon: '🍽️' })
  const [saved, setSaved] = useState(false)
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    onSave(form)
    setSaved(true)
    setTimeout(() => { setSaved(false); onCancel() }, 800)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col gap-4" style={{ borderTop: '3px solid #F9EA1B' }}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1" style={{ color: '#1e1e6e' }}>Emoji</label>
          <input name="icon" value={form.icon} onChange={handleChange} required maxLength={2} placeholder="🍽️" className={`${inputClass} text-center text-xl`} style={inputStyle} {...focusHandlers} />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1" style={{ color: '#1e1e6e' }}>Nombre de categoría *</label>
          <input name="categoria" value={form.categoria} onChange={handleChange} required placeholder="Ej: Bebidas, Minutas..." className={inputClass} style={inputStyle} {...focusHandlers} />
        </div>
      </div>
      <div className="flex gap-2">
        <button type="submit" className="flex items-center gap-1.5 px-4 py-2 rounded-lg font-display font-bold uppercase text-xs text-white transition-all" style={{ backgroundColor: saved ? '#22c55e' : '#1e1e6e' }}>
          {saved ? <><CheckCircle className="w-3.5 h-3.5" /> Guardado</> : <><Save className="w-3.5 h-3.5" /> Guardar</>}
        </button>
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded-lg font-display font-bold uppercase text-xs border-2 transition-all" style={{ borderColor: '#e5e7eb', color: '#6b7280' }}>
          Cancelar
        </button>
      </div>
    </form>
  )
}

// ─── CATEGORÍA CON SUS ITEMS ──────────────────────────────────────────────────

function CategoriaSection({ cat }) {
  const { editarCategoria, eliminarCategoria, agregarItem, editarItem, eliminarItem } = useCantina()
  const [open, setOpen] = useState(true)
  const [addingItem, setAddingItem] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [editingCat, setEditingCat] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header categoría */}
      {editingCat ? (
        <div className="p-4">
          <CategoriaForm
            initial={{ categoria: cat.categoria, icon: cat.icon }}
            onSave={data => { editarCategoria(cat.id, data); setEditingCat(false) }}
            onCancel={() => setEditingCat(false)}
          />
        </div>
      ) : (
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 cursor-pointer" style={{ backgroundColor: '#F8F8FF' }} onClick={() => setOpen(o => !o)}>
          <span className="text-2xl">{cat.icon}</span>
          <h3 className="font-display font-black uppercase tracking-wide text-base flex-1" style={{ color: '#302782' }}>{cat.categoria}</h3>
          <span className="text-xs text-gray-400">{cat.items.length} productos</span>
          <div className="flex gap-1 ml-2" onClick={e => e.stopPropagation()}>
            <button onClick={() => setEditingCat(true)} className="w-7 h-7 rounded-lg flex items-center justify-center border border-gray-200 hover:border-[#1e1e6e] transition-colors" style={{ color: '#1e1e6e' }}>
              <Pencil className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => { if (window.confirm('¿Eliminás esta categoría y todos sus productos?')) eliminarCategoria(cat.id) }} className="w-7 h-7 rounded-lg flex items-center justify-center border border-gray-200 hover:border-red-400 hover:text-red-500 transition-colors text-gray-400">
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
          {open ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
        </div>
      )}

      {/* Items */}
      {open && (
        <div className="divide-y divide-gray-50">
          {cat.items.map(item => (
            <div key={item.id}>
              {editingItem?.id === item.id ? (
                <div className="p-4">
                  <ItemForm
                    initial={item}
                    onSave={data => { editarItem(cat.id, item.id, data); setEditingItem(null) }}
                    onCancel={() => setEditingItem(null)}
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-bold text-sm" style={{ color: '#302782' }}>{item.nombre}</p>
                    {item.descripcion && <p className="text-xs text-gray-400 mt-0.5 truncate">{item.descripcion}</p>}
                  </div>
                  <span className="font-display font-black text-sm shrink-0" style={{ color: '#302782' }}>
                    {formatPrecio(item.precio)}
                  </span>
                  <div className="flex gap-1 shrink-0">
                    <button onClick={() => setEditingItem(item)} className="w-7 h-7 rounded-lg flex items-center justify-center border border-gray-200 hover:border-[#1e1e6e] transition-colors" style={{ color: '#1e1e6e' }}>
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={() => { if (window.confirm('¿Eliminás este producto?')) eliminarItem(cat.id, item.id) }} className="w-7 h-7 rounded-lg flex items-center justify-center border border-gray-200 hover:border-red-400 hover:text-red-500 transition-colors text-gray-400">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Agregar item */}
          <div className="px-5 py-3">
            {addingItem ? (
              <ItemForm
                onSave={data => { agregarItem(cat.id, data); setAddingItem(false) }}
                onCancel={() => setAddingItem(false)}
              />
            ) : (
              <button onClick={() => setAddingItem(true)} className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wide transition-colors py-1" style={{ color: '#302782' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <Plus className="w-3.5 h-3.5" /> Agregar producto
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── PANEL PRINCIPAL ──────────────────────────────────────────────────────────

export default function CantinaPanel() {
  const { menu } = useCantina()
  const [addingCat, setAddingCat] = useState(false)
  const { agregarCategoria } = useCantina()

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-display font-black uppercase text-2xl" style={{ color: '#1e1e6e' }}>Cantina</h2>
          <p className="text-gray-400 text-sm mt-0.5">Administrá el menú y los precios</p>
        </div>
        <button
          onClick={() => setAddingCat(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold uppercase text-sm transition-all duration-200"
          style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DFD018'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F9EA1B'}
        >
          <Plus className="w-4 h-4" /> Nueva categoría
        </button>
      </div>

      {/* Form nueva categoría */}
      {addingCat && (
        <div className="mb-6">
          <CategoriaForm
            onSave={data => { agregarCategoria(data); setAddingCat(false) }}
            onCancel={() => setAddingCat(false)}
          />
        </div>
      )}

      {/* Lista de categorías */}
      {menu.length === 0 && !addingCat ? (
        <div className="text-center py-16 rounded-2xl border-2 border-dashed border-gray-200">
          <UtensilsCrossed className="w-10 h-10 mx-auto mb-3 text-gray-300" />
          <p className="font-display font-bold text-base text-gray-400">El menú está vacío</p>
          <p className="text-sm text-gray-300 mt-1">Hacé click en <strong>"Nueva categoría"</strong> para comenzar.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {menu.map(cat => <CategoriaSection key={cat.id} cat={cat} />)}
        </div>
      )}
    </div>
  )
}
