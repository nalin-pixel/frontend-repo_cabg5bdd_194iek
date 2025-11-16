export default function About() {
  return (
    <section className="bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#0D0D0D]">¿Quién es Piru?</h2>
            <p className="text-[#0D0D0D]/70">
              Soy Piru. Ayudo a emprendedores a ganar claridad y construir proyectos tech simples, accionables y rentables. Mi objetivo: construir el mejor hub de claridad tech en español.
            </p>
            <div className="p-5 rounded-lg border border-black/10 bg-white">
              <h3 className="font-semibold text-[#0D0D0D] mb-2">Qué estoy creando hoy</h3>
              <ul className="list-disc pl-5 space-y-1 text-[#0D0D0D]/70">
                <li>Guía express para lanzar tu primera automatización con n8n</li>
                <li>Plantilla de Notion para orden digital</li>
                <li>Mini VSL dinámico que te recomienda tu siguiente paso</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-[#F8FBFF] to-white border border-black/5 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-[#0D0D0D]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
