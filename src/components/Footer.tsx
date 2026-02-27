import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-width mx-auto px-6 text-center">
        <div className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
          <span>🌙</span>
          <span>Sweet Dreams</span>
        </div>
        <p className="text-slate-300 mb-1">Helping families sleep better, one night at a time.</p>
        <p className="text-xs text-slate-500 mt-2 mb-4">This guide is for informational purposes only and is not medical advice. Always consult your pediatrician.</p>
        
        <div className="flex justify-center gap-6 my-6 flex-wrap">
          <Link to="/" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Home</Link>
          <Link to="/preview" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Preview</Link>
          <Link to="/faq" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">FAQ</Link>
          <Link to="/purchase" className="text-slate-400 hover:text-yellow-400 text-sm transition-colors">Buy Now</Link>
        </div>
        
        <p className="text-xs text-slate-600">&copy; 2026 Sweet Dreams. All rights reserved.</p>
      </div>
    </footer>
  )
}
