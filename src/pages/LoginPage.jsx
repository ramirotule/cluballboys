import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, CheckCircle, X, ScrollText, KeyRound, Send } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

function TerminosModal({ onClose }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      style={{ backgroundColor: '#00000070' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden"
        style={{ borderTop: '4px solid #F9EA1B' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1e1e6e' }}>
              <ScrollText className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-display font-black uppercase text-sm" style={{ color: '#1e1e6e' }}>Términos y Condiciones</h3>
              <p className="text-xs text-gray-400">Club Atlético All Boys · Santa Rosa, La Pampa</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors text-gray-400">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-5 flex flex-col gap-5 text-sm" style={{ color: '#374151' }}>

          <section>
            <h4 className="font-display font-bold uppercase text-xs tracking-widest mb-2" style={{ color: '#1e1e6e' }}>1. Condiciones de membresía</h4>
            <p className="text-gray-500 leading-relaxed">
              El registro en el sitio web del Club Atlético All Boys está habilitado exclusivamente para socios activos. El acceso a la plataforma digital no reemplaza la condición de socio, la cual se rige por el estatuto institucional vigente y requiere el pago de la cuota social correspondiente.
            </p>
          </section>

          <section>
            <h4 className="font-display font-bold uppercase text-xs tracking-widest mb-2" style={{ color: '#1e1e6e' }}>2. Uso de las instalaciones</h4>
            <p className="text-gray-500 leading-relaxed">
              El acceso a las instalaciones del club (estadio, natatorio, canchas, cantina y demás espacios) está sujeto a la condición de socio al día con sus obligaciones. El club se reserva el derecho de admisión y permanencia según lo establezca su reglamento interno.
            </p>
          </section>

          <section>
            <h4 className="font-display font-bold uppercase text-xs tracking-widest mb-2" style={{ color: '#1e1e6e' }}>3. Pago de cuotas</h4>
            <p className="text-gray-500 leading-relaxed">
              El incumplimiento en el pago de la cuota social por más de tres (3) meses consecutivos podrá dar lugar a la suspensión temporaria de los derechos del socio, incluyendo el acceso a las instalaciones y actividades del club, hasta regularizar la situación.
            </p>
          </section>

          <section>
            <h4 className="font-display font-bold uppercase text-xs tracking-widest mb-2" style={{ color: '#1e1e6e' }}>4. Código de conducta</h4>
            <p className="text-gray-500 leading-relaxed">
              Los socios se comprometen a mantener un comportamiento respetuoso hacia las autoridades, empleados, deportistas y demás socios del club. Cualquier conducta que atente contra los valores institucionales, la integridad física o moral de las personas podrá ser sancionada conforme al estatuto.
            </p>
          </section>

          <section>
            <h4 className="font-display font-bold uppercase text-xs tracking-widest mb-2" style={{ color: '#1e1e6e' }}>5. Privacidad y datos personales</h4>
            <p className="text-gray-500 leading-relaxed">
              Los datos personales ingresados al registrarse son utilizados exclusivamente para la gestión interna del club y la comunicación con el socio. No serán cedidos a terceros sin consentimiento expreso, en cumplimiento de la Ley N° 25.326 de Protección de Datos Personales de la República Argentina.
            </p>
          </section>

          <section>
            <h4 className="font-display font-bold uppercase text-xs tracking-widest mb-2" style={{ color: '#1e1e6e' }}>6. Derechos y obligaciones</h4>
            <p className="text-gray-500 leading-relaxed">
              Todo socio tiene derecho a participar de las actividades deportivas, culturales y sociales organizadas por el club, a votar y ser votado en elecciones institucionales (según categoría de socio) y a acceder a la información pública del club. A su vez, tiene la obligación de respetar el estatuto, el reglamento interno y las decisiones de la Comisión Directiva.
            </p>
          </section>

          <section>
            <h4 className="font-display font-bold uppercase text-xs tracking-widest mb-2" style={{ color: '#1e1e6e' }}>7. Modificaciones</h4>
            <p className="text-gray-500 leading-relaxed">
              El Club Atlético All Boys se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán comunicados a través del sitio web y/o por correo electrónico a los socios registrados.
            </p>
          </section>

          <p className="text-xs text-gray-400 border-t border-gray-100 pt-4">
            Última actualización: abril 2026 · Club Atlético All Boys, Hilario Lagos 435, Santa Rosa, La Pampa.
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl font-display font-bold uppercase text-sm transition-all duration-300"
            style={{ backgroundColor: '#1e1e6e', color: 'white' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#F9EA1B'; e.currentTarget.style.boxShadow = '0 0 20px #F9EA1B88, 0 0 6px #F9EA1BAA' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  )
}

function RecuperarModal({ onClose }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ backgroundColor: '#00000070' }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
        style={{ borderTop: '4px solid #F9EA1B' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1e1e6e' }}>
              <KeyRound className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-display font-black uppercase text-sm" style={{ color: '#1e1e6e' }}>Recuperar contraseña</h3>
              <p className="text-xs text-gray-400">Te enviamos un link por mail</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 hover:border-gray-400 transition-colors text-gray-400">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-6 py-6">
          {sent ? (
            <div className="flex flex-col items-center text-center gap-4 py-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1e1e6e10' }}>
                <Send className="w-6 h-6" style={{ color: '#1e1e6e' }} />
              </div>
              <div>
                <h4 className="font-display font-black uppercase text-base mb-1" style={{ color: '#1e1e6e' }}>¡Listo!</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Si <span className="font-semibold" style={{ color: '#1e1e6e' }}>{email}</span> está registrado, vas a recibir un mail con el link para restablecer tu contraseña en los próximos minutos.
                </p>
                <p className="text-xs text-gray-400 mt-2">Revisá también tu carpeta de spam.</p>
              </div>
              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl font-display font-bold uppercase text-sm transition-all duration-300 mt-1"
                style={{ backgroundColor: '#1e1e6e', color: 'white' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#F9EA1B'; e.currentTarget.style.boxShadow = '0 0 20px #F9EA1B88, 0 0 6px #F9EA1BAA' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.boxShadow = 'none' }}
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-sm text-gray-500 leading-relaxed">
                Ingresá el correo electrónico asociado a tu cuenta y te enviaremos un link para restablecer tu contraseña.
              </p>
              <div>
                <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#1e1e6e' }}>
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#2E2DA860' }} />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm outline-none transition-all duration-200 bg-white"
                    style={{ color: '#2E2DA8' }}
                    onFocus={e => { e.target.style.borderColor = '#2E2DA8'; e.target.style.boxShadow = '0 0 0 3px #F9EA1B30' }}
                    onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl font-display font-bold uppercase text-sm transition-all duration-300"
                  style={{ backgroundColor: '#1e1e6e', color: 'white' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#F9EA1B'; e.currentTarget.style.boxShadow = '0 0 20px #F9EA1B88, 0 0 6px #F9EA1BAA' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  Enviar link
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl font-display font-bold uppercase text-sm border-2 transition-all"
                  style={{ borderColor: '#e5e7eb', color: '#6b7280' }}
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function InputField({ label, type, name, value, onChange, placeholder, icon: Icon, showToggle, onToggle, show }) {
  return (
    <div>
      <label className="block text-xs font-display font-bold uppercase tracking-widest mb-1.5" style={{ color: '#2E2DA8' }}>
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#2E2DA860' }} />
        <input
          type={show !== undefined ? (show ? 'text' : 'password') : type}
          name={name}
          value={value}
          onChange={onChange}
          required
          placeholder={placeholder}
          className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm outline-none transition-all duration-200 bg-white"
          style={{ color: '#2E2DA8' }}
          onFocus={e => { e.target.style.borderColor = '#2E2DA8'; e.target.style.boxShadow = '0 0 0 3px #F9EA1B30' }}
          onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
            style={{ color: '#2E2DA860' }}
          >
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  )
}

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [tab, setTab] = useState('login') // 'login' | 'register'
  const [showPass, setShowPass] = useState(false)
  const [showPassReg, setShowPassReg] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [loginError, setLoginError] = useState(false)

  const [showTerminos, setShowTerminos] = useState(false)
  const [showRecuperar, setShowRecuperar] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [regForm, setRegForm] = useState({ nombre: '', email: '', password: '' })

  const handleLoginChange = e => { setLoginError(false); setLoginForm({ ...loginForm, [e.target.name]: e.target.value }) }
  const handleRegChange = e => setRegForm({ ...regForm, [e.target.name]: e.target.value })

  const handleLogin = e => {
    e.preventDefault()
    const ok = login(loginForm.email, loginForm.password)
    if (ok) navigate('/dashboard')
    else setLoginError(true)
  }

  const handleRegister = e => {
    e.preventDefault()
    setRegistered(true)
  }

  return (
    <>
    {showTerminos && <TerminosModal onClose={() => setShowTerminos(false)} />}
    {showRecuperar && <RecuperarModal onClose={() => setShowRecuperar(false)} />}
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1e1e6e 0%, #2d2d9e 50%, #1a1a5e 100%)' }}
    >
      {/* Rayas de fondo */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="absolute top-0 bottom-0 w-8 bg-[#F9EA1B]" style={{ left: `${i * 5.5}%` }} />
        ))}
      </div>
      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#F9EA1B]/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#F9EA1B]/8 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">

        {/* Volver */}
        <div className="mb-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-display uppercase tracking-wide w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden" style={{ borderTop: '4px solid #F9EA1B' }}>

          {/* Tabs */}
          <div className="grid grid-cols-2">
            <button
              onClick={() => { setTab('login'); setRegistered(false) }}
              className="py-4 font-display font-bold uppercase text-sm tracking-wide transition-all duration-200"
              style={{
                color: tab === 'login' ? '#1e1e6e' : '#9ca3af',
                borderBottom: tab === 'login' ? '3px solid #F9EA1B' : '3px solid transparent',
                backgroundColor: tab === 'login' ? '#fafafa' : 'white',
              }}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => { setTab('register'); setRegistered(false) }}
              className="py-4 font-display font-bold uppercase text-sm tracking-wide transition-all duration-200"
              style={{
                color: tab === 'register' ? '#1e1e6e' : '#9ca3af',
                borderBottom: tab === 'register' ? '3px solid #F9EA1B' : '3px solid transparent',
                backgroundColor: tab === 'register' ? '#fafafa' : 'white',
              }}
            >
              Registrarse
            </button>
          </div>

          <div className="p-8">

            {/* LOGIN */}
            {tab === 'login' && (
              <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <div className="text-center mb-2">
                  <img src="/logo.png" alt="All Boys" className="h-20 w-auto mx-auto mb-4" />
                  <h2 className="font-display font-black uppercase text-xl" style={{ color: '#1e1e6e' }}>
                    Bienvenido de vuelta
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">Ingresá con tu cuenta de socio</p>
                </div>

                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  placeholder="tu@email.com"
                  icon={Mail}
                />
                <InputField
                  label="Contraseña"
                  type="password"
                  name="password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                  placeholder="Tu contraseña"
                  icon={Lock}
                  showToggle
                  onToggle={() => setShowPass(!showPass)}
                  show={showPass}
                />

                {loginError && (
                  <p className="text-sm text-red-500 text-center -mt-1 font-medium">
                    Email o contraseña incorrectos.
                  </p>
                )}

                <div className="flex justify-end">
                  <button type="button" onClick={() => setShowRecuperar(true)} className="text-xs font-semibold hover:underline" style={{ color: '#2E2DA8' }}>
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-display font-bold uppercase tracking-wide text-sm transition-all duration-300 mt-1"
                  style={{ backgroundColor: '#1e1e6e', color: 'white' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#F9EA1B'
                    e.currentTarget.style.boxShadow = '0 0 20px #F9EA1B88, 0 0 6px #F9EA1BAA'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'white'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  Ingresar
                </button>

                <p className="text-center text-xs text-gray-400">
                  ¿No tenés cuenta?{' '}
                  <button
                    type="button"
                    onClick={() => setTab('register')}
                    className="font-bold hover:underline"
                    style={{ color: '#1e1e6e' }}
                  >
                    Registrate acá
                  </button>
                </p>
              </form>
            )}

            {/* REGISTER */}
            {tab === 'register' && (
              <>
                {registered ? (
                  <div className="flex flex-col items-center text-center gap-4 py-8">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1e1e6e15' }}>
                      <CheckCircle className="w-8 h-8" style={{ color: '#1e1e6e' }} />
                    </div>
                    <h3 className="font-display font-black uppercase text-xl" style={{ color: '#1e1e6e' }}>
                      ¡Registro exitoso!
                    </h3>
                    <p className="text-gray-400 text-sm max-w-xs">
                      Te enviamos un mail de confirmación. Revisá tu bandeja de entrada para activar tu cuenta.
                    </p>
                    <button
                      onClick={() => { setTab('login'); setRegistered(false) }}
                      className="mt-2 w-full py-3 rounded-xl font-display font-bold uppercase tracking-wide text-sm transition-all duration-200"
                      style={{ backgroundColor: '#1e1e6e', color: 'white' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F9EA1B'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e1e6e'}
                    >
                      Iniciar sesión
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="flex flex-col gap-5">
                    <div className="text-center mb-2">
                      <img src="/logo.png" alt="All Boys" className="h-20 w-auto mx-auto mb-4" />
                      <h2 className="font-display font-black uppercase text-xl" style={{ color: '#1e1e6e' }}>
                        Creá tu cuenta
                      </h2>
                      <p className="text-gray-400 text-sm mt-1">Unite a la familia albiceleste</p>
                    </div>

                    <InputField
                      label="Nombre completo"
                      type="text"
                      name="nombre"
                      value={regForm.nombre}
                      onChange={handleRegChange}
                      placeholder="Juan Pérez"
                      icon={User}
                    />
                    <InputField
                      label="Email"
                      type="email"
                      name="email"
                      value={regForm.email}
                      onChange={handleRegChange}
                      placeholder="tu@email.com"
                      icon={Mail}
                    />
                    <InputField
                      label="Contraseña"
                      type="password"
                      name="password"
                      value={regForm.password}
                      onChange={handleRegChange}
                      placeholder="Mínimo 8 caracteres"
                      icon={Lock}
                      showToggle
                      onToggle={() => setShowPassReg(!showPassReg)}
                      show={showPassReg}
                    />

                    <p className="text-xs text-gray-400 -mt-2">
                      Al registrarte aceptás los{' '}
                      <button type="button" onClick={() => setShowTerminos(true)} className="font-semibold underline" style={{ color: '#1e1e6e' }}>
                        términos y condiciones
                      </button>{' '}
                      del club.
                    </p>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-display font-bold uppercase tracking-wide text-sm transition-all duration-300 mt-1"
                      style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.boxShadow = '0 0 20px #1e1e6e88, 0 0 6px #1e1e6eAA'
                        e.currentTarget.style.backgroundColor = '#f0db00'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.boxShadow = 'none'
                        e.currentTarget.style.backgroundColor = '#F9EA1B'
                      }}
                    >
                      Crear cuenta
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      ¿Ya tenés cuenta?{' '}
                      <button
                        type="button"
                        onClick={() => setTab('login')}
                        className="font-bold hover:underline"
                        style={{ color: '#1e1e6e' }}
                      >
                        Iniciá sesión
                      </button>
                    </p>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
