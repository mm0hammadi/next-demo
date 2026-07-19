"use client";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Benefits from "./Benefits";
import CTA from "./CTA";
import FAQ from "./faq";
import GrowthFramework from "./GrowthFramework";
import Hero from "./Hero";
import Intro from "./Intro";
import ProcessTimeline from "./ProcessTimeline";
import ServicesGrid from "./ServicesGrid";
import WhyUs from "./WhyChooseUs";

export default function ServicePage({ data }) {
  return (
    <>
      {/* <Header /> */}
      <Hero {...data.hero} />
      <Intro {...data.intro} />
      <GrowthFramework items={data.chart} />
      <ServicesGrid services={data.services} />
      <ProcessTimeline steps={data.process} />
      <WhyUs data={data.whyUs} />
      <Benefits items={data.benefits} />
      <FAQ questions={data.faq} />
      <CTA data={data.cta} />
      {/* <Footer /> */}
    </>
  );
}
