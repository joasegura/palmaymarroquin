"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/translation-context";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Precargar el video para mejor performance en visitas futuras
    const preloadVideo = () => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href =
        "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/portada.mp4";
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    };

    preloadVideo();
  }, []);

  const handleVideoLoad = () => {
    console.log("🎥 Video cargado correctamente");
    setVideoLoaded(true);
    window.dispatchEvent(new Event("videoReady")); // 🔥 Notifica al loader global
  };

  const handleVideoError = (e: any) => {
    console.error("❌ Error en video:", e);
    setVideoLoaded(true);
    window.dispatchEvent(new Event("videoError")); // 🔥 También notifica
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/3772430983", "_blank");
  };

  if (!mounted) {
    return (
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="text-white text-lg">Cargando...</div>
        </div>
      </section>
    );
  }
  return (
    <section
      id="inicio"
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10 h-full flex items-center justify-center">
        <motion.div
          className="max-w-4xl text-center flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="flex items-center justify-center bg-[#003300]/40 px-4 py-2 rounded-xl text-[#FFB91D] w-full md:w-md border border-[#FFB91D] text-center text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Award className="h-4 w-4 mr-2" />
            </motion.div>
            {t.hero.badge}
          </motion.div>

          <motion.h1
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white mb-6 text-balance text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span
              className="text-brand-green-primary font-sans font-black uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {t.hero.title} {t.hero.titleHighlight}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-brand-green-primary cursor-pointer hover:bg-brand-green-dark text-white px-8 py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-green-200 hover:text-gray-600"
              onClick={handleWhatsAppClick}
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-brand-yellow-accent/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-6 h-6 bg-brand-green-primary/20 rounded-full"
            animate={{
              y: [0, 15, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-3 h-3 bg-brand-yellow-accent/40 rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </motion.div>
      </div>

      {/* Contrast overlay */}
      <div className="absolute inset-0 z-[1] bg-black/55 md:bg-black/40" />

      {/* Background Video */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/portada-poster.jpg"
          className="w-full h-full object-cover"
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          crossOrigin="anonymous"
        >
          <source
            src="https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/portada.mp4"
            type="video/mp4"
          />
        </video>

        {!videoLoaded && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <div className="text-white text-lg">Cargando video...</div>
          </div>
        )}
      </div>
    </section>
  );
}
