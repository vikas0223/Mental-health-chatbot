'use client'

export function EmpathyIcon() {
  return (
    <div className="relative">
      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-400 flex items-center justify-center shadow-2xl">
        {/* Simple serene face icon */}
        <svg
          className="w-12 h-12 text-white"
          fill="none"
          viewBox="0 0 60 60"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Left eye */}
          <circle cx="22" cy="22" r="3" fill="currentColor" />

          {/* Right eye */}
          <circle cx="38" cy="22" r="3" fill="currentColor" />

          {/* Gentle smile arc */}
          <path d="M 18 36 Q 30 42 42 36" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  )
}
