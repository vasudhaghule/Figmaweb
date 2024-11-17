import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface ServicesProps {
  imageSrc: StaticImageData;
  altText: string;
  paragraphText: string;
}

const Useit: FC<ServicesProps> = ({ imageSrc, altText, paragraphText }) => {
  return (
    <div>
      {/* Flexbox layout for image and paragraph side by side */}
      <div className="flex items-start justify-start gap-10 mt-12">
        <div className="ml-16" style={{ width: "178px", height: "51px" }}>
          <Image src={imageSrc} alt={altText} className="w-full h-auto" />
        </div>
        <div className="text-lg text-black-700 mt-0">
          <p
            style={{
              fontFamily: "Space Grotesk",
              fontSize: "20px",
              fontWeight: "450",
              lineHeight: "24px",
              textAlign: "center",
              textDecorationSkipInk: "none",
              textUnderlinePosition: "from-font",
              margin: "0",
              padding: "0",
            }}
            dangerouslySetInnerHTML={{ __html: paragraphText }} // Render HTML content with line breaks
          />
        </div>
      </div>

      {/* Decorative SVG line */}
      <div className="mt-0 ml-12">
        <svg
          width="178"
          height="51"
          viewBox="0 0 178 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </div>
    </div>
  );
};

export default Useit;
