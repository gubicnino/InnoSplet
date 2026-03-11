import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-background text-zinc-100 font-sans">
      <Header />
      <main className="flex-grow pt-20 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
