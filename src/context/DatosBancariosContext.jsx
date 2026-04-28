import { createContext, useContext, useState } from 'react'

const INITIAL = {
  titular: 'Club Atlético All Boys',
  cbu:     '0930363611200000404554',
  alias:   'ALLBOYS.CLUB.LP',
  cuit:    '33-52824935-9',
  banco:   'Banco de La Pampa',
  cuenta:  "102'381156/4",
}

const DatosBancariosContext = createContext(null)

export function DatosBancariosProvider({ children }) {
  const [datos, setDatos] = useState(INITIAL)
  const actualizar = (data) => setDatos(prev => ({ ...prev, ...data }))

  return (
    <DatosBancariosContext.Provider value={{ datos, actualizar }}>
      {children}
    </DatosBancariosContext.Provider>
  )
}

export const useDatosBancarios = () => useContext(DatosBancariosContext)
