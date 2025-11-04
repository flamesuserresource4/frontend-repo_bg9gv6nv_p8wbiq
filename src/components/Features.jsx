import React from 'react';
import { Bot, Zap, Shield, Headphones } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Human-like Conversations',
    desc: 'Natural voice with memory, intent detection, and context carry-over across turns.'
  },
  {
    icon: Zap,
    title: 'Real-time Execution',
    desc: 'Trigger webhooks, update CRMs, and book meetings while speaking to your leads.'
  },
  {
    icon: Shield,
    title: 'Enterprise-grade Privacy',
    desc: 'SOC2-friendly logging, PII redaction, and region-pinned data retention controls.'
  },
  {
    icon: Headphones,
    title: 'Omnichannel Support',
    desc: 'Voice, phone, and web chat unified—hand off to humans with full context.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#050508] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(88,28,135,0.18),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Built for modern AI agencies</h2>
          <p className="mt-3 text-white/70">
            Launch bespoke agents for clients in minutes. Iterate fast, measure outcomes, and scale with confidence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/[0.07]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 text-fuchsia-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
