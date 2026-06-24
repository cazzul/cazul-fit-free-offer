import { About } from "@/components/landing/about"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Truth } from "@/components/landing/truth"
import { WhatsIncluded } from "@/components/landing/whats-included"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatsIncluded />
      <HowItWorks />
      <Truth />
      <Contact />
      <Footer />
    </>
  )
}
