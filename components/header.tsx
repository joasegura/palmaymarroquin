"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/contexts/translation-context"
import { ReactCountryFlag } from "react-country-flag"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const { language, setLanguage, t } = useTranslation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/3772430983', '_blank')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Cerrar el dropdown de idiomas cuando se abre/cierra el menú móvil
    if (!isMenuOpen) {
      setIsLanguageDropdownOpen(false)
    }
  }

  // Cerrar dropdown cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  

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
            {/* Language Dropdown - Test with simple HTML */}
            <div className="relative" ref={dropdownRef}>
              <Button 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 flex items-center space-x-2 h-9"
                onClick={() => {
                  console.log('Button clicked!')
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }}
              >
                <Globe className="h-4 w-4" />
                <ReactCountryFlag
                  countryCode={language === 'es' ? 'AR' : 'BR'}
                  svg
                  style={{
                    width: '20px',
                    height: '15px',
                    borderRadius: '2px'
                  }}
                />
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              {isLanguageDropdownOpen && (
                <div 
                  className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-[9999]"
                  style={{ zIndex: 9999 }}
                >
                  <button
                    onClick={() => {
                      console.log('Español clicked!')
                      setLanguage('es')
                      setIsLanguageDropdownOpen(false)
                    }}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-left text-gray-900 hover:bg-gray-100 first:rounded-t-md"
                  >
                    <ReactCountryFlag
                      countryCode="AR"
                      svg
                      style={{
                        width: '24px',
                        height: '18px',
                        borderRadius: '3px'
                      }}
                    />
                    <span>Español</span>
                    {language === 'es' && (
                      <div className="ml-auto h-2 w-2 bg-brand-green-primary rounded-full" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      console.log('Português clicked!')
                      setLanguage('pt')
                      setIsLanguageDropdownOpen(false)
                    }}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-left text-gray-900 hover:bg-gray-100 last:rounded-b-md"
                  >
                    <ReactCountryFlag
                      countryCode="BR"
                      svg
                      style={{
                        width: '24px',
                        height: '18px',
                        borderRadius: '3px'
                      }}
                    />
                    <span>Português</span>
                    {language === 'pt' && (
                      <div className="ml-auto h-2 w-2 bg-brand-green-primary rounded-full" />
                    )}
                  </button>
                </div>
              )}
            </div>
            <Button className="bg-white text-[#003300] hover:bg-white/90">{t.header.consultar}</Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
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
                {/* Mobile Language Dropdown */}
                <div className="mb-4 z-50">
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 flex items-center justify-center space-x-2 h-9"
                      onClick={() => {
                        console.log('Mobile button clicked!')
                        setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                      }}
                    >
                      <Globe className="h-4 w-4" />
                      <ReactCountryFlag
                        countryCode={language === 'es' ? 'AR' : 'BR'}
                        svg
                        style={{
                          width: '20px',
                          height: '15px',
                          borderRadius: '2px'
                        }}
                      />
                      <span>{language === 'es' ? 'Español' : 'Português'}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                    
                    {isLanguageDropdownOpen && (
                      <div 
                        className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 shadow-lg rounded-md z-[9999]"
                        style={{ zIndex: 9999 }}
                      >
                        <button
                          onClick={() => {
                            console.log('Mobile Español clicked!')
                            setLanguage('es')
                            setIsLanguageDropdownOpen(false)
                          }}
                          className="w-full flex items-center space-x-3 px-4 py-2 text-left text-gray-900 hover:bg-gray-100 first:rounded-t-md"
                        >
                          <ReactCountryFlag
                            countryCode="AR"
                            svg
                            style={{
                              width: '24px',
                              height: '18px',
                              borderRadius: '3px'
                            }}
                          />
                          <span>Español</span>
                          {language === 'es' && (
                            <div className="ml-auto h-2 w-2 bg-brand-green-primary rounded-full" />
                          )}
                        </button>
                        <button
                          onClick={() => {
                            console.log('Mobile Português clicked!')
                            setLanguage('pt')
                            setIsLanguageDropdownOpen(false)
                          }}
                          className="w-full flex items-center space-x-3 px-4 py-2 text-left text-gray-900 hover:bg-gray-100 last:rounded-b-md"
                        >
                          <ReactCountryFlag
                            countryCode="BR"
                            svg
                            style={{
                              width: '24px',
                              height: '18px',
                              borderRadius: '3px'
                            }}
                          />
                          <span>Português</span>
                          {language === 'pt' && (
                            <div className="ml-auto h-2 w-2 bg-brand-green-primary rounded-full" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
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
