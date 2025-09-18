"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      consultType: "",
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
      scale: 0.95
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
            Empezá tu Proyecto Inmobiliario Hoy
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Contactanos para una consulta gratuita y descubrí cómo podemos ayudarte
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={cardVariants}>
            <Card className="rounded-xl border-brand-green-primary/20">
              <CardHeader>
                <CardTitle className="font-serif text-brand-green-dark">Consultá Gratis Ahora</CardTitle>
              </CardHeader>
              <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nombre y Apellido *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Tu nombre completo"
                      className="rounded-xl border-brand-green-primary/30 focus:border-brand-green-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Teléfono *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="(011) 1234-5678"
                      className="rounded-xl border-brand-green-primary/30 focus:border-brand-green-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="tu@email.com"
                    className="rounded-xl border-brand-green-primary/30 focus:border-brand-green-primary"
                  />
                </div>

                <div>
                  <label htmlFor="consultType" className="block text-sm font-semibold text-foreground mb-2">
                    Tipo de Consulta
                  </label>
                  <Select onValueChange={(value) => handleInputChange("consultType", value)}>
                    <SelectTrigger className="rounded-xl border-brand-green-primary/30">
                      <SelectValue placeholder="Seleccioná el tipo de consulta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vender">Quiero Vender</SelectItem>
                      <SelectItem value="comprar">Quiero Comprar</SelectItem>
                      <SelectItem value="tasar">Solicitar Tasación</SelectItem>
                      <SelectItem value="campo">Propiedades Rurales</SelectItem>
                      <SelectItem value="otro">Otra Consulta</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
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
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-brand-green-dark border-t-transparent rounded-full mr-2"
                      />
                    ) : null}
                    {isSubmitting ? "Enviando..." : "Enviar Consulta Gratuita"}
                  </Button>
                </motion.div>

                <p className="text-xs text-muted-foreground text-center font-medium">
                  Al enviar este formulario, aceptás recibir información comercial.
                </p>
              </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="space-y-8" variants={cardVariants}>
            <Card className="rounded-xl border-brand-green-primary/20">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-normal text-brand-green-dark mb-6">Información de Contacto</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-brand-green-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Teléfono</div>
                      <div className="text-muted-foreground font-medium">(011) 2345-6789</div>
                      <div className="text-muted-foreground font-medium">WhatsApp: (011) 9876-5432</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-brand-green-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground font-medium">info@palmaymarroquin.com.ar</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand-green-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Oficina</div>
                      <div className="text-muted-foreground font-medium">
                        Av. Córdoba 1234, Piso 5<br />
                        Ciudad de Córdoba, Argentina
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-brand-green-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground">Horarios</div>
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

            <Card className="bg-brand-beige-secondary/50 rounded-xl border-brand-green-primary/20">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-normal text-brand-green-dark mb-4">Acciones Rápidas</h3>
                <div className="space-y-3">
                  {[
                    { icon: Phone, text: "Llamar Ahora" },
                    { icon: Mail, text: "Enviar WhatsApp" },
                    { icon: MapPin, text: "Ver Ubicación" }
                  ].map((action, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full justify-start bg-transparent border-brand-green-primary text-brand-green-primary hover:bg-brand-green-primary hover:text-white rounded-xl"
                      >
                        <action.icon className="h-4 w-4 mr-2" />
                        {action.text}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
