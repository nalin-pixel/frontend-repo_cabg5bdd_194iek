export default function Hub() {
  const items = [
    { title: "Empieza Aquí", desc: "Video introductorio para orientarte", tag: "Video", href: "#" },
    { title: "Guías gratuitas", desc: "Aprende rápido con claridad", tag: "Guías", href: "#" },
    { title: "Plantillas Notion", desc: "Sistemas listos para usar", tag: "Notion", href: "#" },
    { title: "Automatizaciones", desc: "Workflows con n8n", tag: "n8n", href: "#" },
    { title: "Prompts", desc: "Atajos IA listos", tag: "IA", href: "#" },
    { title: "Videos YouTube", desc: "Tutoriales y casos reales", tag: "YouTube", href: "#" },
    { title: "Archivo newsletter", desc: "Todas las ediciones", tag: "Email", href: "#" },
  ]

  return (
    <section id="hub" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#0D0D0D]">Hub de valor</h2>
          <p className="text-sm text-[#0D0D0D]/60">Recursos gratuitos, claros y accionables.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <a key={it.title} href={it.href} className="group p-5 rounded-xl border border-black/10 bg-white hover:border-[#3FB7FF] transition-colors">
              <div className="text-xs px-2 py-1 rounded bg-[#EAF6FF] inline-block text-[#0D0D0D] border border-[#3FB7FF]/30">{it.tag}</div>
              <h3 className="mt-3 font-semibold text-[#0D0D0D]">{it.title}</h3>
              <p className="text-sm text-[#0D0D0D]/70 mt-1">{it.desc}</p>
              <div className="mt-4 text-sm text-[#3FB7FF]">Explorar →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
