"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-red-200 px-4 sm:px-8">
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-red-600 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hi Sayang ❤️
      </motion.h1>
      <motion.p
        className="mt-4 text-base sm:text-lg text-gray-800 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Aku cuma mau bilang, maaf banget atas semuanya...
      </motion.p>
      <Link href="/apology">
        <motion.button
          className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-red-500 text-white text-sm sm:text-lg rounded-lg shadow-md hover:bg-red-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Baca Pesan Aku
        </motion.button>
      </Link>
    </main>
  );
}
