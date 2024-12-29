"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import { motion } from "framer-motion";

export default function ApologyPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isForgiven, setForgiven] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleForgive = () => {
    setForgiven(true);
    setModalOpen(false);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 px-4 sm:px-8">
      <motion.h1
        className="text-2xl sm:text-4xl font-bold text-blue-600 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Maaf Banget Sayang 😢
      </motion.h1>
      <motion.p
        className="mt-6 text-sm sm:text-lg text-gray-800 leading-relaxed text-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Aku sadar banget kalau aku salah. Aku nggak bermaksud nyakitin kamu. Aku
        cuma mau kita bisa baik-baik lagi...
      </motion.p>
      <motion.button
        className="mt-8 px-6 py-2 sm:px-8 sm:py-3 bg-green-500 text-white text-sm sm:text-lg rounded-lg shadow-md hover:bg-green-600 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleOpenModal}
      >
        Maafin Aku?
      </motion.button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onForgive={handleForgive}
      >
        {!isForgiven ? (
          <>
            <h2 className="text-lg font-bold text-gray-800">
              Terima Kasih! ❤️
            </h2>
            <p className="mt-2 text-gray-600">
              Aku bener-bener janji nggak bakal ulangin kesalahan ini lagi.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold text-green-600">
              Terima Kasih Sayang! 🥰
            </h2>
            <p className="mt-2 text-gray-600">
              Aku senang banget kamu maafin aku. Kamu adalah segalanya buat aku.
            </p>
          </>
        )}
      </Modal>
    </main>
  );
}
