"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function NotForgivenPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-red-300 px-4 sm:px-8">
      <motion.h1
        className="text-2xl sm:text-4xl font-bold text-red-600 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Aduh, Maafin Aku Dong 😭
      </motion.h1>
      <motion.p
        className="mt-6 text-sm sm:text-lg text-gray-800 leading-relaxed text-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Aku tahu aku salah, tapi aku bakal coba lebih baik lagi demi kita. Kamu
        mau kembali ke halaman tadi nggak?
      </motion.p>
      <motion.button
        className="mt-8 px-6 py-2 sm:px-8 sm:py-3 bg-blue-500 text-white text-sm sm:text-lg rounded-lg shadow-md hover:bg-blue-600 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => router.push("/apology")}
      >
        Maafin yah 😢
      </motion.button>
    </main>
  );
}
