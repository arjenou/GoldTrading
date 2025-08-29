"use client"

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';
import { Button } from './button';

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
}

const languages: LanguageOption[] = [
  {
    code: 'ja',
    name: 'Japanese',
    flag: '🇯🇵',
    nativeName: '日本語'
  },
  {
    code: 'zh',
    name: 'Chinese',
    flag: '🇨🇳',
    nativeName: '中文'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    nativeName: 'English'
  }
];

interface LanguageSwitcherProps {
  isLightText?: boolean;
}

export default function LanguageSwitcher({ isLightText = true }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 transition-all duration-300 ${
          isLightText 
            ? 'text-white/90 hover:text-white hover:bg-white/10' 
            : 'text-gray-800/90 hover:text-gray-900 hover:bg-gray-100/50'
        }`}
      >
                        <span className="text-lg">{currentLanguage.flag}</span>
                <span className={`text-xs font-medium hidden sm:block ${
                  currentLanguage.code === 'ja' ? 'font-noto-sans-jp' : 
                  currentLanguage.code === 'zh' ? 'font-noto-sans-sc' : 
                  currentLanguage.code === 'en' ? 'font-montserrat' : ''
                }`}>
                  {currentLanguage.nativeName}
                </span>
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-48 bg-white/95 backdrop-blur-md border border-white/20 rounded-lg shadow-lg z-50">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50/50 transition-colors duration-200 ${
                  i18n.language === language.code 
                    ? 'bg-gray-100/50 text-gray-900' 
                    : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <div className="flex flex-col">
                  <span className={`text-sm font-medium ${
                    language.code === 'ja' ? 'font-noto-sans-jp' : 
                    language.code === 'zh' ? 'font-noto-sans-sc' : 
                    language.code === 'en' ? 'font-montserrat' : ''
                  }`}>
                    {language.nativeName}
                  </span>
                  <span className="text-xs text-gray-500">{language.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
