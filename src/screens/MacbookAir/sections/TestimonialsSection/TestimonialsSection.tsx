import { FolderIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full gap-8 py-8 lg:py-16 lg:px-40">
      {/* First Section */}
      <section className="flex flex-col lg:flex-row w-full gap-4 px-4 lg:px-8">
        {/* Left side image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-auto rounded-[32px] bg-[url(public/frame-11.png)] bg-cover bg-center" />

        {/* Right side content */}
        <Card className="w-full lg:w-1/2 border-none">
          <CardContent className="flex flex-col items-start gap-6 lg:gap-9 py-8 lg:py-[110px] px-4">
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex flex-col items-start gap-1 w-full">
                <h2 className="font-['Syne',Helvetica] font-semibold text-3xl lg:text-4xl tracking-[-1.44px] leading-[1.2]">
                  Delay payments,
                </h2>
                <h2 className="font-['Syne',Helvetica] font-semibold text-3xl lg:text-4xl tracking-[-1.44px] leading-[1.2]">
                  not your plans
                </h2>
              </div>

              <p className="font-['Figtree',Helvetica] font-medium text-sm tracking-[-0.28px] leading-[1.4]">
                Life happens, and plans change. But that shouldn&#39;t stop you
                from exploring the world. With our flexible payment options,
                delay the cost, not your adventure, and travel when you&#39;re
                ready.
              </p>
            </div>

            <Button className="flex items-center gap-1.5 bg-buttonprimary-normal shadow-button-primary-normal rounded-lg">
              <FolderIcon className="w-[18px] h-[18px]" />
              <span className="font-['Figtree',Helvetica] font-normal text-sm tracking-[-0.28px] leading-5">
                Explore payment options
              </span>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Second Section */}
      <section className="flex flex-col lg:flex-row w-full gap-4 px-4 lg:px-8">
        <Card className="w-full lg:w-1/2 border-none">
          <CardContent className="flex flex-col items-start gap-6 lg:gap-9 py-8 lg:py-[110px] px-4">
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex flex-col items-start gap-1 w-full">
                <h2 className="font-['Syne',Helvetica] font-semibold text-3xl lg:text-4xl tracking-[-1.44px] leading-[1.2]">
                  Protection that puts
                </h2>
                <h2 className="font-['Syne',Helvetica] font-semibold text-3xl lg:text-4xl tracking-[-1.44px] leading-[1.2]">
                  you in control
                </h2>
              </div>

              <p className="font-['Figtree',Helvetica] font-medium text-sm tracking-[-0.28px] leading-[1.4]">
                Travel with peace of mind, knowing that you're prepared for the
                unexpected. Choose flight protection that works for you,
                ensuring you're covered before and during your trip, no matter
                what comes your way.
              </p>
            </div>

            <Button className="flex items-center gap-1.5 bg-buttonprimary-normal shadow-button-primary-normal rounded-lg">
              <FolderIcon className="w-[18px] h-[18px]" />
              <span className="font-['Figtree',Helvetica] font-normal text-sm tracking-[-0.28px] leading-5">
                Learn more
              </span>
            </Button>
          </CardContent>
        </Card>

        {/* Right side image */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-auto rounded-[32px] bg-[url(public/frame-11-1.png)] bg-cover bg-center" />
      </section>
    </div>
  );
};
