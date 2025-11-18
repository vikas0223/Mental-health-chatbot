'use client'

import { useState } from 'react'
import { Mic } from 'lucide-react'

export function ChatInterface() {
  const [input, setInput] = useState('')
  const [isListening, setIsListening] = useState(false)

  const handleMicClick = () => {
    setIsListening(!isListening)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInput('')
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center w-full bg-slate-900/50 border border-cyan-500/40 rounded-full px-6 py-3 shadow-lg hover:border-cyan-500/60 transition-colors duration-300"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="How are you feeling today?"
          className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none text-sm font-light"
        />

        <div className="flex items-center gap-3 ml-2">
          {/* Indicator dot */}
          <div className={`w-2 h-2 rounded-full transition-colors ${isListening ? 'bg-purple-500' : 'bg-slate-600'}`} />

          {/* Microphone button */}
          <button
            type="button"
            onClick={handleMicClick}
            className={`p-2 rounded-full transition-all duration-300 ${
              isListening
                ? 'bg-purple-500/30 text-purple-300'
                : 'text-slate-400 hover:text-blue-400'
            }`}
            aria-label="Voice input"
          >
            <Mic className="w-5 h-5" />
          </button>
        </div>
      </form>

      {/* Subtle supportive message */}
      <p className="text-center text-slate-500 text-xs mt-4 font-light">
        Everything shared here is safe and confidential
      </p>
    </div>
  )
}
