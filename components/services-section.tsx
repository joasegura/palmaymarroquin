"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Tractor, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import { useTranslation } from "@/contexts/translation-context";
import { useIsMobile } from "@/hooks/use-mobile";
import ServiceCardsCarousel from "@/components/service-cards-carousel";

export function ServicesSection() {
  const [currentService, setCurrentService] = useState(0);
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/3772430983", "_blank");
  };

  const iconComponents = [Home, Tractor, FileText, Home, Tractor, FileText];

  const services = t.services.items.map((service, index) => ({
    icon: iconComponents[index % iconComponents.length],
    title: service.title,
    description: service.description,
    features: [
      "Evaluación de mercado precisa",
      "Marketing digital especializado",
      "Acompañamiento integral",
      "Asesoramiento legal y técnico",
    ],
  }));

  // Build services data for the external carousel
  const servicesForCarousel = t.services.items.map((service, index) => ({
    title: service.title,
    description: service.description,
    features: [
      "Evaluación de mercado precisa",
      "Marketing digital especializado",
      "Acompañamiento integral",
      "Asesoramiento legal y técnico",
    ],
    icon: React.createElement(iconComponents[index % iconComponents.length], {
      className: "h-8 w-8 text-brand-green-primary",
    }),
  }));

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

  const featuredCardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="servicios"
      className="relative h-screen bg-brand-green-dark pattern-lines py-16 sm:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-4">
            {t.services.title}
          </h2>
          <p className="font-sans text-lg text-white/90 max-w-2xl mx-auto font-medium">
            {t.services.subtitle}
          </p>
        </div>

        {/* External Service Cards Carousel */}
        <div className="relative max-w-7xl mx-auto m-8">
          <ServiceCardsCarousel
            services={servicesForCarousel}
            intervalMs={3500}
          />
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <img
          src="https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/modern-real-estate-office-building-with-glass-faca.jpg"
          alt="Oficina inmobiliaria moderna"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
