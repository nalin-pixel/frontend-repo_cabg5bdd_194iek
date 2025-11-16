export default function Hero({ onSubmit }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FF] text-[#0D0D0D] text-xs font-medium border border-[#3FB7FF]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#3FB7FF]" />
              CREATECH by Piru
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0D0D0D] leading-[1.1]">
              Menos ruido. Más claridad.
            </h1>
            <p className="mt-6 text-lg text-[#0D0D0D]/70 max-w-xl">
              Aprende a crear, automatizar y ejecutar sin complicarte. Un hub minimalista con guías, plantillas y comunidad para emprendedores tech de habla hispana.
            </p>

            <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3" id="newsletter">
              <input
                type="email"
                name="email"
                required
                placeholder="Tu email"
                className="w-full sm:max-w-xs px-4 py-3 rounded-md border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#3FB7FF]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#0D0D0D] text-white font-semibold hover:bg-black transition-colors"
              >
                Únete a la newsletter + recibe un VSL hecho para ti
              </button>
            </form>

            <p className="mt-3 text-sm text-[#0D0D0D]/60">Sin spam. Cancela cuando quieras.</p>
          </div>

          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-[#F8FBFF] to-white border border-black/5 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-[#0D0D0D]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
