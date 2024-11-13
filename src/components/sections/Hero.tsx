import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import Heroposter from "@/assets/Hero-Poster.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-18 pb-16">
      {" "}
     
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left section */}
          <div className="flex-1">
            <div className="mb-4">
              <h1 className="text-[60px] sm:text-[60px] font-[500] leading-[70px] font-space-grotesk">
                Navigating the
                <br /> digital landscape
                <br /> for success
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>

            {/* Button */}
            <button className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition">
              Book a consultation
            </button>
          </div>

          {/* image */}
          <div className="flex-2 mt-0 md:mt-0 lg:mt-0">
            <Image
              src={Heroposter}
              alt="Hero Poster"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
