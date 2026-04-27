import { createContext, useContext, useState } from 'react'

const FUTBOL_INIT = {
  proximosPartidos: [
    { id: 1, fecha: '2026-05-03', hora: '16:00', local: 'All Boys', visitante: 'Atlético Pampa', cancha: 'Estadio Municipal' },
    { id: 2, fecha: '2026-05-10', hora: '18:30', local: 'Deportivo Toay', visitante: 'All Boys', cancha: 'Cancha Toay' },
    { id: 3, fecha: '2026-05-17', hora: '15:00', local: 'All Boys', visitante: 'Racing SR', cancha: 'Estadio Municipal' },
  ],
  resultados: [
    { id: 1, fecha: '2026-04-26', local: 'All Boys', gLocal: 3, gVisitante: 1, visitante: 'Peñarol SR' },
    { id: 2, fecha: '2026-04-19', local: 'Ferro SR', gLocal: 0, gVisitante: 0, visitante: 'All Boys' },
    { id: 3, fecha: '2026-04-12', local: 'All Boys', gLocal: 2, gVisitante: 2, visitante: 'Independiente SR' },
    { id: 4, fecha: '2026-04-05', local: 'All Boys', gLocal: 4, gVisitante: 0, visitante: 'Deportivo Toay' },
  ],
  tabla: [
    { id: 1, equipo: 'All Boys',        pj: 8, pg: 5, pe: 2, pp: 1, gf: 16, gc: 7,  pts: 17 },
    { id: 2, equipo: 'Ferro SR',         pj: 8, pg: 5, pe: 1, pp: 2, gf: 14, gc: 9,  pts: 16 },
    { id: 3, equipo: 'Racing SR',        pj: 8, pg: 4, pe: 2, pp: 2, gf: 12, gc: 10, pts: 14 },
    { id: 4, equipo: 'Peñarol SR',       pj: 8, pg: 3, pe: 3, pp: 2, gf: 10, gc: 10, pts: 12 },
    { id: 5, equipo: 'Independiente SR', pj: 8, pg: 3, pe: 2, pp: 3, gf: 9,  gc: 11, pts: 11 },
    { id: 6, equipo: 'Deportivo Toay',   pj: 8, pg: 1, pe: 1, pp: 6, gf: 5,  gc: 19, pts: 4  },
  ],
  goleadores: [
    { id: 1, nombre: 'Martínez, Lucas',   equipo: 'All Boys',        goles: 9 },
    { id: 2, nombre: 'Rodríguez, Pablo',  equipo: 'Racing SR',        goles: 7 },
    { id: 3, nombre: 'López, Sebastián',  equipo: 'All Boys',        goles: 5 },
    { id: 4, nombre: 'Gómez, Facundo',    equipo: 'Ferro SR',         goles: 5 },
    { id: 5, nombre: 'Herrera, Matías',   equipo: 'Independiente SR', goles: 4 },
    { id: 6, nombre: 'Sánchez, Nicolás',  equipo: 'Peñarol SR',       goles: 3 },
  ],
}

const BASKET_INIT = {
  proximosPartidos: [
    { id: 1, fecha: '2026-05-04', hora: '20:00', local: 'All Boys', visitante: 'Ferro SR', cancha: 'Gimnasio Municipal' },
    { id: 2, fecha: '2026-05-11', hora: '21:00', local: 'Pico Básquet', visitante: 'All Boys', cancha: 'Club Pico' },
    { id: 3, fecha: '2026-05-18', hora: '20:30', local: 'All Boys', visitante: 'Independiente SR', cancha: 'Gimnasio Municipal' },
  ],
  resultados: [
    { id: 1, fecha: '2026-04-27', local: 'All Boys', gLocal: 72, gVisitante: 65, visitante: 'Racing SR' },
    { id: 2, fecha: '2026-04-20', local: 'Ferro SR', gLocal: 80, gVisitante: 74, visitante: 'All Boys' },
    { id: 3, fecha: '2026-04-13', local: 'All Boys', gLocal: 68, gVisitante: 60, visitante: 'Pico Básquet' },
    { id: 4, fecha: '2026-04-06', local: 'Independiente SR', gLocal: 55, gVisitante: 71, visitante: 'All Boys' },
  ],
  tabla: [
    { id: 1, equipo: 'All Boys',         pj: 8, pg: 6, pp: 2, pf: 560, pc: 510, pts: 14 },
    { id: 2, equipo: 'Ferro SR',          pj: 8, pg: 5, pp: 3, pf: 540, pc: 505, pts: 13 },
    { id: 3, equipo: 'Pico Básquet',      pj: 8, pg: 4, pp: 4, pf: 510, pc: 520, pts: 12 },
    { id: 4, equipo: 'Racing SR',         pj: 8, pg: 3, pp: 5, pf: 490, pc: 535, pts: 11 },
    { id: 5, equipo: 'Independiente SR',  pj: 8, pg: 2, pp: 6, pf: 470, pc: 550, pts: 10 },
  ],
}

const LigasContext = createContext(null)

export function LigasProvider({ children }) {
  const [futbol, setFutbol] = useState(FUTBOL_INIT)
  const [basket, setBasket] = useState(BASKET_INIT)

  const updateSection = (sport, section, newData) => {
    if (sport === 'futbol') setFutbol(prev => ({ ...prev, [section]: newData }))
    else setBasket(prev => ({ ...prev, [section]: newData }))
  }

  return (
    <LigasContext.Provider value={{ futbol, basket, updateSection }}>
      {children}
    </LigasContext.Provider>
  )
}

export const useLigas = () => useContext(LigasContext)
