export default function SocialProof() {
  const items = [
    { title: "Antes / Después", desc: "De caos a claridad en 2 semanas" },
    { title: "Automatización A", desc: "Ahorro de 8h/semana" },
    { title: "Testimonio real", desc: "“Llegué a mis primeros $1K con tu guía”" },
    { title: "Caso B", desc: "Implementación n8n con ROI 5x" },
    { title: "Resultado cliente", desc: "Sistema Notion que ordena su operación" },
    { title: "Mini estudio", desc: "40% menos tareas repetitivas" },
  ]
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold text-[#0D0D0D]">Autoridad & Social Proof</h2>
        <p className="text-[#0D0D0D]/60 mt-2">Resultados y evidencias en un grid limpio.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map((it) => (
            <div key={it.title} className="p-5 rounded-xl border border-black/10 bg-white">
              <div className="w-full aspect-video rounded-md bg-[#F2F6FA] border border-black/5 mb-3" />
              <h3 className="font-semibold text-[#0D0D0D]">{it.title}</h3>
              <p className="text-sm text-[#0D0D0D]/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
