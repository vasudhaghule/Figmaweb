import React from "react";
import Image from "next/image";
import Frame from "@/assets/Frame .png";
import Wrapper from "../shared/Wrapper";
import Useit from "../shared/Useit";

const SpecializedTracks = () => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: "#FFFFFF",
    borderRadius: "45px",
    padding: "60px 50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: "331px",
    width: "387px",
    position: "relative",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #000",
    margin:"0px 6px 10px 20px"
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: "20px", 
    justifyContent: "center",
    alignItems: "center",
  };

  
  const containers = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: `Container ${index + 1}`,
    description:
      "Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.",
  }));

  return (
    <section>
      <Wrapper>
        {/* Grid */}
        <div style={gridStyle}>
          {containers.map((container) => (
            <div key={container.id} style={containerStyle}>
              <h3
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "32px",
                  color: "#000",
                }}
              >
                {container.title}
              </h3>

              {/*  Para */}
              <p
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "22px",
                  color: "#000",
                  marginTop: "10px",
                }}
              >
                {container.description}
              </p>

              {/* Button */}
              <button
                className="px-4 py-2 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition"
                style={{ marginTop: "10px" }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </Wrapper>

      {/* Additional Content */}
      <div style={{ marginTop: "100px", marginBottom: "60px" }}>
        <Useit
          title="Testimonials"
          paragraphText="Hear from Our Satisfied Clients: Read Our Testimonials <br /> to Learn More about Our Digital Marketing Services"
        />
      </div>
      <div>
      <div
          className="relative flex flex-col items-start border border-gray-800 rounded-3xl shadow-md mx-auto"
          style={{
            backgroundColor: "#000000",
            borderRadius: "45px",
            maxWidth: "1240px", 
            height: "625px", 
            padding: "60px 0 0 50px",
          }}
        >
          /</div>
      </div>
      
      <div style={{ marginTop: "100px", marginBottom: "90px" }}>
      <Useit
        title="Contact Us"
        paragraphText="Connect with Us: Let's Discuss Your <br />  Digital Marketing Needs"
      />
    </div>

      
    </section>
  );
};

export default SpecializedTracks;
