import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-black" aria-hidden />
          <div className="text-sm tracking-widest font-semibold text-black">CREATECH by Piru</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-black/80">
          <a href="#hub" className="hover:text-black transition-colors">Recursos</a>
          <a href="#comunidad" className="hover:text-black transition-colors">Comunidad</a>
          <a href="#servicios" className="hover:text-black transition-colors">Servicios</a>
          <a href="#faq" className="hover:text-black transition-colors">Q&A</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#newsletter" className="hidden sm:inline-flex px-3 py-1.5 rounded-md bg-[#0D0D0D] text-white text-sm hover:bg-black transition-colors">Únete</a>
          <button className="md:hidden p-2" aria-label="Abrir menú"><Menu className="w-5 h-5" /></button>
        </div>
      </div>
    </header>
  );
}
