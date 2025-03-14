import React from "react";
import { Button } from "../../../../components/ui/button";

export const SupportSection = (): JSX.Element => {
  // Data for airline logos to enable mapping
  const topRowAirlines = [
    { name: "Virgin America", src: "public/virgin-america-.svg" },
    { name: "Qatar Airways", src: "public/qatar-airways--1.svg" },
    { name: "Pegasus Airlines", src: "public/pegasus-airlines-.svg" },
    { name: "Lion Air", src: "public/lion-air--1.svg" },
    { name: "Virgin America", src: "public/virgin-america--1.svg" },
    { name: "Lufthansa", src: "public/lufthansa-.svg" },
    { name: "Air Anatolia", src: "public/air-anatolia--1.svg" },
  ];

  const bottomRowAirlines = [
    { name: "Qatar Airways", src: "public/qatar-airways--2.svg" },
    { name: "Pegasus Airlines", src: "public/pegasus-airlines--1.svg" },
    { name: "Lion Air", src: "public/lion-air-.svg" },
    { name: "Virgin America", src: "public/virgin-america--2.svg" },
    { name: "Lufthansa", src: "public/lufthansa--1.svg" },
    { name: "Air Anatolia", src: "public/air-anatolia-.svg" },
    { name: "Qatar Airways", src: "public/qatar-airways-.svg" },
  ];

  return (
    <section className="relative w-full py-20 bg-[#05a9ea] flex flex-col items-center gap-2.5 overflow-hidden">
      <img
        className="absolute w-full h-[662px] top-0 left-0"
        alt="Background element"
        src="public/6707-1-3.png"
      />

      <div className="flex flex-col items-center gap-11 relative w-full">
        <header className="flex flex-col w-[584px] items-start px-4 lg:px-0">
          <h2 className="self-stretch mt-[-1.00px] font-['Syne',Helvetica] font-semibold text-white text-5xl text-center tracking-[-1.92px] leading-[57.6px]">
            Access airlines all
          </h2>
          <h2 className="self-stretch font-['Syne',Helvetica] font-semibold text-white text-5xl text-center tracking-[-1.92px] leading-[57.6px]">
            around the world
          </h2>
        </header>

        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex items-center justify-center gap-4 w-full overflow-hidden">
            <div className="flex items-center animate-scroll">
              {[...topRowAirlines, ...topRowAirlines].map((airline, index) => (
                <img
                  key={`top-${index}`}
                  className="relative h-[147px] object-contain mx-2"
                  alt={airline.name}
                  src={airline.src}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 w-full overflow-hidden">
            <div className="flex items-center animate-scroll-reverse">
              {[...bottomRowAirlines, ...bottomRowAirlines].map(
                (airline, index) => (
                  <img
                    key={`bottom-${index}`}
                    className="relative h-[147px] object-contain mx-2"
                    alt={airline.name}
                    src={airline.src}
                  />
                )
              )}
            </div>
          </div>
        </div>

        <Button className="bg-buttonprimary-normal text-white rounded-lg shadow-button-primary-normal">
          Explore all airlines
        </Button>
      </div>
    </section>
  );
};
