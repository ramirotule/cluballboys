import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

// Usuarios mock — reemplazar con backend real
const MOCK_USERS = {
  'socio@allboys.com': {
    id: 1,
    role: 'socio',
    nombre: 'Juan Carlos Pérez',
    email: 'socio@allboys.com',
    dni: '28.456.789',
    nroSocio: '00847',
    telefono: '+54 9 2954 123456',
    direccion: 'Av. Spinetto 1234, Santa Rosa',
    fechaAlta: '15/03/2018',
    foto: null,
    actividades: ['Fútbol', 'Natación'],
    cuotas: [
      { mes: 'Enero', estado: 'pagada', fecha: '05/01/2026' },
      { mes: 'Febrero', estado: 'pagada', fecha: '03/02/2026' },
      { mes: 'Marzo', estado: 'pagada', fecha: '07/03/2026' },
      { mes: 'Abril', estado: 'pagada', fecha: '02/04/2026' },
      { mes: 'Mayo', estado: 'pendiente', fecha: null },
      { mes: 'Junio', estado: 'pendiente', fecha: null },
      { mes: 'Julio', estado: 'pendiente', fecha: null },
      { mes: 'Agosto', estado: 'pendiente', fecha: null },
      { mes: 'Septiembre', estado: 'pendiente', fecha: null },
      { mes: 'Octubre', estado: 'pendiente', fecha: null },
      { mes: 'Noviembre', estado: 'pendiente', fecha: null },
      { mes: 'Diciembre', estado: 'pendiente', fecha: null },
    ],
  },
  'admin@allboys.com': {
    id: 2,
    role: 'admin',
    nombre: 'José Luis Roston',
    email: 'admin@allboys.com',
    nroSocio: '00001',
  },
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (email, password) => {
    const found = MOCK_USERS[email]
    if (found) { setUser(found); return true }
    return false
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
