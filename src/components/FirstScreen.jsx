"use client"

import { motion } from "framer-motion"
import { Gift, Sparkles } from "lucide-react"

export default function FirstScreen({ onNext }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative px-5">

            <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center"
            >

                {/* Birthday Icon */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-8 relative"
                >
                    <motion.div
                        className="w-28 h-28 rounded-full bg-white/45 backdrop-blur-sm border border-white/70 shadow-lg flex items-center justify-center"
                        animate={{
                            y: [0, -7, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Gift
                            className="w-14 h-14 text-pink-500"
                            strokeWidth={1.5}
                        />
                    </motion.div>

                    {/* Sparkles */}
                    <motion.div
                        className="absolute -top-2 -right-2 text-pink-400"
                        animate={{
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        <Sparkles size={24} />
                    </motion.div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-4xl md:text-6xl text-center mb-5 max-w-3xl leading-tight text-[#4a3030] font-medium"
                >
                    Hey, DeepShikha
                    <span className="block text-pink-500">
                        There’s something special for you 🎀
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-lg md:text-xl text-[#654d4d] text-center max-w-md mb-9 font-light"
                >
                    A little birthday surprise made especially for you ✨
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    <motion.button
                        onClick={onNext}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="px-9 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-lg shadow-lg flex items-center gap-2 font-medium transition-all"
                    >
                        Open Your Surprise 🎁
                        <Gift size={20} />
                    </motion.button>
                </motion.div>

            </motion.div>
        </div>
    )
}