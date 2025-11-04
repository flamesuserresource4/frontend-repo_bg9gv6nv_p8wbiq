import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    cadence: 'mo',
    features: [
      '1 agent seat',
      'Up to 1,000 minutes',
      'Basic analytics',
      'Email support',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$199',
    cadence: 'mo',
    features: [
      '3 agent seats',
      'Up to 10,000 minutes',
      'Playbooks & webhooks',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: '',
    features: [
      'Unlimited seats',
      'Usage-based minutes',
      'Dedicated SSO & SLAs',
      'Solutions engineering',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(59,7,100,0.2),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start small and scale as your client base grows.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-[1px] ${
                plan.highlight
                  ? 'border-transparent bg-gradient-to-r from-fuchsia-500 to-indigo-500'
                  : 'border-white/10 bg-white/10'
              }`}
            >
              <div className="h-full rounded-[1rem] bg-black/80 p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.highlight && (
                    <span className="rounded-full bg-fuchsia-600/20 px-3 py-1 text-xs text-fuchsia-300">Most popular</span>
                  )}
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.cadence && <span className="mb-1 text-white/60">/{plan.cadence}</span>}
                </div>

                <ul className="mt-6 space-y-2 text-sm text-white/80">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 text-fuchsia-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-medium transition ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white hover:brightness-110'
                      : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
