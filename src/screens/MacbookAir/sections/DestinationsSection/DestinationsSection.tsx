import { FolderIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const DestinationsSection = (): JSX.Element => {
  return (
    <div className="flex flex-row w-full items-center gap-4 py-16">
      <div className="flex flex-col items-start gap-9 pl-4 pr-12 py-[110px] flex-1">
        <div className="flex flex-col items-start gap-3 w-full">
          <div className="flex flex-col items-start gap-1 w-full">
            <h2 className="mt-[-1.00px] font-['Syne',Helvetica] font-semibold text-[#000000] text-4xl tracking-[-1.44px] leading-[43.2px]">
              Protection that puts
            </h2>
            <h2 className="font-['Syne',Helvetica] font-semibold text-[#000000] text-4xl tracking-[-1.44px] leading-[43.2px]">
              you in control
            </h2>
          </div>

          <p className="font-['Figtree',Helvetica] font-medium text-[#000000] text-sm tracking-[-0.28px] leading-[19.6px]">
            Travel with peace of mind, knowing that you're prepared for the
            unexpected. Choose flight protection that works for you, ensuring
            you're covered before and during your trip, no matter what comes
            your way.
          </p>
        </div>

        <Button className="mb-[-4.00px] gap-1.5 px-3 py-2 rounded-lg bg-buttonprimary-normal shadow-button-primary-normal">
          <FolderIcon className="w-[18px] h-[18px]" />
          <span className="mt-[-0.75px] font-['Figtree',Helvetica] font-normal text-white text-sm tracking-[-0.28px] leading-5 whitespace-nowrap">
            Discover Protection
          </span>
        </Button>
      </div>

      <Card className="relative w-[484px] h-full rounded-[32px] bg-[url(public/frame-11-1.png)] bg-cover bg-[50%_50%] border-0" />
    </div>
  );
};
