import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-900/5 ${scrolled ? 'shadow-md' : ''} transition-shadow`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
          <span className="text-2xl">🌙</span>
          <span>Sweet Dreams</span>
        </Link>
        
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden bg-none border-none text-2xl cursor-pointer text-slate-900"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''} flex-col md:flex-row gap-7 md:gap-7 items-center ${mobileMenuOpen ? 'flex absolute top-full left-0 right-0 bg-white shadow-md p-5 flex-col gap-4' : 'hidden md:flex'}`}>
          <Link to="/" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Home</Link>
          <Link to="/preview" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Free Preview</Link>
          <Link to="/faq" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">FAQ</Link>
          <Link 
            to="/purchase" 
            className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-slate-900 to-blue-600 hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm"
          >
            Get the Guide — R99
          </Link>
        </div>
      </nav>
    </header>
  )
}
