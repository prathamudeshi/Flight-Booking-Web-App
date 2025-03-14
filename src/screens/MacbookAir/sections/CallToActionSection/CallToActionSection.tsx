import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Data for the cards to enable mapping
  const cardData = [
    {
      id: 1,
      title: "Find your perfect flight",
      description:
        "Compare over 600 airlines, effortlessly add extras and pick from over 40 different ways to pay.",
      imagePath: "public/search---marketing.png",
      colorModifyPath: "public/color-modify.png",
      imageWidth: "90px",
      imageHeight: "87px",
      imageTop: "3.5",
      imageLeft: "13px",
      colorModifyTop: "0",
      colorModifyLeft: "0",
    },
    {
      id: 2,
      title: "Pay over time",
      description:
        "Our exclusive payment partnerships give you the power to spread the cost, or simply pay later.",
      imagePath: "public/calendar---marketing.png",
      colorModifyPath: "public/color-modify-1.png",
      imageWidth: "77px",
      imageHeight: "101px",
      imageTop: "7px",
      imageLeft: "22px",
      colorModifyTop: "0",
      colorModifyLeft: "0",
    },
    {
      id: 3,
      title: "Book with confidence",
      description:
        "Next-level customer support, instant confirmation and protection available, you can take it easy before take-off.",
      imagePath: "public/like---marketing.png",
      colorModifyPath: "public/color-modify-2.png",
      imageWidth: "82px",
      imageHeight: "95px",
      imageTop: "2.5",
      imageLeft: "17px",
      colorModifyTop: "0",
      colorModifyLeft: "0",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 py-8 lg:py-16 px-4 xl:px-60 lg:px-6">
      {cardData.map((card) => (
        <Card
          key={card.id}
          className="flex flex-col items-center gap-3 p-6 flex-1 bg-[#dbf6ff] rounded-3xl overflow-hidden"
        >
          <CardContent className="flex flex-col items-center p-0 w-full">
            <div className="relative flex-1 self-stretch w-full flex justify-center">
              <div className="relative w-[115px] h-[115px]">
                <div
                  className={`relative w-[${card.imageWidth}] h-[${card.imageHeight}] top-${card.imageTop} left-[${card.imageLeft}]`}
                  style={{
                    backgroundImage: `url(${card.imagePath})`,
                    backgroundSize: card.id === 1 ? "cover" : "100% 100%",
                    backgroundPosition: card.id === 1 ? "50% 50%" : "initial",
                  }}
                >
                  <img
                    className={`absolute w-[${card.imageWidth}] h-[${card.imageHeight}] top-[${card.colorModifyTop}] left-[${card.colorModifyLeft}]`}
                    alt="Color modify"
                    src={card.colorModifyPath}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 px-3 py-0 self-stretch w-full mt-3">
              <h3 className="font-semibold text-[#000000] text-xl lg:text-2xl tracking-[-0.96px] leading-[1.2] self-stretch font-['Figtree',Helvetica] text-center">
                {card.title}
              </h3>
              <p className="self-stretch font-['Figtree',Helvetica] font-normal text-[#000000] text-sm text-center tracking-[-0.56px] leading-[1.4]">
                {card.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
