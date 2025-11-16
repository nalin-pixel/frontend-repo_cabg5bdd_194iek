export default function FinalCTA({ onSubmit }) {
  return (
    <section className="bg-[#0D0D0D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-extrabold">Únete a la newsletter y recibe un VSL creado para ti.</h2>
            <p className="text-white/70 mt-3">Da el primer paso, pero no solo.</p>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
            <input type="email" required placeholder="Tu email" className="w-full sm:max-w-xs px-4 py-3 rounded-md border border-white/10 bg-transparent placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3FB7FF]" />
            <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#3FB7FF] text-[#0D0D0D] font-semibold hover:brightness-95">Unirme ahora</button>
          </form>
        </div>
      </div>
    </section>
  );
}
