"use client"

import React, { useState } from "react"
import LoadingScreen from "@/components/LoadingScreen"

// Section components
import {
  Navigation,
  HeroSection,
  CompanyOverview,
  PhilosophySection,
  NewsSection,
  ServicesSection,
  ClientsSection,
  ContactSection,
  Footer,
} from "@/components/sections"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className={`min-h-screen bg-background transition-opacity duration-500 ${
        isLoading ? "opacity-0" : "opacity-100"
      }`}>
        <Navigation />
        <HeroSection />
        <CompanyOverview />
        <PhilosophySection />
        <NewsSection />
        <ServicesSection />
        <ClientsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}
