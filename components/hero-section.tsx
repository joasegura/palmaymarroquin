"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Award } from "lucide-react"
import { motion } from "framer-motion"
// use public/portada.mp4 to avoid bundling loaders for media

export function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center h-full flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div 
            className="flex items-center justify-center bg-[#003300]/40 px-4 py-2 rounded-xl text-[#FFB91D] w-xl border border-[#FFB91D] text-center text-sm font-medium mb-6"
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
            Más de 15 años de experiencia
          </motion.div>

          <motion.h1 
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Tu Próxima Propiedad
            <motion.span 
              className="text-brand-green-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {" "}Te Está Esperando
            </motion.span>
          </motion.h1>

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-brand-yellow-accent/30 rounded-full"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-6 h-6 bg-brand-green-primary/20 rounded-full"
            animate={{ 
              y: [0, 15, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-3 h-3 bg-brand-yellow-accent/40 rounded-full"
            animate={{ 
              y: [0, -25, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.div>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/portada.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}
