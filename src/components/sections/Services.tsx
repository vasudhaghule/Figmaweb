import React from "react";
import Image from "next/image";
import Heading from "@/assets/Heading.png";

const Services = () => {
  return (
    <div>
      <div></div>
      <div>
        <p>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div>
        <div className="flex-2 mt-0 md:mt-0 lg:mt-0">
          <Image src={Heading} alt="Hero Poster" className="w-full h-auto" />
          <div>
            <svg
              width="178"
              height="51"
              viewBox="0 0 178 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
