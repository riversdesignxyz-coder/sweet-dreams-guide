import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Preview from './pages/Preview'
import FAQ from './pages/FAQ'
import Purchase from './pages/Purchase'
import ThankYou from './pages/ThankYou'
import './App.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </Router>
  )
}

export default App
