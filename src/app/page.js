'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-red-200">
      <motion.h1
        className="text-4xl font-bold text-red-600 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Hi Sayang ❤️
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-800 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Aku cuma mau bilang, maaf banget atas semuanya...
      </motion.p>
      <Link href="/apology">
        <motion.button
          className="mt-6 px-8 py-3 bg-red-500 text-white text-lg rounded-lg shadow-md hover:bg-red-600 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Baca Pesan Aku
        </motion.button>
      </Link>
    </main>
  );
}
