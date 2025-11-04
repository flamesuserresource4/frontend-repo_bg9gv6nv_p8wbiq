import React from 'react';

const posts = [
  {
    id: 1,
    title: 'Designing a softer fintech UI with pastels',
    excerpt: 'How color psychology improves trust and reduces friction in financial interfaces.',
    badge: 'Design',
    color: 'bg-pink-100',
  },
  {
    id: 2,
    title: 'Issuing virtual cards for e‑commerce teams',
    excerpt: 'Best practices for limits, approvals, and auditing virtual spend in real time.',
    badge: 'Product',
    color: 'bg-indigo-100',
  },
  {
    id: 3,
    title: 'Scaling payouts globally in minutes',
    excerpt: 'A technical look at instant payouts, treasury management, and fraud prevention.',
    badge: 'Engineering',
    color: 'bg-emerald-100',
  },
];

export default function BlogPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">From the blog</h2>
        <p className="mt-3 text-slate-600">Insights on payments, design, and building modern fintech.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="group rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur transition-colors hover:bg-white">
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full ${post.color} px-3 py-1 text-xs font-medium text-slate-800`}>
              {post.badge}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 group-hover:underline">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-slate-700">{post.excerpt}</p>
            <button className="mt-4 inline-flex items-center text-sm font-semibold text-slate-900 hover:underline">
              Read more →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
