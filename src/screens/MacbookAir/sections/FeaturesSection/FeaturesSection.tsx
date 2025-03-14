import { ArrowRightIcon, FolderArchiveIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Destination data for mapping
  const destinations = [
    {
      name: "Australia",
      image: "public/frame-25.png",
      buttonBg: "public/rectangle-2-2.svg",
    },
    {
      name: "Canada",
      image: "public/frame-25-1.png",
      buttonBg: "public/rectangle-2-3.svg",
    },
    {
      name: "Hong Kong",
      image: "public/frame-25-2.png",
      buttonBg: "public/rectangle-2-1.svg",
    },
    {
      name: "Malaysia",
      image: "public/frame-25-3.png",
      buttonBg: "public/rectangle-2.svg",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-9 px-12 py-20">
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-start max-w-[584px]">
          <h2 className="[font-family:'Syne',Helvetica] font-semibold text-[#161616] text-5xl tracking-[-1.92px] leading-[57.6px]">
            Destinations Ready for
            <br />
            you to explore
          </h2>
        </div>

        <Button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-buttonprimary-normal shadow-button-primary-normal">
          <FolderArchiveIcon className="w-[18px] h-[18px]" />
          <span className="[font-family:'Figtree',Helvetica] font-normal text-white text-sm tracking-[-0.28px] leading-5">
            Explore all destinations
          </span>
        </Button>
      </div>

      <div className="flex items-start gap-4 w-full">
        {destinations.map((destination, index) => (
          <Card
            key={index}
            className="flex-1 rounded-3xl overflow-hidden shadow-[0px_0px_12px_#00000014] bg-white"
          >
            <CardContent className="p-0 relative h-[377px]">
              <div
                className="absolute w-[284px] h-[213px] top-0 left-0 bg-cover bg-[50%_50%]"
                style={{ backgroundImage: `url(${destination.image})` }}
              />

              <div className="flex flex-col w-[252px] items-start gap-1 absolute top-[229px] left-4">
                <h3 className="[font-family:'Instrument_Serif',Helvetica] font-normal italic text-[#000000] text-4xl tracking-[-1.44px] leading-[43.2px]">
                  {destination.name}
                </h3>
                <p className="[font-family:'Figtree',Helvetica] font-normal text-[#000000] text-xs tracking-[-0.24px] leading-[14.4px]">
                  Flights to {destination.name}
                </p>
              </div>

              <div className="absolute w-[228px] h-[42px] top-[335px] left-7">
                <div
                  className="relative w-[242px] h-[49px] top-[-7px] left-[-7px] bg-[100%_100%] flex items-center justify-center"
                  style={{ backgroundImage: `url(${destination.buttonBg})` }}
                >
                  <div className="inline-flex items-center gap-1.5">
                    <span className="[font-family:'Figtree',Helvetica] font-medium text-white text-sm tracking-[-0.42px] leading-[16.8px]">
                      Explore Now
                    </span>
                    <ArrowRightIcon className="w-[18px] h-[18px] text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
