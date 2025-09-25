"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Tractor, FileText, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import React from "react"
import { useTranslation } from "@/contexts/translation-context"
import { useIsMobile } from "@/hooks/use-mobile"

export function ServicesSection() {
  const [currentService, setCurrentService] = useState(0)
  const { t } = useTranslation()
  const isMobile = useIsMobile()

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/3772430980', '_blank')
  }

  const icons = [Home, Tractor, FileText, Home, Tractor, FileText]
  
  const services = t.services.items.map((service, index) => ({
    icon: icons[index % icons.length],
    title: service.title,
    description: service.description,
    features: [
      "Evaluación de mercado precisa",
      "Marketing digital especializado", 
      "Acompañamiento integral",
      "Asesoramiento legal y técnico",
    ],
  }))

  // Auto-rotate services every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [services.length])

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

  const featuredCardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <section id="servicios" className="relative bg-brand-beige-secondary pattern-lines py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            {t.services.subtitle}
          </p>
        </div>

        {/* Dynamic Carousel with 3 Cards */}
        <div className="relative max-w-7xl mx-auto mb-12">
          <div className={`flex items-center justify-center ${isMobile ? 'space-x-0' : 'space-x-6 sm:space-x-8'} overflow-hidden min-h-[380px] sm:min-h-[500px]`}>
            {services.map((service, index) => {
              const isActive = index === currentService
              const isLeft = index === (currentService - 1 + services.length) % services.length
              const isRight = index === (currentService + 1) % services.length
              const isVisible = isMobile ? isActive : (isActive || isLeft || isRight)
              const isCompactLayout = isMobile || services.length <= 3
              
              // Only render the 3 visible cards
              if (!isVisible) return null
              
              return (
                <motion.div
                  key={`${service.title}-${currentService}`}
                  className={`relative cursor-pointer ${
                    isActive ? 'z-30' : 'z-20'
                  }`}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    x: isCompactLayout ? 0 : (isLeft ? -100 : isRight ? 100 : 0),
                    y: isCompactLayout ? 0 : (isActive ? 0 : 20)
                  }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.8,
                    scale: isActive ? 1 : (isMobile ? 1 : 0.92),
                    x: isCompactLayout ? 0 : (isLeft ? -40 : isRight ? 40 : 0),
                    y: isCompactLayout ? 0 : (isActive ? -20 : 0)
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  onClick={() => setCurrentService(index)}
                  whileHover={{ 
                    scale: isMobile ? 1 : (isActive ? 1.03 : 0.98),
                    y: isCompactLayout ? 0 : (isActive ? -25 : -5)
                  }}
                >
                  <Card className={`transition-all duration-300 ${
                    isActive 
                      ? `bg-white/95 backdrop-blur-sm border-brand-green-primary/40 rounded-2xl shadow-2xl ${isMobile ? 'w-80' : 'w-72 sm:w-80'}` 
                      : `bg-white/70 backdrop-blur-sm border-brand-green-primary/20 rounded-xl shadow-lg ${isMobile ? 'w-72' : 'w-60 sm:w-64'}`
                  }`}>
                    <CardHeader className="text-center pb-4">
                      <motion.div
                        className={`mx-auto rounded-2xl flex items-center justify-center mb-6 ${
                          isActive 
                            ? 'w-20 h-20 bg-brand-green-primary/15' 
                            : 'w-16 h-16 bg-brand-green-primary/10'
                        }`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          backgroundColor: isActive ? "rgba(65, 124, 65, 0.2)" : "rgba(65, 124, 65, 0.15)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {React.createElement(service.icon, { 
                          className: `${isActive ? 'h-10 w-10' : 'h-8 w-8'} text-brand-green-primary` 
                        })}
                      </motion.div>
                      <CardTitle className={`font-serif mb-3 text-brand-green-dark ${
                        isActive ? 'text-2xl' : 'text-xl'
                      }`}>
                        {service.title}
                      </CardTitle>
                      <CardDescription className={`font-sans font-medium text-muted-foreground ${
                        isActive ? 'text-lg' : 'text-base'
                      }`}>
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    {isActive && (
                      <CardContent className="pt-0">
                        <motion.ul 
                          className="space-y-3 mb-8"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + featureIndex * 0.1 }}
                            >
                              <CheckCircle className="h-5 w-5 text-brand-green-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <Button
                            variant="outline"
                            className="w-full bg-transparent border-brand-green-primary text-brand-green-primary hover:bg-brand-green-primary hover:text-white rounded-xl"
                            onClick={handleWhatsAppClick}
                          >
                            Más Información
                          </Button>
                        </motion.div>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className={`flex items-center justify-center space-x-6 mb-8 ${isMobile ? 'mt-6' : ''}`}>
          {/* Previous Button */}
          <motion.button
            onClick={() => setCurrentService((prev) => (prev - 1 + services.length) % services.length)}
            className="p-3 rounded-full bg-white/80 hover:bg-brand-green-primary text-brand-green-primary hover:text-white border border-brand-green-primary/20 hover:border-brand-green-primary transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "#003300",
              color: "#FFFFFF"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Service Indicators */}
          <div className="flex space-x-3">
            {services.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                  index === currentService
                    ? 'bg-brand-green-primary border-brand-green-primary shadow-lg'
                    : 'bg-white/60 border-brand-green-primary/40 hover:border-brand-green-primary/60'
                }`}
                onClick={() => setCurrentService(index)}
                whileHover={{ 
                  scale: isMobile ? 1.1 : 1.3,
                  backgroundColor: index === currentService ? "#003300" : "#417C41",
                  borderColor: "#003300"
                }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={() => setCurrentService((prev) => (prev + 1) % services.length)}
            className="p-3 rounded-full bg-white/80 hover:bg-brand-green-primary text-brand-green-primary hover:text-white border border-brand-green-primary/20 hover:border-brand-green-primary transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: "#003300",
              color: "#FFFFFF"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

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
  )
}
