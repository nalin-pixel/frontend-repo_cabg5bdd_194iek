import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Hub from './components/Hub'
import Community from './components/Community'
import Services from './components/Services'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = form.querySelector('input[type="email"]').value

    // Placeholder action: In producción, conectar n8n → Supabase → Mailer
    console.log('Lead capturado:', email)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-white text-[#0D0D0D]">
      <Navbar />
      <main>
        <Hero onSubmit={handleSubmit} />
        <About />
        <Hub />
        <Community />
        <Services />
        <SocialProof />
        <FAQ />
        <FinalCTA onSubmit={handleSubmit} />
      </main>

      {submitted && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-md bg-[#0D0D0D] text-white text-sm shadow-lg">
          Gracias! Revisa tu correo para el VSL personalizado.
        </div>
      )}

      <footer className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-[#0D0D0D]/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Piru. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#0D0D0D]">YouTube</a>
            <a href="#" className="hover:text-[#0D0D0D]">Twitter</a>
            <a href="#" className="hover:text-[#0D0D0D]">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
