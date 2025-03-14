import React from "react";

export const LayoutWrapperSection = (): JSX.Element => {
  // Data for footer links
  const footerLinks = {
    bookWithUs: {
      title: "Book with us",
      links: [
        "Airlines we ticket",
        "Buy now pay later",
        "Pay the way you want",
        "You're protected",
        "Our customer service",
        "Travel agent",
        "Best fare finder",
        "Search & book",
        "Multi step search",
        "Student discount",
        "Graduate discount",
      ],
    },
    myBooking: {
      title: "My booking",
      links: [
        "Manage my booking",
        "Help Centre",
        "Contact us",
        "Travel advice",
      ],
    },
    company: {
      title: "Company",
      links: [
        "About us",
        "Reviews",
        "Blog",
        "Media Centre",
        "Careers",
        "Modern Slavery",
      ],
    },
  };

  return (
    <footer className="relative w-full py-16 bg-[url(public/6707-1-4.png)] bg-cover">
      <div className="container mx-auto px-12">
        {/* Gradient overlay */}
        <div className="absolute w-full h-[195px] top-0 left-0 [background:linear-gradient(0deg,rgba(255,255,255,0)_0%,rgb(255,255,255)_100%)]" />

        {/* Logo and company name */}
        <div className="flex items-center gap-[6.69px] mb-12">
          <div className="relative w-[60.22px] h-[60.22px] rounded-[1672.73px] overflow-hidden border-[1.67px] border-solid border-white">
            <img
              className="absolute w-10 h-10 top-2.5 left-2.5"
              alt="Outline astronomy"
              src="public/outline---astronomy---ufo-4.svg"
            />
          </div>

          <div className="flex flex-col items-start">
            <div className="[font-family:'Figtree',Helvetica] font-medium text-white text-[23.4px] tracking-[0] leading-[28.1px]">
              Alternative
            </div>
            <div className="[font-family:'Figtree',Helvetica] font-medium text-white text-[23.4px] tracking-[0] leading-[28.1px]">
              Airlines
            </div>
          </div>
        </div>

        {/* Footer links grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Book with us column */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-white text-xl tracking-[-0.40px] leading-[24.0px] [font-family:'Figtree',Helvetica] font-semibold">
              {footerLinks.bookWithUs.title}
            </h3>
            <div className="flex flex-col items-start gap-2.5 w-full">
              {footerLinks.bookWithUs.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Figtree',Helvetica] font-normal text-white text-base tracking-[-0.32px] leading-[19.2px] hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* My booking column */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-white text-xl tracking-[-0.40px] leading-[24.0px] [font-family:'Figtree',Helvetica] font-semibold">
              {footerLinks.myBooking.title}
            </h3>
            <div className="flex flex-col items-start gap-2.5 w-full">
              {footerLinks.myBooking.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Figtree',Helvetica] font-normal text-white text-base tracking-[-0.32px] leading-[19.2px] hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Company column */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-white text-xl tracking-[-0.40px] leading-[24.0px] [font-family:'Figtree',Helvetica] font-semibold">
              {footerLinks.company.title}
            </h3>
            <div className="flex flex-col items-start gap-2.5 w-full">
              {footerLinks.company.links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="[font-family:'Figtree',Helvetica] font-normal text-white text-base tracking-[-0.32px] leading-[19.2px] hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-16">
          <img
            className="w-full h-px object-cover"
            alt="Line"
            src="public/line-1.svg"
          />
        </div>
      </div>
    </footer>
  );
};
