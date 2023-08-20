import React from "react";
import BannerSection from "../components/banner";
import WelcomeSection from "../components/welcome";
import ServicesSection from "../components/services";
import GreetingsSection from "../components/greeetings";
import PartnerSection from "../components/partners";
export default function HomePage() {
  return (
    <>
      <BannerSection />
      <WelcomeSection />
      <GreetingsSection />
      <ServicesSection />
      <PartnerSection />
    </>
  );
}
