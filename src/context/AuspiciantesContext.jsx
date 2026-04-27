import { createContext, useContext, useState } from 'react'

const INITIAL_AUSPICIANTES = [
  { id: 1, nombre: 'Legui Dentes de La Pampa', rubro: 'Salud dental', web: '', logo: null, logoPreview: null },
  { id: 2, nombre: 'Nova Pizza', rubro: 'Gastronomía', web: '', logo: null, logoPreview: null },
  { id: 3, nombre: 'Ascender', rubro: '', web: '', logo: null, logoPreview: null },
  { id: 4, nombre: 'Grupo Márquez', rubro: '', web: '', logo: null, logoPreview: null },
]

const AuspiciantesContext = createContext(null)

export function AuspiciantesProvider({ children }) {
  const [auspiciantes, setAuspiciantes] = useState(INITIAL_AUSPICIANTES)

  const agregar = (data) => setAuspiciantes(prev => [...prev, { id: Date.now(), ...data }])
  const editar  = (id, data) => setAuspiciantes(prev => prev.map(a => a.id === id ? { ...a, ...data } : a))
  const eliminar = (id) => setAuspiciantes(prev => prev.filter(a => a.id !== id))

  return (
    <AuspiciantesContext.Provider value={{ auspiciantes, agregar, editar, eliminar }}>
      {children}
    </AuspiciantesContext.Provider>
  )
}

export const useAuspiciantes = () => useContext(AuspiciantesContext)
