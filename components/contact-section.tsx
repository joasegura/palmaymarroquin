"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/translation-context";
import toast from "react-hot-toast";

export function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:3000/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: formData.email, // quien llena el form
          subject: `Consulta de ${formData.name} (${formData.phone})`,
          message: `
          Tipo de consulta: ${formData.consultType || "No especificado"}
          Mensaje: ${formData.message}
        `,
        }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("¡Mensaje enviado correctamente!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          consultType: "",
          message: "",
        });
      } else {
        toast.error("Error al enviar el mensaje: " + data.error);
      }
    } catch (error) {
      toast.error("No se pudo conectar con el servidor");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
      scale: 0.95,
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

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="h-full" variants={cardVariants}>
            <Card className="rounded-xl border-brand-green-primary/20">
              <CardHeader>
                <CardTitle className="font-serif text-brand-green-dark">
                  {t.contact.form.submit}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        {t.contact.form.name} *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder={t.contact.form.name}
                        className="rounded-xl border-brand-green-primary/30 focus:border-brand-green-primary"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        {t.contact.form.phone} *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="(011) 1234-5678"
                        className="rounded-xl border-brand-green-primary/30 focus:border-brand-green-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      {t.contact.form.email} *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="tu@email.com"
                      className="rounded-xl border-brand-green-primary/30 focus:border-brand-green-primary"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="consultType"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      Tipo de Consulta
                    </label>
                    <Select
                      onValueChange={(value) =>
                        handleInputChange("consultType", value)
                      }
                    >
                      <SelectTrigger className="rounded-xl border-brand-green-primary/30">
                        <SelectValue placeholder="Seleccioná el tipo de consulta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vender">Quiero Vender</SelectItem>
                        <SelectItem value="comprar">Quiero Comprar</SelectItem>
                        <SelectItem value="tasar">
                          Solicitar Tasación
                        </SelectItem>
                        <SelectItem value="campo">
                          Propiedades Rurales
                        </SelectItem>
                        <SelectItem value="otro">Otra Consulta</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-foreground mb-2"
                    >
                      {t.contact.form.message}
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Contanos más detalles sobre tu consulta..."
                      className="rounded-xl border-brand-green-primary/30 focus:border-brand-green-primary"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-brand-yellow-accent hover:bg-brand-yellow-accent/90 text-brand-green-dark font-semibold rounded-xl"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-brand-green-dark border-t-transparent rounded-full mr-2"
                        />
                      ) : null}
                      {isSubmitting
                        ? t.contact.form.loading
                        : t.contact.form.submit}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-muted-foreground text-center font-medium">
                    Al enviar este formulario, aceptás recibir información
                    comercial.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="h-full space-y-8" variants={cardVariants}>
            <Card className="rounded-xl border-brand-green-primary/20">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-normal text-brand-green-dark mb-6">
                  {t.contact.info.title}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-brand-green-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">
                        {t.contact.info.phone}
                      </div>
                      {/* <div className="text-muted-foreground font-medium">
                        (3772)43-0980
                      </div> */}
                      <div className="text-muted-foreground font-medium">
                        WhatsApp: (3772)43-0980
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-brand-green-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">
                        {t.contact.info.email}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        info@palmaymarroquin.com.ar
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand-green-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">
                        {t.contact.info.address}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        Colón 826, <br />
                        Corrientes, Argentina
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-brand-green-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">
                        {t.contact.info.hours}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        Lun - Vie: 9:00 - 18:00
                        <br />
                        Sáb: 9:00 - 13:00
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:hidden my-4 sm:space-y-8"
          variants={cardVariants}
        >
          <Card className="bg-brand-beige-secondary/50 rounded-xl border-brand-green-primary/20">
            <CardContent className="p-6">
              <h3 className="font-serif text-xl font-normal text-brand-green-dark mb-4">
                {t.contact.quickActions.title}
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: Phone,
                    text: t.contact.quickActions.call,
                    action: () => window.open("tel:+543772430983", "_self"),
                  },
                  {
                    icon: Mail,
                    text: t.contact.quickActions.whatsapp,
                    action: () =>
                      window.open(
                        "https://wa.me/5493772430983?text=Hola, me interesa conocer más sobre sus servicios inmobiliarios",
                        "_blank"
                      ),
                  },
                  {
                    icon: MapPin,
                    text: isMapOpen
                      ? t.contact.quickActions.hideMap
                      : t.contact.quickActions.location,
                    action: () => setIsMapOpen(!isMapOpen),
                  },
                ].map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      x: 5,
                      scale: 1.02,
                    }}
                  >
                    <motion.button
                      onClick={action.action}
                      className="w-full justify-start bg-white border border-brand-green-primary/30 text-brand-green-primary rounded-xl shadow-sm flex items-center px-4 py-3 font-medium transition-all duration-300"
                      whileHover={{
                        backgroundColor: "#417C41",
                        color: "#FFFFFF",
                        borderColor: "#417C41",
                        boxShadow:
                          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <action.icon className="h-4 w-4 mr-2" />
                      {action.text}
                    </motion.button>
                  </motion.div>
                ))}

                {/* Mapa Desplegable dentro del Card */}
                {isMapOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="mt-4"
                  >
                    <div className="bg-white rounded-lg border border-brand-green-primary/20 overflow-hidden">
                      <div className="p-3 bg-brand-beige-secondary/30 border-b border-brand-green-primary/10">
                        <h4 className="font-serif text-sm font-medium text-brand-green-dark text-center">
                          {t.contact.quickActions.location}
                        </h4>
                      </div>
                      <div className="relative w-full h-[200px]">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.5!2d-58.8304!3d-27.4692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456b7c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sCol%C3%B3n%201234%2C%20Corrientes%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                      <div className="p-3 bg-white">
                        <div className="flex flex-col items-center gap-2">
                          <div className="text-center">
                            <p className="font-medium text-brand-green-dark text-sm">
                              Palma & Marroquín
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Colón 826, Corrientes
                            </p>
                          </div>
                          <Button
                            onClick={() =>
                              window.open(
                                "https://maps.google.com/?q=Colón+1234,+Corrientes,+Argentina",
                                "_blank"
                              )
                            }
                            className="bg-brand-green-primary hover:bg-brand-green-dark text-white text-xs px-3 py-1 h-auto"
                          >
                            {t.contact.quickActions.openMaps}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
