import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Historia', to: '/historia' },
  { label: 'Deportes', to: '/deportes' },
  { label: 'Autoridades', to: '/autoridades' },
  { label: 'Ligas', to: '/ligas' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'E-Shop', to: '/shop' },
  { label: 'Contacto', to: '/contacto' },
]

function NavItem({ link }) {
  const [hovered, setHovered] = useState(false)
  return (
    <li className="relative">
      <NavLink
        to={link.to}
        end={link.to === '/'}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative block font-display font-semibold uppercase tracking-wide text-sm px-4 py-2 rounded-lg transition-all duration-200 outline-none"
        style={({ isActive }) => ({
          color: '#302782',
          backgroundColor: hovered || isActive ? '#F9EA1B22' : 'transparent',
        })}
      >
        {({ isActive }) => (
          <>
            <span className="relative z-10">{link.label}</span>
            {/* Indicador activo amarillo */}
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: '#F9EA1B',
                height: isActive ? '3px' : '0px',
                width: isActive ? '80%' : '0%',
                boxShadow: isActive ? '0 0 8px #F9EA1B99' : 'none',
              }}
            />
          </>
        )}
      </NavLink>
    </li>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-lg border-b-2 border-allboys-yellow' : 'border-b border-gray-100'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Club Atlético All Boys"
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-200"
            />
            <div className="hidden sm:block leading-tight">
              <p className="font-display font-bold uppercase tracking-widest text-sm" style={{ color: '#2E2DA8' }}>
                Club All Boys
              </p>
              <p className="font-display text-xs font-medium tracking-wider" style={{ color: '#DFD018' }}>
                Santa Rosa · La Pampa
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <NavItem key={link.label} link={link} />
            ))}
          </ul>

          {/* CTA desktop */}
          <Link
            to="/login"
            className="hidden lg:flex items-center gap-2 font-display font-bold uppercase tracking-wide text-sm px-5 py-2 rounded-lg transition-all duration-200 border-2"
            style={{ color: '#2E2DA8', borderColor: '#2E2DA8' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2E2DA8'; e.currentTarget.style.color = 'white' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#2E2DA8' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
              <polyline points="10 17 15 12 10 7" />
              <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
            Ingresar
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#2E2DA8' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="border-t px-4 py-3" style={{ borderColor: '#F9EA1B', backgroundColor: '#F8F8FF' }}>
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 font-display font-semibold uppercase tracking-wide text-sm px-4 py-3 rounded-lg transition-all duration-200"
                  style={({ isActive }) => ({
                    color: '#302782',
                    backgroundColor: isActive ? '#F9EA1B30' : 'transparent',
                    borderLeft: isActive ? '4px solid #F9EA1B' : '4px solid transparent',
                    fontWeight: isActive ? 800 : 600,
                  })}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span
                          className="ml-auto w-2 h-2 rounded-full"
                          style={{ backgroundColor: '#F9EA1B', boxShadow: '0 0 6px #F9EA1B' }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t mt-3" style={{ borderColor: '#2E2DA820' }}>
            <Link
              to="/login"
              onClick={handleLinkClick}
              className="btn-primary block text-center text-sm py-2"
            >
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
