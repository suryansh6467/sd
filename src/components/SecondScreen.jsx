"use client"

import { motion } from "framer-motion"
import { Gift, Sparkles } from "lucide-react"

export default function SecondScreen({ onNext }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative px-5">

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center"
            >

                {/* Gift Icon */}
                <motion.div
                    className="mb-8 relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <motion.div
                        className="w-28 h-28 rounded-full bg-white/45 backdrop-blur-sm border border-white/70 shadow-lg flex items-center justify-center"
                        animate={{
                            y: [0, -8, 0],
                            scale: [1, 1.03, 1],
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

                    {/* Sparkle 1 */}
                    <motion.div
                        className="absolute -top-3 -right-2 text-pink-400"
                        animate={{
                            rotate: [0, 20, -20, 0],
                            scale: [1, 1.25, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        <Sparkles size={23} />
                    </motion.div>

                    {/* Sparkle 2 */}
                    <motion.div
                        className="absolute -bottom-1 -left-3 text-pink-300"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                        }}
                    >
                        <Sparkles size={18} />
                    </motion.div>
                </motion.div>


                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.8 }}
                    className="
                        text-4xl
                        md:text-5xl
                        text-center
                        mb-5
                        max-w-3xl
                        text-[#4a3030]
                        leading-tight
                        font-medium
                    "
                >
                    DeepShikha,
                    <span className="block text-pink-500">
                        today is all about you 🎂
                    </span>
                </motion.h1>


                {/* Message */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.8 }}
                    className="
                        text-lg
                        md:text-xl
                        text-[#654d4d]
                        text-center
                        max-w-lg
                        mb-9
                        font-light
                    "
                >
                    So I made a little something for your birthday.
                    <br />
                    Will you open it? ✨
                </motion.p>


                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <motion.button
                        onClick={onNext}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 12px 30px rgba(236, 72, 153, 0.25)",
                        }}
                        whileTap={{ scale: 0.96 }}
                        className="
                            px-9
                            py-4
                            bg-pink-500
                            hover:bg-pink-600
                            text-white
                            rounded-full
                            text-lg
                            shadow-lg
                            flex
                            items-center
                            gap-2
                            font-medium
                            transition-all
                        "
                    >
                        Open My Surprise
                        <Gift size={20} />
                    </motion.button>
                </motion.div>

            </motion.div>
        </div>
    )
}