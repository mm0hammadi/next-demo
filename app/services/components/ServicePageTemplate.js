import ServiceHero from "./ServiceHero";
import ServicesGrid from "./ServicesGrid";
import WhyUs from "./WhyUs";
import Stats from "../../../components/CounyUp";
import ProcessTimeline from "./ProcessTimeline";
import ServiceAccordion from "./ServiceAccordion";
import CTA from "./CTA";

export default function ServicePageTemplate({
  hero,
  services,
  whyUs,
  stats,
  process,
  details,
  cta,
}) {
  return (
    <>
      <ServiceHero hero={hero} />

      <ServicesGrid
        title={services.title}
        subtitle={services.subtitle}
        services={services.items}
      />

      <WhyUs
        title={whyUs.title}
        subtitle={whyUs.subtitle}
        benefits={whyUs.items}
      />

      {stats && <Stats stats={stats} />}

      <ProcessTimeline
        title={process.title}
        subtitle={process.subtitle}
        steps={process.items}
      />

      <ServiceAccordion
        title={details.title}
        subtitle={details.subtitle}
        details={details.items}
      />

      <CTA {...cta} />
    </>
  );
}
