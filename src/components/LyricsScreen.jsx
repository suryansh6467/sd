"use client"

export const dynamic = "force-static"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TextAnimate } from "./ui/text-animate"

const lyrics = [
    { text: "Tera hone laga hoon", duration: 4500, anim: 2.5 },
    { text: "Khone laga hoon", duration: 3500, anim: 2.0 },
    { text: "Jab se mila hoon", duration: 4000, anim: 2.2 },
    { text: "Tera hone laga hoon", duration: 4500, anim: 2.5 },
    { text: "Khone laga hoon", duration: 3500, anim: 2.0 },
    { text: "Jab se mila hoon", duration: 4000, anim: 2.2 },
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
    }, [currentLyricIndex, isAnimating, onComplete])

    return (
        <div className="w-full max-w-3xl flex flex-col items-center justify-center relative px-5">

            <div className="flex flex-col items-center text-center gap-3">

                <AnimatePresence>
                    {lyrics
                        .slice(0, currentLyricIndex + 1)
                        .map((lyric, index) => {

                            const isCurrent = index === currentLyricIndex

                            return (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        y: 25,
                                        scale: 0.95,
                                    }}
                                    animate={{
                                        opacity: isCurrent ? 1 : 0.65,
                                        y: 0,
                                        scale: 1,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                    }}
                                >
                                    {isCurrent ? (
                                        <TextAnimate
                                            by="word"
                                            duration={lyric.anim}
                                            animation="blurInUp"
                                            className="text-4xl md:text-5xl lg:text-6xl text-foreground text-balance leading-tight"
                                        >
                                            {lyric.text}
                                        </TextAnimate>
                                    ) : (
                                        <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/70 leading-tight">
                                            {lyric.text}
                                        </p>
                                    )}
                                </motion.div>
                            )
                        })}
                </AnimatePresence>

            </div>

        </div>
    )
}
