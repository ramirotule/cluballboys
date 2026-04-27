import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); setSent(true) }

  return (
    <div className="min-h-screen bg-allboys-gray">

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
          <p className="text-[#F9EA1B] text-sm font-display uppercase tracking-widest mb-2">Club All Boys</p>
          <h1 className="text-white font-display font-black text-5xl sm:text-6xl uppercase tracking-tight mb-4">
            Contacto
          </h1>
          <div className="w-20 h-1 bg-[#F9EA1B] rounded-full mx-auto mb-6" />
          <p className="text-white/70 max-w-xl mx-auto text-lg leading-relaxed">
            Estamos para ayudarte. Escribinos o contactanos directo por WhatsApp.
          </p>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Formulario — ocupa más espacio */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8" style={{ borderTop: '3px solid #F9EA1B' }}>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1e1e6e15' }}>
                    <CheckCircle className="w-8 h-8" style={{ color: '#1e1e6e' }} />
                  </div>
                  <h3 className="font-display font-bold uppercase text-xl" style={{ color: '#1e1e6e' }}>
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Gracias por escribirnos. Te respondemos a la brevedad.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ nombre: '', email: '', asunto: '', mensaje: '' }) }}
                    className="mt-2 text-sm font-bold font-display uppercase tracking-wide underline"
                    style={{ color: '#1e1e6e' }}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display font-bold uppercase text-xl tracking-wide mb-6" style={{ color: '#1e1e6e' }}>
                    Mandanos un mensaje
                  </h2>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { label: 'Nombre', name: 'nombre', type: 'text', placeholder: 'Tu nombre' },
                        { label: 'Email', name: 'email', type: 'email', placeholder: 'tu@email.com' },
                      ].map(({ label, name, type, placeholder }) => (
                        <div key={name}>
                          <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>
                            {label}
                          </label>
                          <input
                            type={type}
                            name={name}
                            value={form[name]}
                            onChange={handleChange}
                            required
                            placeholder={placeholder}
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200"
                            style={{ color: '#1e1e6e' }}
                            onFocus={e => { e.target.style.borderColor = '#1e1e6e'; e.target.style.boxShadow = '0 0 0 3px #F9EA1B30' }}
                            onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>
                        Asunto
                      </label>
                      <input
                        type="text"
                        name="asunto"
                        value={form.asunto}
                        onChange={handleChange}
                        required
                        placeholder="¿En qué podemos ayudarte?"
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200"
                        style={{ color: '#1e1e6e' }}
                        onFocus={e => { e.target.style.borderColor = '#1e1e6e'; e.target.style.boxShadow = '0 0 0 3px #F9EA1B30' }}
                        onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>
                        Mensaje
                      </label>
                      <textarea
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Escribí tu consulta acá..."
                        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200 resize-none"
                        style={{ color: '#1e1e6e' }}
                        onFocus={e => { e.target.style.borderColor = '#1e1e6e'; e.target.style.boxShadow = '0 0 0 3px #F9EA1B30' }}
                        onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-display font-bold uppercase tracking-wide text-sm transition-all duration-200 mt-1"
                      style={{ backgroundColor: '#1e1e6e', color: 'white' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#2d2d9e'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e1e6e'}
                    >
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* WhatsApp */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center gap-5"
                style={{ borderTop: '3px solid #25D366' }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <WhatsAppIcon />
                </div>

                <div>
                  <h2 className="font-display font-bold uppercase text-xl mb-1" style={{ color: '#1e1e6e' }}>
                    WhatsApp
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Preferís hablar directo? Escribinos por WhatsApp y te respondemos al instante.
                  </p>
                </div>

                <p className="font-bold text-lg" style={{ color: '#1e1e6e' }}>
                  +54 9 2954 592312
                </p>

                <a
                  href="https://wa.me/5492954592312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-3 rounded-xl font-display font-bold uppercase tracking-wide text-sm text-white transition-all duration-200"
                  style={{ backgroundColor: '#25D366' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1da851'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#25D366'}
                >
                  <WhatsAppIcon />
                  Escribir por WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
