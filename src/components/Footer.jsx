import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050508] py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
          <span className="text-sm text-white/80">© {new Date().getFullYear()} AuraVoice. All rights reserved.</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
