import Link from "next/link";
import Hero from "../components/Hero";
import Header from "../../../components/Header";
import ServicesGrid from "../components/ServicesGrid";
import WhyUs from "../components/WhyUs";
import ServiceAccordion from "../components/ServiceAccordion";
import ProcessTimeline from "../components/ProcessTimeline";
import CTA from "../components/CTA";
import Footer from "../../../components/Footer";

export default function Page() {
  return (
    <section className="bg-brand-gradient">
      <Header />
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <ProcessTimeline />
      <ServiceAccordion />
      <CTA />
      <Footer />
    </section>
  );
}
