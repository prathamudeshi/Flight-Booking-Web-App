import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../../components/ui/toggle-group";

export const MainContentSection = (): JSX.Element => {
  // Data for form fields
  const formFields = [
    {
      id: "from",
      label: "From",
      icon: "public/airplanetakeoff.svg",
      code: "DEL",
      city: "Delhi",
    },
    {
      id: "to",
      label: "To",
      icon: "public/airplanelanding.svg",
      code: "BOM",
      city: "Mumbai",
    },
    {
      id: "dates",
      label: "Dates",
      icon: "public/linear---time---calendar.svg",
      content: (
        <div className="inline-flex items-center gap-1">
          <div className="font-medium text-black text-sm tracking-[-0.28px] leading-6 whitespace-nowrap">
            Sat, 15 Mar
          </div>
          <div className="font-medium text-black text-sm tracking-[-0.28px] leading-6 whitespace-nowrap hidden sm:block">
            -
          </div>
          <div className="font-medium text-black text-sm tracking-[-0.28px] leading-6 whitespace-nowrap hidden sm:block">
            Mon, 17 Mar
          </div>
        </div>
      ),
    },
    {
      id: "passenger",
      label: "Passenger & Class",
      icon: "public/outline---users---users-group-rounded.svg",
      content: (
        <div className="inline-flex items-center gap-1">
          <div className="font-medium text-black text-sm tracking-[-0.28px] leading-6 whitespace-nowrap">
            1 Adult
          </div>
          <div className="text-center font-medium text-black text-sm tracking-[-0.28px] leading-6 whitespace-nowrap hidden sm:block">
            •
          </div>
          <div className="font-medium text-black text-sm tracking-[-0.28px] leading-6 whitespace-nowrap hidden sm:block">
            Economy
          </div>
        </div>
      ),
    },
  ];

  // Trip type options
  const tripTypes = [
    { id: "return", label: "Return" },
    { id: "oneway", label: "One-way" },
    { id: "multicity", label: "Multi-city" },
  ];

  return (
    <section className="relative w-full min-h-[579px] bg-[url(public/6707-1.png)] bg-cover">
      {/* Hero content */}
      <div className="flex flex-col w-full lg:w-[868px] items-center gap-3 absolute top-[127px] left-1/2 transform -translate-x-1/2 px-4">
        <h1 className="relative self-stretch mt-[-1.00px] font-['Syne',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-[76px] text-center tracking-[-3.80px] leading-[1.2]">
          Book Flights. Pay Later
        </h1>
        <p className="font-normal text-white text-base md:text-lg lg:text-[19.4px] tracking-[-0.39px] leading-[1.2] relative self-stretch font-['Figtree',Helvetica] text-center">
          Find your perfect flight and book with confidence
        </p>
      </div>

      {/* Logo */}
      <div className="gap-[5.56px] top-[30px] inline-flex items-center absolute left-4 sm:left-12">
        <div className="relative w-[50px] h-[50px] rounded-[1388.89px] overflow-hidden border-[1.39px] border-solid border-white">
          <img
            className="absolute w-[33px] h-[33px] top-2 left-2"
            alt="Outline astronomy"
            src="public/outline---astronomy---ufo-4.svg"
          />
        </div>
        <div className="w-[97.22px] flex flex-col items-start relative">
          <div className="relative self-stretch mt-[-1.39px] font-['Figtree',Helvetica] font-medium text-white text-[19.4px] tracking-[0] leading-[23.3px]">
            Alternative
          </div>
          <div className="relative self-stretch font-['Figtree',Helvetica] font-medium text-white text-[19.4px] tracking-[0] leading-[23.3px]">
            Airlines
          </div>
        </div>
      </div>

      {/* Manage booking button */}
      <Button className="absolute top-[37px] right-4 sm:right-12 flex items-center gap-1.5 bg-buttonprimary-normal shadow-button-primary-normal">
        <img
          className="w-[18px] h-[18px]"
          alt="Folder with files"
          src="public/outline---folders---folder-with-files.svg"
        />
        <span className="font-['Figtree',Helvetica] font-normal text-white text-sm tracking-[-0.28px] leading-5">
          Manage booking
        </span>
      </Button>

      {/* Trip type toggle */}
      <Card className="inline-flex items-center gap-1.5 p-1 absolute top-[331px] left-1/2 transform -translate-x-1/2 bg-white rounded-[10px] shadow-[0px_0px_8px_#0000001f] border-none">
        <ToggleGroup
          type="single"
          defaultValue="return"
          className="flex flex-wrap sm:flex-nowrap"
        >
          {tripTypes.map((type) => (
            <ToggleGroupItem
              key={type.id}
              value={type.id}
              className="px-4 py-2 rounded-lg data-[state=on]:bg-zinc-950 data-[state=on]:text-white data-[state=off]:bg-transparent data-[state=off]:text-zinc-950"
            >
              <span className="font-['Figtree',Helvetica] font-normal text-sm tracking-[-0.28px] leading-5">
                {type.label}
              </span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </Card>

      {/* Search form */}
      <div className="absolute w-full h-auto sm:h-[210px] top-[389px] left-0 px-4">
        <div className="absolute w-full h-[183px] top-[27px] left-0 [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgb(255,255,255)_100%)]" />

        <Card className="flex flex-col sm:flex-row w-full max-w-[1016px] mx-auto items-stretch sm:items-center absolute top-0 left-1/2 transform -translate-x-1/2 bg-white rounded-[10px] overflow-hidden border-[0.5px] border-solid border-[#d7d7d7] shadow-[0px_0px_8px_#0000001f]">
          <CardContent className="flex flex-col sm:flex-row w-full p-0">
            {formFields.map((field, index) => (
              <div
                key={field.id}
                className={`flex flex-col items-start px-3 py-2 sm:py-0 relative flex-1 grow bg-white ${
                  index < formFields.length - 1 &&
                  "sm:border-r-[0.5px] border-solid border-[#d7d7d7]"
                }`}
              >
                <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto] z-[1]">
                  <div className="inline-flex items-start gap-2 px-0 py-1 relative flex-[0_0_auto] bg-white rounded-lg">
                    <div className="relative w-fit mt-[-1.00px] font-['Figtree',Helvetica] font-normal text-gray-555 text-xs tracking-[0] leading-4 whitespace-nowrap">
                      {field.label}
                    </div>
                  </div>
                </div>

                <div className="flex h-[58px] items-center gap-3 pt-2.5 pb-3 px-0 relative self-stretch w-full -mt-3 z-0 rounded-lg">
                  <img
                    className="relative w-6 h-6"
                    alt={field.label}
                    src={field.icon}
                  />

                  {field.code ? (
                    <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-['Figtree',Helvetica] font-bold text-black text-xl tracking-[-0.40px] leading-6 whitespace-nowrap">
                        {field.code}
                      </div>

                      <div className="inline-flex items-start gap-2 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-['Figtree',Helvetica] font-normal text-gray-555 text-sm tracking-[0] leading-5 whitespace-nowrap">
                          {field.city}
                        </div>
                      </div>
                    </div>
                  ) : (
                    field.content
                  )}
                </div>
              </div>
            ))}

            <div className="inline-flex flex-col h-auto sm:h-[70px] items-center justify-center p-3 relative flex-[0_0_auto] bg-white">
              <Button className="w-full sm:w-auto px-3 py-2 flex-1 grow shadow-[0px_0px_0px_1px_#121212,0px_0px_0px_1px_#121212] inline-flex items-center gap-1.5 relative rounded-lg overflow-hidden bg-zinc-950">
                <SearchIcon className="w-5 h-5" />
                <span className="text-white text-sm tracking-[-0.28px] leading-5 font-['Figtree',Helvetica] font-normal">
                  Search Flights
                </span>
              </Button>
            </div>

            {/* Swap button */}
            <div className="hidden sm:inline-flex items-start gap-1.5 p-1.5 absolute top-5 left-[199px] bg-white rounded-[30px] border-[0.75px] border-solid border-[#e6e8e7]">
              <img
                className="relative w-[18px] h-[18px]"
                alt="Arrows down up"
                src="public/arrowsdownup.png"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
