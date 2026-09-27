"use client"

import { useState, useEffect } from "react"

const lyricLines = [
  "हुआ, मुझे भी प्यार हुआ",
  "तेरा होने लगा हूँ",
  "खोने लगा हूँ, जब से मिला",
]

export default function LyricsScreen({
  onComplete,
  typingSpeed = 85,
  lineDelay = 600,
}) {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    if (currentLineIndex >= lyricLines.length) {
      setIsFinished(true)
      if (onComplete) onComplete()
      return
    }

    const targetLine = lyricLines[currentLineIndex]

    if (currentCharIndex < targetLine.length) {
      const charTimer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev]
          updated[currentLineIndex] = targetLine.slice(0, currentCharIndex + 1)
          return updated
        })
        setCurrentCharIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(charTimer)
    } else {
      // Line complete hone par delay
      const lineTimer = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1)
        setCurrentCharIndex(0)
      }, lineDelay)

      return () => clearTimeout(lineTimer)
    }
  }, [currentLineIndex, currentCharIndex, typingSpeed, lineDelay, onComplete])

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#262c33] p-6 font-sans">
      <div className="w-full max-w-lg text-left">
        <div className="text-2xl md:text-3xl font-semibold leading-relaxed tracking-wide text-white">
          {displayedLines.map((line, idx) => (
            <div key={idx} className="flex items-center flex-wrap">
              <span>{line}</span>
              {/* Active line par cursor dikhana */}
              {idx === currentLineIndex && !isFinished && (
                <span className="ml-1.5 inline-block h-6 w-2.5 bg-[#8f9aa6] animate-pulse align-middle" />
              )}
            </div>
          ))}
          {/* Pehla word shuru hone se pehle cursor */}
          {displayedLines.length === 0 && (
            <span className="inline-block h-6 w-2.5 bg-[#8f9aa6] animate-pulse align-middle" />
          )}
        </div>
      </div>
    </div>
  )
}
