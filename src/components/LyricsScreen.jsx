"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { TextAnimate } from "./ui/text-animate"

const lyrics = [
    { text: "Tera hone laga hoon", start: 0.0 },
    { text: "Khone laga hoon", start: 4.5 },
    { text: "Jab se mila hoon", start: 8.0 },
    { text: "Tera hone laga hoon", start: 12.0 },
    { text: "Khone laga hoon", start: 16.5 },
    { text: "Jab se mila hoon", start: 20.0 },
]

export default function LyricsScreen({ audioRef, onComplete }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleLyrics, setVisibleLyrics] = useState([])
    const rafRef = useRef(null)

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

            setCurrentIndex(index)
            setVisibleLyrics(lyrics.slice(0, index + 1))

            if (
                index === lyrics.length - 1 &&
                time >= lyrics[index].start
            ) {
                onComplete?.()
            }

            rafRef.current = requestAnimationFrame(updateLyrics)
        }

        rafRef.current = requestAnimationFrame(updateLyrics)

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current)
            }
        }
    }, [audioRef, onComplete])

    return (
        <div className="w-full max-w-3xl px-5 flex justify-center">
            <div className="flex flex-col items-center text-center gap-3">

                {visibleLyrics.map((lyric, index) => {
                    const isCurrent = index === currentIndex

                    return (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 18,
                            }}
                            animate={{
                                opacity: isCurrent ? 1 : 0.45,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.45,
                                ease: "easeOut",
                            }}
                        >
                            {isCurrent ? (
                                <TextAnimate
                                    by="word"
                                    duration={0.8}
                                    animation="blurInUp"
                                    className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
                                >
                                    {lyric.text}
                                </TextAnimate>
                            ) : (
                                <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/50 leading-tight">
                                    {lyric.text}
                                </p>
                            )}
                        </motion.div>
                    )
                })}

            </div>
        </div>
    )
}
