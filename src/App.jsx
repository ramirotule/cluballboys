import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { LigasProvider } from './context/LigasContext'
import { AuspiciantesProvider } from './context/AuspiciantesContext'
import { CantinaProvider } from './context/CantinaContext'
import { NoticiasProvider } from './context/NoticiasContext'
import { DatosBancariosProvider } from './context/DatosBancariosContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import HistoriaPage from './pages/HistoriaPage'
import DeportesPage from './pages/DeportesPage'
import AutoridadesPage from './pages/AutoridadesPage'
import NoticiasPage from './pages/NoticiasPage'
import ContactoPage from './pages/ContactoPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ShopPage from './pages/ShopPage'
import CheckoutPage from './pages/CheckoutPage'
import LigasPage from './pages/LigasPage'
import NoticiaPage from './pages/NoticiaPage'
import CantinaPage from './pages/CantinaPage'
import AuspiciantesPage from './pages/AuspiciantesPage'

function Layout() {
  const { pathname } = useLocation()
  const isLogin = pathname === '/login' || pathname === '/dashboard'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      {!isLogin && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/historia" element={<HistoriaPage />} />
          <Route path="/deportes" element={<DeportesPage />} />
          <Route path="/autoridades" element={<AutoridadesPage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/ligas" element={<LigasPage />} />
          <Route path="/noticias/:id" element={<NoticiaPage />} />
          <Route path="/cantina" element={<CantinaPage />} />
          <Route path="/auspiciantes" element={<AuspiciantesPage />} />
        </Routes>
      </main>
      {!isLogin && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <NoticiasProvider>
      <LigasProvider>
        <AuspiciantesProvider>
          <CantinaProvider>
            <DatosBancariosProvider>
              <BrowserRouter>
                <Layout />
              </BrowserRouter>
            </DatosBancariosProvider>
          </CantinaProvider>
        </AuspiciantesProvider>
      </LigasProvider>
    </NoticiasProvider>
  )
}
