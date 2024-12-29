'use client';

import { motion } from 'framer-motion';

export default function ApologyPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <motion.h1
        className="text-3xl font-bold text-blue-600 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Maaf Banget Sayang 😢
      </motion.h1>
      <motion.p
        className="mt-6 text-gray-800 text-lg leading-relaxed text-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Aku sadar banget kalau aku salah. Aku nggak bermaksud nyakitin kamu.
        Aku cuma mau kita bisa baik-baik lagi...
      </motion.p>
      <motion.button
        className="mt-8 px-8 py-3 bg-green-500 text-white text-lg rounded-lg shadow-md hover:bg-green-600 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => alert('Makasih udah mau maafin aku 😢❤️')}
      >
        Maafin Aku?
      </motion.button>
    </main>
  );
}
