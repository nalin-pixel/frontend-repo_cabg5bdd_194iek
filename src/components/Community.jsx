export default function Community() {
  const pillars = [
    "Notion Pro",
    "N8N Deep Dive",
    "Lanza tu App",
    "Hábitos y ejecución",
    "Marca personal",
    "Networking"
  ]
  return (
    <section id="comunidad" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border border-black/10 p-10 bg-gradient-to-b from-white to-[#F7FBFF]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-[#0D0D0D]">Comunidad (próximamente)</h2>
              <p className="text-[#0D0D0D]/70 mt-2 max-w-2xl">Una cohorte enfocada en claridad, ejecución y resultados. Espacios guiados, accountability y playbooks probados.</p>
            </div>
            <a href="#waitlist" className="inline-flex px-4 py-2 rounded-md bg-[#0D0D0D] text-white text-sm font-semibold hover:bg-black">Únete a la lista de espera</a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {pillars.map((p) => (
              <div key={p} className="p-5 rounded-xl border border-black/10 bg-white">
                <h3 className="font-semibold text-[#0D0D0D]">{p}</h3>
                <p className="text-sm text-[#0D0D0D]/70 mt-1">Profundiza con frameworks claros y ejercicios accionables.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
