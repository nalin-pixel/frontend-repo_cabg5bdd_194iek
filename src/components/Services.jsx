export default function Services() {
  const services = [
    "Automatización para negocios",
    "Notion para empresas",
    "Apps no-code",
    "Marca personal",
    "Roadmaps personalizados"
  ]
  return (
    <section id="servicios" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border border-black/10 p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-[#0D0D0D]">Servicios (próximamente)</h2>
              <p className="text-[#0D0D0D]/70 mt-2">Reservas abiertas pronto. Trabajemos juntos para crear sistemas que funcionen.</p>
            </div>
            <button className="inline-flex px-4 py-2 rounded-md bg-[#EAF6FF] text-[#0D0D0D] text-sm font-semibold border border-[#3FB7FF]/30">Pronto podrás agendar una llamada</button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {services.map((s) => (
              <div key={s} className="p-5 rounded-xl border border-black/10 bg-white">
                <h3 className="font-semibold text-[#0D0D0D]">{s}</h3>
                <p className="text-sm text-[#0D0D0D]/70 mt-1">Diseños simples, impacto real. Enfoque en claridad y resultados.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
