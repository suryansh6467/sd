"use client"

export const dynamic = "force-static"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TextAnimate } from "./ui/text-animate"

const lyrics = [
    const lyrics = [
    { text: "Tera hone laga hoon", duration: 2800, anim: 1.8 },
    { text: "Khone laga hoon", duration: 2600, anim: 1.6 },
    { text: "Jab se mila hoon", duration: 3000, anim: 1.8 },
    { text: "Tera hone laga hoon", duration: 2800, anim: 1.8 },
    { text: "Khone laga hoon", duration: 2600, anim: 1.6 },
    { text: "Jab se mila hoon", duration: 3200, anim: 1.8 },
    ]
  ]  
  

export default function LyricsScreen({ onComplete }) {
    const [currentLyricIndex, setCurrentLyricIndex] = useState(0)
    const [isAnimating, setIsAnimating] = useState(true)

    useEffect(() => {
        if (!isAnimating) return

        const currentDuration = lyrics[currentLyricIndex].duration

        const timer = setTimeout(() => {
            if (currentLyricIndex < lyrics.length - 1) {
                setCurrentLyricIndex(prev => prev + 1)
            } else {
                setIsAnimating(false)
                onComplete()

            }
        }, currentDuration)

        return () => clearTimeout(timer)
    }, [isAnimating, currentLyricIndex, onComplete])


    return (
        <div className="w-full max-w-2xl lg:max-w-3xl flex flex-col items-center justify-center relative">
            <AnimatePresence mode="wait">
                {isAnimating && currentLyricIndex < lyrics.length && (
                    <motion.div
                        key={currentLyricIndex}
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.97 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="text-center"
                    >

                        <TextAnimate
                            by="word"
                            duration={lyrics[currentLyricIndex].anim}
                            animation="blurInUp"
                            className="text-4xl md:text-5xl lg:text-6xl text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] text-balance leading-normal"
                        >
                            {lyrics[currentLyricIndex].text}
                        </TextAnimate>


                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
