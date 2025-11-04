import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    try {
      setStatus('submitting');
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-2xl border border-white/80 bg-gradient-to-br from-purple-50 via-pink-50 to-white p-6 shadow-sm backdrop-blur">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Contact sales</h2>
          <p className="mt-2 text-slate-600">Tell us about your team and we’ll get back within a business day.</p>
        </div>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-800">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Your name"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm font-medium text-slate-800">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="you@company.com"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm font-medium text-slate-800">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              required
              rows={5}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="What would you like to achieve with PastelPay?"
            />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between gap-4">
            <p className="text-xs text-slate-600">By submitting, you agree to our terms and privacy policy.</p>
            <button
              disabled={status === 'submitting'}
              className="rounded-xl bg-slate-900 px-5 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
              type="submit"
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
          </div>
          {status === 'success' && (
            <div className="sm:col-span-2 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800">
              Thanks! We received your message and will reach out shortly.
            </div>
          )}
          {status === 'error' && (
            <div className="sm:col-span-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
