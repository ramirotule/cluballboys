import { createContext, useContext, useState } from 'react'

const INITIAL_MENU = [
  {
    id: 1,
    categoria: 'Sandwiches',
    icon: '🥪',
    items: [
      { id: 101, nombre: 'Sandwich de milanesa', descripcion: 'Milanesa de ternera con lechuga, tomate y mayonesa', precio: 3500 },
      { id: 102, nombre: 'Sandwich de jamón y queso', descripcion: 'Jamón cocido, queso y manteca en pan árabe', precio: 2800 },
      { id: 103, nombre: 'Sandwich de lomito', descripcion: 'Lomito a la plancha con morrones y queso fundido', precio: 4200 },
      { id: 104, nombre: 'Sandwich veggie', descripcion: 'Berenjena grillada, queso, tomate y rúcula', precio: 3000 },
    ],
  },
  {
    id: 2,
    categoria: 'Empanadas',
    icon: '🫔',
    items: [
      { id: 201, nombre: 'Empanada de carne', descripcion: 'Carne picada con cebolla, morrón y especias', precio: 900 },
      { id: 202, nombre: 'Empanada de jamón y queso', descripcion: 'Jamón y queso cremoso', precio: 850 },
      { id: 203, nombre: 'Empanada de humita', descripcion: 'Choclo cremoso con especias', precio: 850 },
      { id: 204, nombre: 'Empanada de pollo', descripcion: 'Pollo deshebrado con verduras salteadas', precio: 900 },
    ],
  },
  {
    id: 3,
    categoria: 'Minutas',
    icon: '🍳',
    items: [
      { id: 301, nombre: 'Milanesa napolitana', descripcion: 'Con salsa, jamón, queso y papas fritas', precio: 6500 },
      { id: 302, nombre: 'Milanesa con papas', descripcion: 'Milanesa de ternera con papas fritas', precio: 5800 },
      { id: 303, nombre: 'Hamburguesa casera', descripcion: 'Con lechuga, tomate, cebolla y papas fritas', precio: 5500 },
      { id: 304, nombre: 'Revuelto gramajo', descripcion: 'Huevos revueltos con papas pay y jamón', precio: 4500 },
    ],
  },
  {
    id: 4,
    categoria: 'Bebidas',
    icon: '🥤',
    items: [
      { id: 401, nombre: 'Gaseosa (lata)', descripcion: 'Coca-Cola, Sprite, Fanta', precio: 1200 },
      { id: 402, nombre: 'Agua mineral', descripcion: 'Con o sin gas · 500ml', precio: 900 },
      { id: 403, nombre: 'Cerveza (porrón)', descripcion: 'Quilmes o Heineken', precio: 1800 },
      { id: 404, nombre: 'Café / Cortado', descripcion: 'Café espresso o cortado con leche', precio: 1000 },
      { id: 405, nombre: 'Mate cocido', descripcion: 'Con leche o con agua', precio: 800 },
      { id: 406, nombre: 'Jugo natural', descripcion: 'Naranja o limón exprimido', precio: 1400 },
    ],
  },
  {
    id: 5,
    categoria: 'Postres y snacks',
    icon: '🍰',
    items: [
      { id: 501, nombre: 'Facturas', descripcion: 'Medialunas, vigilantes o croissants', precio: 700 },
      { id: 502, nombre: 'Tostado', descripcion: 'Jamón y queso en pan lactal', precio: 1800 },
      { id: 503, nombre: 'Porción de torta', descripcion: 'Consultar sabores del día', precio: 2200 },
      { id: 504, nombre: 'Alfajor', descripcion: 'Triple de maicena o de chocolate', precio: 900 },
    ],
  },
]

const CantinaContext = createContext(null)

export function CantinaProvider({ children }) {
  const [menu, setMenu] = useState(INITIAL_MENU)

  // Categorías
  const agregarCategoria = (data) =>
    setMenu(prev => [...prev, { id: Date.now(), items: [], ...data }])

  const editarCategoria = (catId, data) =>
    setMenu(prev => prev.map(c => c.id === catId ? { ...c, ...data } : c))

  const eliminarCategoria = (catId) =>
    setMenu(prev => prev.filter(c => c.id !== catId))

  // Items
  const agregarItem = (catId, item) =>
    setMenu(prev => prev.map(c =>
      c.id === catId ? { ...c, items: [...c.items, { id: Date.now(), ...item }] } : c
    ))

  const editarItem = (catId, itemId, data) =>
    setMenu(prev => prev.map(c =>
      c.id === catId
        ? { ...c, items: c.items.map(i => i.id === itemId ? { ...i, ...data } : i) }
        : c
    ))

  const eliminarItem = (catId, itemId) =>
    setMenu(prev => prev.map(c =>
      c.id === catId ? { ...c, items: c.items.filter(i => i.id !== itemId) } : c
    ))

  return (
    <CantinaContext.Provider value={{ menu, agregarCategoria, editarCategoria, eliminarCategoria, agregarItem, editarItem, eliminarItem }}>
      {children}
    </CantinaContext.Provider>
  )
}

export const useCantina = () => useContext(CantinaContext)
