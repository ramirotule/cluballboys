import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import SocioPanel, { SECTIONS } from '../components/dashboard/SocioPanel'
import AdminPanel from '../components/dashboard/AdminPanel'
import LigasPanel from '../components/dashboard/LigasPanel'
import AuspiciantesPanel from '../components/dashboard/AuspiciantesPanel'
import CantinaPanel from '../components/dashboard/CantinaPanel'
import { LogOut, Menu, X, Newspaper, User, Activity, CreditCard, IdCard, Trophy, Handshake, UtensilsCrossed } from 'lucide-react'

const ADMIN_SECTIONS = [
  { id: 'noticias',      label: 'Noticias',      icon: Newspaper       },
  { id: 'ligas',         label: 'Ligas',         icon: Trophy          },
  { id: 'cantina',       label: 'Cantina',       icon: UtensilsCrossed },
  { id: 'auspiciantes',  label: 'Auspiciantes',  icon: Handshake       },
]

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const [section, setSection] = useState(user?.role === 'admin' ? 'noticias' : 'datos')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (!user) return <Navigate to="/login" replace />

  const sections = user.role === 'admin' ? ADMIN_SECTIONS : SECTIONS
  const roleLabel = user.role === 'admin' ? 'Administrador' : 'Socio'

  const handleSection = (id) => { setSection(id); setSidebarOpen(false) }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#f3f4f6' }}>

      {/* Top bar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between h-16 px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg"
              style={{ color: '#1e1e6e' }}
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <img src="/logo.png" alt="All Boys" className="h-9 w-auto" />
            <div className="hidden sm:block">
              <p className="font-display font-bold uppercase text-sm leading-tight" style={{ color: '#1e1e6e' }}>Panel</p>
              <p className="text-xs" style={{ color: '#F9EA1B' }}>{roleLabel}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="font-semibold text-sm leading-tight" style={{ color: '#1e1e6e' }}>{user.nombre}</p>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-display font-black text-sm text-white"
              style={{ background: 'linear-gradient(135deg, #2d2d9e, #1e1e6e)' }}
            >
              {user.nombre.split(' ').map(n => n[0]).slice(0, 2).join('')}
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-sm font-display font-bold uppercase tracking-wide px-3 py-2 rounded-lg border-2 transition-all duration-200"
              style={{ color: '#1e1e6e', borderColor: '#e5e7eb' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#1e1e6e' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb' }}
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Salir</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full">

        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{ top: '64px' }}
        >
          {/* User info mobile */}
          <div className="p-5 border-b border-gray-100 lg:hidden">
            <p className="font-bold text-sm" style={{ color: '#1e1e6e' }}>{user.nombre}</p>
            <p className="text-xs text-gray-400">{user.email}</p>
          </div>

          <nav className="flex-1 p-4">
            <p className="text-xs font-display font-bold uppercase tracking-widest mb-3 px-2" style={{ color: '#1e1e6e50' }}>
              {user.role === 'admin' ? 'Administración' : 'Mi cuenta'}
            </p>
            <ul className="flex flex-col gap-1">
              {sections.map(({ id, label, icon: Icon }) => {
                const active = section === id
                return (
                  <li key={id}>
                    <button
                      onClick={() => handleSection(id)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-display font-bold uppercase tracking-wide transition-all duration-200 text-left"
                      style={{
                        backgroundColor: active ? '#1e1e6e' : 'transparent',
                        color: active ? 'white' : '#1e1e6e80',
                      }}
                      onMouseEnter={e => { if (!active) e.currentTarget.style.backgroundColor = '#1e1e6e10' }}
                      onMouseLeave={e => { if (!active) e.currentTarget.style.backgroundColor = 'transparent' }}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {label}
                      {active && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#F9EA1B]" />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Nro socio badge */}
          {user.role === 'socio' && (
            <div className="p-4 border-t border-gray-100">
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: '#1e1e6e08' }}>
                <p className="text-xs text-gray-400 font-display uppercase tracking-widest">N° Socio</p>
                <p className="font-display font-black text-2xl" style={{ color: '#1e1e6e' }}>#{user.nroSocio}</p>
              </div>
            </div>
          )}
        </aside>

        {/* Overlay mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-20 bg-black/30 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main content */}
        <main className="flex-1 p-6 lg:p-10 min-w-0">
          {user.role === 'socio' && <SocioPanel section={section} />}
          {user.role === 'admin' && section === 'noticias' && <AdminPanel />}
          {user.role === 'admin' && section === 'ligas' && <LigasPanel />}
          {user.role === 'admin' && section === 'cantina' && <CantinaPanel />}
          {user.role === 'admin' && section === 'auspiciantes' && <AuspiciantesPanel />}
        </main>
      </div>
    </div>
  )
}
