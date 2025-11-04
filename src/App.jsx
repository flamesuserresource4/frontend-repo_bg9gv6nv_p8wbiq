import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 z-20 mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="h-7 w-7 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
        <span className="font-medium">AuraVoice</span>
      </div>
      <nav className="hidden items-center gap-6 text-sm text-white/70 sm:flex">
        <a href="#features" className="hover:text-white">Features</a>
        <a href="#pricing" className="hover:text-white">Pricing</a>
        <a href="#" className="hover:text-white">Login</a>
      </nav>
      <a
        href="#pricing"
        className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white hover:brightness-110"
      >
        Get Started
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
