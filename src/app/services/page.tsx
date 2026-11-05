import { Smartphone, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";

const services = [
  { title: "Custom app development", desc: "Cross-platform iOS and Android apps.", points: ["Flutter", "Firebase", "Store launch"] },
  { title: "MVP in weeks", desc: "Validate your idea quickly.", points: ["Planning", "Core features", "Launch-ready"] },
  { title: "Audits & rescue", desc: "Fix slow or buggy apps.", points: ["Review", "Performance", "Bug fixing"] },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="text-4xl font-semibold">Services</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-3xl border p-7">
            <h2 className="text-2xl font-semibold">{s.title}</h2>
            <p className="mt-3 text-sm text-neutral-500">{s.desc}</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-600">
              {s.points.map((p) => <li key={p}>• {p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
