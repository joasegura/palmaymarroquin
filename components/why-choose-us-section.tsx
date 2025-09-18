"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

export function WhyChooseUsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [visibleStats, setVisibleStats] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState({
    operations: 0,
    days: 0,
    satisfaction: 0,
    availability: 0
  })
  
  const reasons = [
    {
      icon: "/iconos/Icono_Manos de acuerdo.png",
      title: "Experiencia Comprobada",
      description:
        "Más de 15 años en el mercado inmobiliario local, con cientos de operaciones exitosas que nos respaldan.",
    },
    {
      icon: "/iconos/Icono_Pin Ubic.png",
      title: "Conocimiento del Mercado Local",
      description:
        "Sabemos cada barrio, cada zona rural, cada oportunidad. Nuestro conocimiento es tu ventaja competitiva.",
    },
    {
      icon: "/iconos/Icono_Peón.png",
      title: "Equipo Técnico Profesional",
      description:
        "Martilleros, tasadores y asesores matriculados que garantizan la legalidad y precisión en cada operación.",
    },
    {
      icon: "/iconos/Icono_Manos de acuerdo.png",
      title: "Transparencia Total",
      description: "Sin sorpresas, sin letra chica. Te mantenemos informado en cada etapa del proceso.",
    },
    {
      icon: "/iconos/Icono_Tractor.png",
      title: "Agilidad y Eficiencia",
      description: "Procesos optimizados que acortan tiempos sin sacrificar calidad ni seguridad jurídica.",
    },
  ]

  // Animate numbers when stats become visible
  useEffect(() => {
    if (visibleStats) {
      const duration = 2000 // 2 seconds
      const steps = 60 // 60 steps for smooth animation
      const stepDuration = duration / steps

      const targets = {
        operations: 500,
        days: 45,
        satisfaction: 98,
        availability: 24
      }

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setAnimatedNumbers({
          operations: Math.floor(targets.operations * progress),
          days: Math.floor(targets.days * progress),
          satisfaction: Math.floor(targets.satisfaction * progress),
          availability: Math.floor(targets.availability * progress)
        })

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }
  }, [visibleStats])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const statsVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const statItemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="nosotros" className="py-16 sm:py-24 bg-brand-beige-secondary/50 pattern-lines">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground mb-4">¿Por Qué Elegirnos?</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            La diferencia que marca resultados en cada operación inmobiliaria
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                transition: { duration: 0.2 }
              }}
            >
              <Card className="border-0 shadow-none bg-white/80 backdrop-blur-sm rounded-xl h-full">
                <CardContent className="p-6 text-center">
                  <motion.div 
                    className="mx-auto w-16 h-16 bg-brand-green-primary/10 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      backgroundColor: "rgba(65, 124, 65, 0.2)"
                    }}
                    transition={{ duration: 0.2 }}
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
                      color: hoveredCard === index ? "#003300" : "#417C41"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {reason.title}
                  </motion.h3>
                  <p className="font-sans text-muted-foreground text-pretty font-medium">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-brand-green-primary/5 rounded-xl p-8 border border-brand-green-primary/20"
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          onViewportEnter={() => setVisibleStats(true)}
        >
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { 
                number: animatedNumbers.operations, 
                suffix: "+", 
                label: "Operaciones Exitosas" 
              },
              { 
                number: animatedNumbers.days, 
                suffix: "", 
                label: "Días Promedio de Venta" 
              },
              { 
                number: animatedNumbers.satisfaction, 
                suffix: "%", 
                label: "Satisfacción del Cliente" 
              },
              { 
                number: animatedNumbers.availability, 
                suffix: "/7", 
                label: "Atención Disponible" 
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statItemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
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
                    stiffness: 200
                  }}
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
