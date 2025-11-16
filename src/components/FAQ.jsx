import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito saber programar?",
    a: "No. Te enseño a construir con herramientas visuales y pasos claros. Si luego quieres código, también te muestro el camino.",
  },
  {
    q: "¿Qué es n8n?",
    a: "Un orquestador de automatizaciones open-source. Ideal para emprendedores que quieren escalar sin contratar un equipo.",
  },
  {
    q: "¿Cómo recibo el VSL personalizado?",
    a: "Te unes a la lista con tu email y te envío un video corto basado en tu segmento para tu próximo paso.",
  },
  {
    q: "¿Cuánto tiempo necesito a la semana?",
    a: "Con 2–3 horas bien enfocadas avanzas. La idea es cero ruido y máxima claridad.",
  },
  {
    q: "¿Cuándo abre la comunidad?",
    a: "Muy pronto. Únete a la lista de espera para enterarte primero.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-bold text-[#0D0D0D]">Preguntas frecuentes</h2>
        <div className="divide-y divide-black/10 mt-6">
          {faqs.map((item, i) => (
            <Disclosure key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Disclosure({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-2 text-left"
      >
        <span className="font-medium text-[#0D0D0D]">{q}</span>
        <span className="text-[#0D0D0D]/60">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="text-sm text-[#0D0D0D]/70 mt-2">{a}</p>}
    </div>
  );
}
