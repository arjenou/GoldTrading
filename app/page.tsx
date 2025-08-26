// Section components
import {
  Navigation,
  HeroSection,
  CompanyOverview,
  PhilosophySection,
  ServicesSection,
  ClientsSection,
  ContactSection,
  Footer,
} from "@/components/sections"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CompanyOverview />
      <PhilosophySection />
      <ServicesSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
