"use client";
import ServicePage from "../components/ServicePage";
import hr, { hrFramework } from "../../data/hr";
import { Icon } from "lucide-react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import GrowthChart from "../components/GrowthChart";
import { useState } from "react";

export default function Page() {
  const [selectedService, setSelectedService] = useState(null);
  <Icon className="text-blue-600" size={26} />;
  return (
    <>
      <Header />
      <GrowthChart data={hrFramework} />
      <ServicePage data={hr} />
      <Footer />
    </>
  );
}
