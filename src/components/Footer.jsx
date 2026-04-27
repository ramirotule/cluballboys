import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Historia', to: '/historia' },
  { label: 'Deportes', to: '/deportes' },
  { label: 'Autoridades', to: '/autoridades' },
  { label: 'Noticias', to: '/noticias' },
  { label: 'Shop', to: '/shop' },
  { label: 'Contacto', to: '/contacto' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/allboyslapampa/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/allboyslp/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://x.com/allboysprensa',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

const contactInfo = [
  { icon: MapPin, text: 'Hilario Lagos 435, Santa Rosa, La Pampa', href: null },
  { icon: Phone, text: '+54 9 2954 592312', href: 'https://wa.me/5492954592312' },
  { icon: Mail, text: 'info@cluballboyslapampa.org', href: 'mailto:info@cluballboyslapampa.org' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1e1e6e] text-white">
      {/* Barra amarilla superior */}
      <div className="h-1 bg-[#F9EA1B]" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand + redes */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="All Boys" className="h-14 w-auto" />
              <div>
                <p className="font-display font-bold uppercase tracking-widest text-base leading-tight">
                  All Boys
                </p>
                <p className="text-[#F9EA1B] text-xs font-display tracking-wider">
                  Santa Rosa · La Pampa
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Nuestras Redes Sociales
            </p>

            {/* Redes sociales */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: '#ffffff15' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#F9EA1B', e.currentTarget.style.color = '#1e1e6e')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff15', e.currentTarget.style.color = 'white')}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-display font-bold uppercase tracking-widest text-xs mb-5 text-[#F9EA1B]">
              Navegación
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/50 hover:text-[#F9EA1B] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display font-bold uppercase tracking-widest text-xs mb-5 text-[#F9EA1B]">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#F9EA1B' }} />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white/50 text-sm hover:text-[#F9EA1B] transition-colors duration-200 cursor-pointer"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-white/50 text-sm">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Club All Boys — Santa Rosa, La Pampa. Todos los derechos reservados.
          </p>
          {/* <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/30 hover:text-[#F9EA1B] transition-colors duration-200"
              >
                <span className="w-4 h-4 block">{icon}</span>
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  )
}
