"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/contexts/translation-context"
import { ReactCountryFlag } from "react-country-flag"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useTranslation()

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/3772430980', '_blank')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-transparent" style={{ backgroundColor: "#003300" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center">
              <Image
                src="https://cdn.atomsolucionesit.com.ar/media/palmaymarroquin/img/Logotipo.png"
                alt="Palma Marroquín"
                className="h-14 w-auto object-contain"
                width={200}
                height={56}
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white/90 hover:text-white transition-colors">
              {t.header.inicio}
            </a>
            <a href="#servicios" className="text-white/90 hover:text-white transition-colors">
              {t.header.servicios}
            </a>
            <a href="#nosotros" className="text-white/90 hover:text-white transition-colors">
              {t.header.nosotros}
            </a>
            <a href="#contacto" className="text-white/90 hover:text-white transition-colors">
              {t.header.contacto}
            </a>
          </nav>

          {/* Desktop Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('es')}
                className={`p-1 rounded-lg transition-all duration-200 ${
                  language === 'es' 
                    ? 'bg-brand-green-primary/10 border-2 border-brand-green-primary' 
                    : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
                }`}
                title="Español"
              >
                <ReactCountryFlag
                  countryCode="AR"
                  svg
                  style={{
                    width: '32px',
                    height: '24px',
                    borderRadius: '4px'
                  }}
                />
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`p-1 rounded-lg transition-all duration-200 ${
                  language === 'pt' 
                    ? 'bg-brand-green-primary/10 border-2 border-brand-green-primary' 
                    : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
                }`}
                title="Português"
              >
                <ReactCountryFlag
                  countryCode="BR"
                  svg
                  style={{
                    width: '32px',
                    height: '24px',
                    borderRadius: '4px'
                  }}
                />
              </button>
            </div>
            <Button className="bg-white text-[#003300] hover:bg-white/90">{t.header.consultar}</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white/90 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-white/90 hover:text-white transition-colors">
                {t.header.inicio}
              </a>
              <a href="#servicios" className="text-white/90 hover:text-white transition-colors">
                {t.header.servicios}
              </a>
              <a href="#nosotros" className="text-white/90 hover:text-white transition-colors">
                {t.header.nosotros}
              </a>
              <a href="#contacto" className="text-white/90 hover:text-white transition-colors">
                {t.header.contacto}
              </a>
              <div className="pt-4 border-t border-border">
                {/* Mobile Language Buttons */}
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <button
                    onClick={() => setLanguage('es')}
                    className={`p-1 rounded-lg transition-all duration-200 ${
                      language === 'es' 
                        ? 'bg-brand-green-primary/10 border-2 border-brand-green-primary' 
                        : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
                    }`}
                    title="Español"
                  >
                    <ReactCountryFlag
                      countryCode="AR"
                      svg
                      style={{
                        width: '32px',
                        height: '24px',
                        borderRadius: '4px'
                      }}
                    />
                  </button>
                  <button
                    onClick={() => setLanguage('pt')}
                    className={`p-1 rounded-lg transition-all duration-200 ${
                      language === 'pt' 
                        ? 'bg-brand-green-primary/10 border-2 border-brand-green-primary' 
                        : 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent'
                    }`}
                    title="Português"
                  >
                    <ReactCountryFlag
                      countryCode="BR"
                      svg
                      style={{
                        width: '32px',
                        height: '24px',
                        borderRadius: '4px'
                      }}
                    />
                  </button>
                </div>
                <Button className="w-full bg-white text-[#003300] hover:bg-white/90">{t.header.consultar}</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
