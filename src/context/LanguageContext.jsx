import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';
import { resolveJourneyContent } from '../data/journeyContent';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Try to get language from localStorage, default to null (so we can show modal)
  // or default to 'en' if we want a default.
  // The user asked for "choose your language prompt... when first loading the site".
  // So we should initialize to null if not stored.
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('appLanguage') || null;
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!language) {
      setShowModal(true);
    } else {
      setShowModal(false);
      localStorage.setItem('appLanguage', language);
    }
  }, [language]);

  const selectLanguage = (lang) => {
    setLanguage(lang);
  };

  // Translation helper
  const t = (key) => {
    if (!language) return ''; // or fallback to en?
    const langData = translations[language] || translations['en'];
    
    // Support nested keys like 'navbar.home'
    const keys = key.split('.');
    let value = langData;
    for (const k of keys) {
       if (value && value[k]) {
         value = value[k];
       } else {
         return key; // Return key if not found
       }
    }
    return value;
  };

  // Helper to get content based on current language
  // We will need to wrap the journey resolver or pass language to it
  const getLocalizedJourneyContent = (journey) => {
    // We can assume resolveJourneyContent now handles language or returns a structure we can pick from.
    // Since I haven't updated resolveJourneyContent yet to take a language arg,
    // I will need to update that file to return localized content or handle it here.
    // For now, let's assume I will update resolveJourneyContent to accept language.
    return resolveJourneyContent(journey, language || 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, selectLanguage, showModal, t, getLocalizedJourneyContent }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
