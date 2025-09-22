"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Translations, translations } from '@/lib/translations';

interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translations;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('es');

  // Cargar idioma desde localStorage al inicializar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'pt')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Guardar idioma en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = translations[language] || translations.es;

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}

