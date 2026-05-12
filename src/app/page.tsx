import { AboutSection } from "@/components/about-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LanguageProvider } from "@/components/language-provider";
import { MarqueeStrip } from "@/components/marquee-strip";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main id="top">
        <Hero />
        <MarqueeStrip />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
