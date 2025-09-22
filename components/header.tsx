"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/contexts/translation-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center">
              <Image
                src="/img/Logotipo.png"
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
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              {t.header.inicio}
            </a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
              {t.header.servicios}
            </a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
              {t.header.nosotros}
            </a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
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
                {/* Bandera Argentina */}
                <div className="w-8 h-6 rounded-sm overflow-hidden border border-gray-300">
                  <div className="w-full h-1/3 bg-blue-600"></div>
                  <div className="w-full h-1/3 bg-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="w-full h-1/3 bg-blue-600"></div>
                </div>
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
                {/* Bandera Brasil */}
                <div className="w-8 h-6 rounded-sm overflow-hidden border border-gray-300 relative">
                  <div className="w-full h-full bg-green-600"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-yellow-400 rounded-full"></div>
                </div>
              </button>
            </div>
            <Button>{t.header.consultar}</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:text-primary hover:bg-accent/10 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                {t.header.inicio}
              </a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors">
                {t.header.servicios}
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
                {t.header.nosotros}
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
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
                    {/* Bandera Argentina */}
                    <div className="w-8 h-6 rounded-sm overflow-hidden border border-gray-300">
                      <div className="w-full h-1/3 bg-blue-600"></div>
                      <div className="w-full h-1/3 bg-white flex items-center justify-center">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div className="w-full h-1/3 bg-blue-600"></div>
                    </div>
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
                    {/* Bandera Brasil */}
                    <div className="w-8 h-6 rounded-sm overflow-hidden border border-gray-300 relative">
                      <div className="w-full h-full bg-green-600"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-yellow-400 rounded-full"></div>
                    </div>
                  </button>
                </div>
                <Button className="w-full">{t.header.consultar}</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
