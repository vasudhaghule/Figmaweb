import React from "react";
import Image from "next/image";
import Frame from "@/assets/Frame .png";
import Wrapper from "../shared/Wrapper";
import Useit from "../shared/Useit";

const SpecializedTracks = () => {
  return (
    <section>
      <Wrapper>
        <div
          className="relative flex flex-col items-start border border-gray-800 rounded-3xl shadow-md mx-auto"
          style={{
            backgroundColor: "#F3F3F3",
            borderRadius: "45px",
            maxWidth: "1240px",
            height: "345px",
            padding: "60px 0 0 50px",
          }}
        >
          {/* Title Section */}
          <div className="flex items-center justify-between w-full mb-4">
            <h3
              className="text-left font-medium"
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "30px",
                lineHeight: "38.28px",
                color: "#000",
              }}
            >
              Let’s make things happen
            </h3>
          </div>

          {/* Description Paragraph */}
          <div className="mb-8">
            <p
              className="text-left"
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "23px",
              }}
            >
              Contact us today to learn more about how our digital 
              <br />
              marketing services can help your business grow 
              <br />
              and succeed online.
            </p>
          </div>

          {/* Right-Aligned and Centered Frame Image */}
          <div
            className="absolute"
            style={{
              top: "50%", // Position at the middle of the container
              right: "60px", // Offset from the right edge
              transform: "translateY(-50%)", // Adjust to center vertically
              width: "459px",
              height: "394.27px",
              border: "1px solid transparent",
            }}
          >
            <Image
              src={Frame}
              alt="Visual representation of our services"
              width={459}
              height={.27}
            />
          </div>

          {/* Button */}
          <div>
            <button className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition">
              Get your free proposal
            </button>
          </div>
        </div>
      </Wrapper>

      {/* Add space between components */}
      <div style={{ marginTop: "100px", marginBottom: "60px" }}>
      <Useit
        title="Case Studies"
        paragraphText="Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies"
      />
    </div>
    </section>
    
  );
};

export default SpecializedTracks;
