import { Header } from "@/components/header"
import { OverviewSection } from "@/components/sections/overview-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ValuesSection } from "@/components/sections/values-section"
import { CapabilitiesSection } from "@/components/sections/capabilities-section"
import { OperationalSection } from "@/components/sections/operational-section"
import { ApproachSection } from "@/components/sections/approach-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <div className="pt-16">
        <OverviewSection />
        <ServicesSection />
        <ValuesSection />
        <CapabilitiesSection />
        <OperationalSection />
        <ApproachSection />
        <ContactSection />
      </div>
    </main>
  )
}
