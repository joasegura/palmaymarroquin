"use client"

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Palma & Marroquín</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Tu socio inmobiliario de confianza. Más de 15 años conectando personas con su hogar ideal.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Propiedades en Venta",
                "Campos Disponibles", 
                "Tasaciones Profesionales",
                "Asesoramiento Legal"
              ].map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Sobre Nosotros",
                "Nuestro Equipo",
                "Casos de Éxito", 
                "Contacto"
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              {[
                { icon: Phone, text: "(011) 2345-6789" },
                { icon: Mail, text: "info@palmaymarroquin.com.ar" },
                { icon: MapPin, text: "Colón 1234\nCorrientes, Argentina" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <contact.icon className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/80 whitespace-pre-line">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-primary-foreground/20 mt-8 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <motion.div 
              className="text-primary-foreground/80 mb-4 md:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              © 2024 Palma&Marroquín. Todos los derechos reservados.
            </motion.div>
            <motion.div 
              className="flex space-x-6 text-primary-foreground/80"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Términos y Condiciones
              </a>
              <span>Matrícula N° 12345</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
