import { StarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";

// Testimonial data for mapping
const testimonials = [
  {
    rating: 4,
    text: "I was hesitant at first after reading some mixed reviews, but ended up booking a round trip to Panama with Alternative. Everything went pretty smooth. No issues other than it being a little more pricey due to it being last minute.",
    author: "Ricky Highgarden",
  },
  {
    rating: 5,
    text: "I really appreciate how easy and convenient this website is designed. It is simple to navigate and you can book any flight within minutes. It also offers tabby payment which actually really helps while managing multiple flights.",
    author: "Quin",
  },
  {
    rating: 4,
    text: "It was smooth and the ticket was issued within minutes and I could view the booking instantly on the airline's website. Super amazing. Would highly recommend.",
    author: "Kandice",
  },
  {
    rating: 5,
    text: "The prices were close to what I found on Google. Lots of flexible payment options! You can go wherever you want!",
    author: "Janet",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#05a9ea] px-12 py-20">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
        src="public/6707-1-2.png"
      />

      <div className="flex flex-col items-center gap-[42px] relative z-10 max-w-[1184px] mx-auto">
        <header className="flex flex-col items-center">
          <h2 className="font-['Syne',Helvetica] font-semibold text-white text-5xl tracking-[-1.92px] leading-[57.6px] text-center">
            Trusted by customers
            <br />
            all around the world
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#eefaff] rounded-3xl overflow-hidden h-[327px] flex flex-col"
            >
              <CardContent className="p-5 flex-grow">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className="fill-current text-yellow-400"
                        size={20}
                      />
                    ))}
                  </div>
                  <p className="font-['Figtree',Helvetica] font-normal text-[#000000] text-sm leading-[19.6px]">
                    {testimonial.text}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <p className="font-['Figtree',Helvetica] font-bold text-[#000000] text-base leading-[22.4px]">
                  {testimonial.author}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
