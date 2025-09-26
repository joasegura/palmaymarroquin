import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";
import WhatsAppBubble from "@/components/whatsapp/WhatsAppBubble";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <WhatsAppBubble />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
