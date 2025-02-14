"use client";

import { motion } from "framer-motion";

export default function Modal({ isOpen, onClose, onForgive, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="bg-white rounded-lg shadow-xl w-4/5 sm:w-1/3 p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
