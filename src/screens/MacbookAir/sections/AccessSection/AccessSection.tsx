import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AccessSection = (): JSX.Element => {
  const cards = [
    {
      id: 1,
      title: "Before you book",
      description:
        "What makes us unique and why you should start booking your flights the Alternative Airlines way.",
      buttonText: "About us",
      backgroundImage: "public/before-booking.png",
      rotateClass: "rotate-[8.16deg]",
      gradientPosition: "top-[26px] left-6",
      contentPosition: "top-[203px] left-[181px]",
    },
    {
      id: 2,
      title: "After you book",
      description:
        "Our next-level customer support team is on hand and available for you every step of the way.",
      buttonText: "Our Services",
      backgroundImage: "public/before-booking-1.png",
      rotateClass: "rotate-[-8.70deg]",
      gradientPosition: "top-7 left-[26px]",
      contentPosition: "top-[200px] left-[183px]",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[54px] px-12 py-20 w-full">
      <div className="flex flex-col w-[584px] items-start">
        <h2 className="self-stretch mt-[-1.00px] [font-family:'Syne',Helvetica] font-semibold text-[#161616] text-5xl text-center tracking-[-1.92px] leading-[57.6px]">
          We&apos;re with you every
        </h2>
        <h2 className="self-stretch [font-family:'Syne',Helvetica] font-semibold text-[#161616] text-5xl text-center tracking-[-1.92px] leading-[57.6px]">
          step of the way
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 self-stretch w-full">
        <div className="flex flex-col w-[484px] items-start gap-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              className="w-full h-[293px] rounded-3xl overflow-hidden shadow-[0px_0px_12px_#00000014] p-0"
            >
              <CardContent
                className="p-0 h-full"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <div className="relative w-[445px] h-[425px] top-[-75px] left-[82px]">
                  <div
                    className={`absolute w-[396px] h-[372px] ${card.gradientPosition} ${card.rotateClass} [background:linear-gradient(180deg,rgb(255,255,255)_13%,rgba(255,255,255,0.67)_54%,rgba(255,255,255,0)_100%)]`}
                  />

                  <div
                    className={`flex flex-col w-[205px] items-start gap-[26px] absolute ${card.contentPosition}`}
                  >
                    <div className="flex flex-col items-start gap-1 self-stretch w-full">
                      <div className="self-stretch mt-[-1.00px] [font-family:'Instrument_Serif',Helvetica] font-normal italic text-[#000000] text-4xl tracking-[-1.28px] leading-[38.4px]">
                        {card.title}
                      </div>
                      <div className="self-stretch [font-family:'Figtree',Helvetica] font-normal text-[#000000] text-xs tracking-[0] leading-[16.8px]">
                        {card.description}
                      </div>
                    </div>
                    <Button
                      variant="default"
                      className="bg-zinc-950 text-white text-xs tracking-[-0.24px] leading-[14.4px] rounded-lg px-3 py-2 h-auto [font-family:'Figtree',Helvetica] font-normal"
                    >
                      {card.buttonText}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="w-[484px] h-[602px] rounded-3xl overflow-hidden shadow-[0px_0px_12px_#00000014] p-0">
          <CardContent
            className="p-0 h-full bg-white"
            style={{
              backgroundImage: "url(public/need-help.png)",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="relative h-[602px]">
              <div className="w-[293px] h-[484px] top-[214px] left-24 rotate-90 absolute [background:linear-gradient(180deg,rgb(255,255,255)_13%,rgba(255,255,255,0.67)_54%,rgba(255,255,255,0)_100%)]" />

              <div className="w-[328px] top-[449px] left-4 flex flex-col items-start gap-[26px] absolute">
                <div className="flex flex-col items-start gap-1 self-stretch w-full">
                  <div className="self-stretch mt-[-1.00px] [font-family:'Instrument_Serif',Helvetica] font-normal italic text-[#000000] text-4xl tracking-[-1.44px] leading-[43.2px]">
                    Need help?
                  </div>
                  <div className="self-stretch [font-family:'Figtree',Helvetica] font-normal text-[#000000] text-xs tracking-[0] leading-[16.8px]">
                    Looking for additional help? Check out our help centre for
                    all the answers to all of your questions.
                  </div>
                </div>
                <Button
                  variant="default"
                  className="bg-zinc-950 text-white text-xs tracking-[-0.24px] leading-[14.4px] rounded-lg px-3 py-2 h-auto [font-family:'Figtree',Helvetica] font-normal"
                >
                  Help center
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
