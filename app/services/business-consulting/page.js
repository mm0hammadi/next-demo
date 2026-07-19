"use client";
import Hero from "../components/Hero";
import business, { businessFramework } from "../../data/business";
import Header from "../../../components/Header";
import Intro from "../components/Intro";
import Footer from "../../../components/Footer";
import GrowthFramework from "../components/GrowthFramework";
import { useState } from "react";
import ServiceAccordion from "../components/ServiceAccordion";
import ServicesGrid from "../components/ServicesGrid";
import ProcessTimeline from "../components/ProcessTimeline";
import Benefits from "../components/Benefits";
import FAQ from "../components/faq";
import WhyUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";
import ServicePage from "../components/ServicePage";
import { Icon } from "lucide-react";
import GrowthChart from "../components/GrowthChart";

export default function Page() {
  const [selectedService, setSelectedService] = useState(null);
  <Icon className="text-blue-600" size={26} />;
  return (
    <>
      <Header />
      <GrowthChart data={businessFramework} />
      <ServicePage data={business} />;
      <Footer />
    </>
  );
}
