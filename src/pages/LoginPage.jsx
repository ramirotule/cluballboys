import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, CheckCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

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
                  <button type="button" className="text-xs font-semibold hover:underline" style={{ color: '#2E2DA8' }}>
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-display font-bold uppercase tracking-wide text-sm transition-all duration-200 mt-1"
                  style={{ backgroundColor: '#1e1e6e', color: 'white' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F9EA1B'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e1e6e'}
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
                      <span className="font-semibold underline cursor-pointer" style={{ color: '#1e1e6e' }}>
                        términos y condiciones
                      </span>{' '}
                      del club.
                    </p>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-display font-bold uppercase tracking-wide text-sm transition-all duration-200 mt-1"
                      style={{ backgroundColor: '#F9EA1B', color: '#1e1e6e' }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1e1e6e'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#F9EA1B'}
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
  )
}
