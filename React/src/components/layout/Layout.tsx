import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col bg-background text-zinc-100 font-sans">
      <Header />
      <main className="flex-grow pt-20 w-full">{children}</main>
      <Footer />
    </div>
  )
}
