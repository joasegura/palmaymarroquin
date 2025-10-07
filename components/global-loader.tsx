"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function GlobalLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Escuchamos el evento global del video cuando esté listo
    const handleVideoReady = () => setIsVisible(false);
    const handleVideoError = () => setIsVisible(false);

    window.addEventListener("videoReady", handleVideoReady);
    window.addEventListener("videoError", handleVideoError);

    return () => {
      window.removeEventListener("videoReady", handleVideoReady);
      window.removeEventListener("videoError", handleVideoError);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="flex flex-col items-center space-y-4">
            {/* Spinner */}
            {/* <div className="w-14 h-14 border-4 border-white/30 border-t-white rounded-full animate-spin" /> */}
            <p className="text-white text-lg font-medium">
              <Image
                src="https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/img/Logotipo.png"
                alt="Palma Marroquín"
                className="h-14 w-auto object-contain animate-pulse"
                width={200}
                height={56}
                priority
              />
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
