import AboutHero from "../../components/AboutHero";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Objectives from "../../components/Objectives";
import TargetCustomers from "../../components/TargetCustomers";
import VisionMission from "../../components/VisionMission";
import WhyPendaryar from "../../components/WhyPendaryar";
import about from "../data/about";

export default function AboutUs() {
  return (
    <main>
      <Header />
      <AboutHero data={about.hero} />

      <VisionMission vision={about.vision} mission={about.mission} />

      <Objectives items={about.objectives} />

      <WhyPendaryar data={about.whyUs} />

      <TargetCustomers data={about.customers} />
      <Footer />
    </main>
  );
}
