'use client'

import { useState } from 'react'
import { EmpathyIcon } from '@/components/empathy-icon'
import { ChatInterface } from '@/components/chat-interface'

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
          </svg>
          <span className="text-white font-semibold">Saanjh</span>
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </div>
        <button className="flex items-center gap-2 text-slate-300 hover:text-white transition">
          <span className="text-sm">Share</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7m0 0l-7 7m7-7H6" />
          </svg>
        </button>
      </header>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-6 max-w-2xl w-full">
          {/* Icon */}
          <EmpathyIcon />

          {/* Saanjh heading */}
          <h1 className="text-5xl font-bold text-white text-center">
            Saanjh
          </h1>

          {/* Tagline */}
          <p className="text-base text-slate-300 text-center font-light">
            your safe space to talk, vent, or just breathe.
          </p>

          {/* Chat Interface */}
          <div className="w-full mt-4">
            <ChatInterface />
          </div>
        </div>
      </div>

      <footer className="flex items-center justify-center gap-2 text-slate-400 text-sm pb-6">
        <svg
          className="w-4 h-4 text-orange-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M12.089 1.711a.5.5 0 0 0-.978 0l-2.205 8.149H1.197a.5.5 0 0 0-.294.909l6.571 4.776-2.505 8.148a.5.5 0 0 0 .768.541l6.57-4.776 6.57 4.776a.5.5 0 0 0 .768-.541l-2.505-8.148 6.57-4.776a.5.5 0 0 0-.293-.909H14.303l-2.205-8.149z" />
        </svg>
        <span>by Botpress</span>
      </footer>
    </main>
  )
}
