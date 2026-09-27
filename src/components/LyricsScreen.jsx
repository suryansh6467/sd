"use client"

export const dynamic = "force-static"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TextAnimate } from "./ui/text-animate"

const lyrics = [
    { text: "Tera hone laga hoon", start: 0 },
    { text: "Khone laga hoon", start: 3.2 },
    { text: "Jab se mila hoon", start: 6.7 },
    { text: "Tera hone laga hoon", start: 10.5 },
    { text: "Khone laga hoon", start: 14.5 },
    { text: "Jab se mila hoon", start: 18.7 },
]

export default function LyricsScreen({ audioRef, onComplete }) {
    const [currentLyricIndex, setCurrentLyricIndex] = useState(0)

    useEffect(() => {
        const audio = audioRef?.current

        if (!audio) return

        const updateLyrics = () => {
            const time = audio.currentTime

            let index = 0

            for (let i = lyrics.length - 1; i >= 0; i--) {
                if (time >= lyrics[i].start) {
                    index = i
                    break
                }
            }

            setCurrentLyricIndex(index)

            if (
                index === lyrics.length - 1 &&
                time >= lyrics[index].start
            ) {
                onComplete?.()
            }
        }

        audio.addEventListener("timeupdate", updateLyrics)

        return () => {
            audio.removeEventListener("timeupdate", updateLyrics)
        }
    }, [audioRef, onComplete])

    return (
        <div className="w-full max-w-3xl flex items-center justify-center px-5">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentLyricIndex}
                    initial={{
                        opacity: 0,
                        y: 15,
                        filter: "blur(8px)",
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    exit={{
                        opacity: 0,
                        y: -15,
                        filter: "blur(8px)",
                    }}
                    transition={{
                        duration: 0.45,
                        ease: "easeOut",
                    }}
                    className="text-center"
                >
                    <TextAnimate
                        by="word"
                        duration={0.8}
                        animation="blurInUp"
                        className="text-4xl md:text-5xl lg:text-6xl text-foreground drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] text-balance leading-normal"
                    >
                        {lyrics[currentLyricIndex].text}
                    </TextAnimate>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
