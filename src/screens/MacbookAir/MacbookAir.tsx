import React from "react";
import { AccessSection } from "./sections/AccessSection";
import { CallToActionSection } from "./sections/CallToActionSection";
import { BlankSection } from "./sections/BlankSection";
import { DestinationsSection } from "./sections/DestinationsSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";
import { LayoutWrapperSection } from "./sections/LayoutWrapperSection";
import { MainContentSection } from "./sections/MainContentSection";
import { SupportSection } from "./sections/SupportSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const MacbookAir = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full">
        {/* Sections arranged in the order shown in the mockup */}
        <MainContentSection />
        <CallToActionSection />
        <BlankSection />
        <TestimonialsSection />
        {/* <DestinationsSection /> */}
        <HeroSection />
        <FeaturesSection />
        <SupportSection />
        <AccessSection />
        <LayoutWrapperSection />
      </div>
    </div>
  );
};
