"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "@/contexts/translation-context";

export function WhyChooseUsSection() {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleStats, setVisibleStats] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    operations: 0,
    days: 0,
    satisfaction: 0,
    availability: 0,
  });

  const reasonIcons = [
    "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/iconos/Icono_Manos de acuerdo.png", // Experiencia Comprobada
    "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/iconos/Icono_Pin Ubic.png", // Conocimiento Local
    "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/iconos/Icono_Tel.png", // Atención Personalizada
    "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/iconos/Icono_Venta-Precio.png", // Transparencia Total
    "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/iconos/Icono_Web.png", // Asesoramiento Legal
    "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/iconos/Icono_Maíz.png", // Inversiones
    "https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/cair.jpg", // Socios Fundadores
  ];

  const reasons = t.whyChooseUs.reasons.map((reason, index) => ({
    icon: reasonIcons[index % reasonIcons.length],
    title: reason.title,
    description: reason.description,
    isFounder:
      reason.title === "Socios Fundadores" ||
      reason.title === "Socios Fundadores", // Español y Portugués
  }));

  // Animate numbers when stats become visible
  useEffect(() => {
    if (visibleStats) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 steps for smooth animation
      const stepDuration = duration / steps;

      const targets = {
        operations: 500,
        days: 850,
        satisfaction: 98,
        availability: 24,
      };

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedNumbers({
          operations: Math.floor(targets.operations * progress),
          days: Math.floor(targets.days * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          availability: Math.floor(targets.availability * progress),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [visibleStats]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const founderCardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const statItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="nosotros"
      className="relative py-16 sm:py-24 bg-brand-beige-secondary pattern-lines"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground mb-4">
            {t.whyChooseUs.title}
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            {t.whyChooseUs.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center text-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className={
                reason.isFounder
                  ? "h-full md:col-start-2 lg:col-start-2 flex flex-col items-center"
                  : "h-full"
              }
            >
              <Card
                className={
                  reason.isFounder
                    ? "border-2 border-gray-200 shadow-lg bg-white rounded-xl h-64 w-64 relative overflow-hidden mx-auto" // Redondo y tamaño fijo
                    : "border-0 shadow-none bg-white/80 backdrop-blur-sm rounded-xl h-full"
                }
              >
                <CardContent
                  className={
                    reason.isFounder
                      ? "p-6 h-full flex items-center justify-center"
                      : "p-6 text-center h-full flex flex-col"
                  }
                >
                  {reason.isFounder ? (
                    // Card redonda para Socios Fundadores
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={reason.icon}
                        alt="Cámara Argentina Inmobiliaria Rural"
                        fill
                        className="object-contain p-6" // Padding para que no toque los bordes
                      />
                    </div>
                  ) : (
                    // Cards normales para las demás razones
                    <>
                      <motion.div
                        className="mx-auto w-16 h-16 bg-brand-green-primary/10 rounded-xl flex items-center justify-center mb-6"
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Image
                          src={reason.icon}
                          alt={reason.title}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </motion.div>

                      <motion.h3
                        className="font-serif text-xl font-normal text-brand-green-dark mb-4"
                        animate={{
                          color: hoveredCard === index ? "#003300" : "#417C41",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {reason.title}
                      </motion.h3>

                      <p className="font-sans text-muted-foreground text-pretty font-medium flex-grow">
                        {reason.description}
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Título y descripción DEBAJO de la card redonda para Socios Fundadores */}
              {reason.isFounder && (
                <div className="text-center mt-4 w-64">
                  {" "}
                  {/* Mismo ancho que la card */}
                  <motion.h3
                    className="font-serif text-xl font-normal text-brand-green-dark mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {reason.title}
                  </motion.h3>
                  <p className="font-sans text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 bg-[#FFB91D] rounded-xl p-4 md:p-8 border border-black/30"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          onViewportEnter={() => setVisibleStats(true)}
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
            {t.whyChooseUs.stats.items.map((stat, index) => {
              const animatedValue = [
                animatedNumbers.operations,
                animatedNumbers.days,
                animatedNumbers.satisfaction,
                animatedNumbers.availability,
              ][index];

              return (
                <motion.div
                  key={index}
                  variants={statItemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="text-3xl font-bold text-brand-green-primary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {animatedValue}
                    {stat.suffix}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <img
          src="https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/modern-real-estate-office-building-with-glass-faca.jpg"
          alt="Oficina inmobiliaria moderna"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
