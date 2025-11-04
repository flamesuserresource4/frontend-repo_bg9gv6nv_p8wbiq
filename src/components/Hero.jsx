import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance legibility without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,8,35,0.35),rgba(0,0,0,0.85))]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
          AI Voice Agent Platform
        </span>
        <h1 className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl md:text-7xl">
          Scale your agency with an AI voice agent that never sleeps
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-white/70">
          Book more calls, qualify leads, and deliver 24/7 concierge support with a futuristic, human-like voice agent.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 px-6 py-3 font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
          >
            Get Started
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            See Features
          </a>
        </div>

        {/* Subtle metrics */}
        <div className="mt-12 grid grid-cols-2 gap-6 text-left sm:grid-cols-4">
          {[
            { k: '99.9%', label: 'Uptime' },
            { k: '24/7', label: 'Real-time voice' },
            { k: '10x', label: 'Faster response' },
            { k: 'CSAT ↑', label: 'Happier clients' },
          ].map((m) => (
            <div key={m.label} className="rounded-xl border border-white/10 bg-black/30 p-4">
              <div className="text-xl font-semibold text-white">{m.k}</div>
              <div className="text-sm text-white/60">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
