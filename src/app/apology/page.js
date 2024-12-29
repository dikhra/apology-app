"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ApologyPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isForgiven, setForgiven] = useState(false);
  const router = useRouter();

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleForgive = () => {
    setForgiven(true);
    sendWhatsAppMessage();
    setModalOpen(false);
  };

  const handleNotForgive = () => {
    router.push("/not-forgiven"); // Arahkan ke halaman lain
  };

  const sendWhatsAppMessage = () => {
    const waNumber = "6285886149964"; // Ganti dengan nomor WhatsApp kamu
    const message = encodeURIComponent(
      "Iya sayang aku maafin, jangan diulangin lagi yah lain kali <3"
    );
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {!isForgiven ? (
          <>
            <h2 className="text-lg font-bold text-gray-800">
              Maafin Aku Ya? 🙏
            </h2>
            <p className="mt-2 text-gray-600">
              Aku sadar banget kalau aku salah. Tolong maafin aku, ya.
            </p>
            <div className="mt-4 flex justify-center space-x-3">
              {/* Tombol Aku Maafin Kamu */}
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                onClick={handleForgive}
              >
                Aku Maafin Kamu
              </button>
              {/* Tombol Nggak Dulu */}
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                onClick={handleNotForgive}
              >
                Nggak Dulu
              </button>
            </div>
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
