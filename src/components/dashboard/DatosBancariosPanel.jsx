import { useState } from 'react'
import { Save, CheckCircle, Building2, Pencil, X } from 'lucide-react'
import { useDatosBancarios } from '../../context/DatosBancariosContext'

const inputClass = 'w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200'
const inputStyle = { color: '#1e1e6e' }
const focusHandlers = {
  onFocus: e => { e.target.style.borderColor = '#1e1e6e'; e.target.style.boxShadow = '0 0 0 3px #F9EA1B30' },
  onBlur:  e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' },
}

function Campo({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-xs font-display font-bold uppercase tracking-widest text-gray-400">{label}</p>
      <p className="font-semibold text-sm break-all" style={{ color: '#1e1e6e' }}>{value}</p>
    </div>
  )
}

export default function DatosBancariosPanel() {
  const { datos, actualizar } = useDatosBancarios()
  const [editing, setEditing]   = useState(false)
  const [form, setForm]         = useState(datos)
  const [saved, setSaved]       = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSave = e => {
    e.preventDefault()
    actualizar(form)
    setSaved(true)
    setTimeout(() => { setSaved(false); setEditing(false) }, 900)
  }

  const handleCancel = () => { setForm(datos); setEditing(false) }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-display font-black uppercase text-2xl" style={{ color: '#1e1e6e' }}>Datos Bancarios</h2>
          <p className="text-gray-400 text-sm mt-0.5">Información de transferencia que ven los socios en el checkout</p>
        </div>
        {!editing && (
          <button
            onClick={() => { setForm(datos); setEditing(true) }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold uppercase text-sm transition-all duration-200"
            style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#DFD018'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F9EA1B'}
          >
            <Pencil className="w-4 h-4" /> Editar
          </button>
        )}
      </div>

      {editing ? (
        /* ── Formulario ── */
        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3" style={{ backgroundColor: '#F8F8FF' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1e1e6e' }}>
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-display font-black uppercase text-sm" style={{ color: '#1e1e6e' }}>Editar datos bancarios</h3>
          </div>

          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { name: 'titular', label: 'Titular' },
              { name: 'banco',   label: 'Banco' },
              { name: 'cbu',     label: 'CBU' },
              { name: 'alias',   label: 'Alias' },
              { name: 'cuit',    label: 'CUIT' },
              { name: 'cuenta',  label: 'N° de cuenta' },
            ].map(({ name, label }) => (
              <div key={name} className={name === 'cbu' ? 'sm:col-span-2' : ''}>
                <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>
                  {label}
                </label>
                <input
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  style={inputStyle}
                  {...focusHandlers}
                />
              </div>
            ))}
          </div>

          <div className="px-6 pb-6 flex gap-3">
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold uppercase text-sm text-white transition-all duration-200"
              style={{ backgroundColor: saved ? '#22c55e' : '#1e1e6e' }}
            >
              {saved
                ? <><CheckCircle className="w-4 h-4" /> Guardado</>
                : <><Save className="w-4 h-4" /> Guardar cambios</>
              }
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold uppercase text-sm border-2 transition-all"
              style={{ borderColor: '#e5e7eb', color: '#6b7280' }}
            >
              <X className="w-4 h-4" /> Cancelar
            </button>
          </div>
        </form>
      ) : (
        /* ── Vista de lectura ── */
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3" style={{ backgroundColor: '#F8F8FF' }}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1e1e6e' }}>
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <h3 className="font-display font-black uppercase text-sm" style={{ color: '#1e1e6e' }}>Datos actuales</h3>
          </div>

          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Campo label="Titular"     value={datos.titular} />
            <Campo label="Banco"       value={datos.banco}   />
            <Campo label="CBU"         value={datos.cbu}     />
            <Campo label="Alias"       value={datos.alias}   />
            <Campo label="CUIT"        value={datos.cuit}    />
            <Campo label="N° de cuenta" value={datos.cuenta} />
          </div>

          <div className="mx-6 mb-6 rounded-xl px-4 py-3 flex items-center gap-2 text-sm" style={{ backgroundColor: '#F9EA1B20', borderLeft: '3px solid #F9EA1B' }}>
            <span className="text-base">ℹ️</span>
            <p style={{ color: '#1e1e6e' }}>Estos datos aparecen en el checkout cuando el socio elige transferencia bancaria.</p>
          </div>
        </div>
      )}
    </div>
  )
}
