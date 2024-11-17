import React from "react";
import Image from "next/image";
import Iconn from "@/assets/Iconn.png";
import tokyo from "@/assets/tokyo.png";
import serv1 from "@/assets/serv1.png";
import serv2 from "@/assets/serv2.png";
import serv3 from "@/assets/serv3.png";
import serv4 from "@/assets/serv4.png";
import serv5 from "@/assets/serv5.png";
import Heading from "@/assets/Heading.png"; // Ensure Heading is imported
import Useit from "../shared/Useit"; // Ensure Useit is imported correctly

const cardData = [
  {
    title1: "Search engine",
    title2: "optimization",
    image: tokyo,
    backgroundColor: "#F3F3F3",
    title1Color: "#B9FF66",
    title2Color: "#B9FF66",
  },
  {
    title1: "Pay-per-click",
    title2: "advertising",
    image: serv1,
    backgroundColor: "#B9FF66",
    title1Color: "#FFFFFF",
    title2Color: "#FFFFFF",
  },
  {
    title1: "Social Media",
    title2: "Marketing",
    image: serv2,
    backgroundColor: "#191A23",
    title1Color: "#FFFFFF",
    title2Color: "#FFFFFF",
  },
  {
    title1: "Email",
    title2: "Marketing",
    image: serv3,
    backgroundColor: "#F3F3F3",
    title1Color: "#B9FF66",
    title2Color: "#B9FF66",
  },
  {
    title1: "Content",
    title2: "Creation",
    image: serv4,
    backgroundColor: "#B9FF66",
    title1Color: "#FFFFFF",
    title2Color: "#FFFFFF",
  },
  {
    title1: "Analytics and ",
    title2: "Tracking",
    image: serv5,
    backgroundColor: "#191A23",
    title1Color: "#B9FF66",
    title2Color: "#B9FF66",
  },
];

const Freeprps = () => {
  return (
    <div>
      {/* Useit Section */}
      <div style={{ marginTop: "20px", marginBottom:"70px"}}>
        <Useit
          imageSrc={Heading}  // Pass image source as prop
          altText="Service 1"
          paragraphText="At our digital marketing agency, we offer a range of services to<br />help businesses grow and succeed online. These services include:"
        />
      </div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 p-12">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start border border-gray-800 rounded-3xl"
            style={{
              backgroundColor: card.backgroundColor,
              boxShadow: "0px 5px 15px rgba(25, 26, 35, 0.1)",
              borderRadius: "45px",
              width: "100%",
              maxWidth: "600px",
              height: "310px",
              margin: "auto",
              padding: "20px 20px",
            }}
          >
            {/* Title Section */}
            <div className="flex items-center justify-between w-full mb-0">
              <h3
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "30px",
                  fontWeight: "550",
                  lineHeight: "32px",
                  color: "#000",
                  textAlign: "left",
                  backgroundColor: card.title1Color,
                  borderRadius: "10px",
                  padding: "5px 10px",
                  margin: "20px 0 0 20px",
                  display: "inline-block",
                }}
              >
                {card.title1}
              </h3>
            </div>
            <div className="flex items-center justify-between w-full mb-0">
              <h3
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "30px",
                  fontWeight: "550",
                  lineHeight: "32px",
                  color: "#000",
                  textAlign: "left",
                  backgroundColor: card.title2Color,
                  borderRadius: "10px",
                  padding: "5px 5px",
                  margin: "0 0 0 20px",
                  display: "inline-block",
                }}
              >
                {card.title2}
              </h3>
            </div>

            {/* Centered Image on the Right */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "60px",
                transform: "translateY(-50%)",
                width: "200px",
                height: "auto",
              }}
            >
              <Image src={card.image} alt={card.title1} width={200} height={150} />
            </div>

            {/* Icon and Learn More Text */}
            <div
              className="flex items-center"
              style={{
                position: "absolute",
                bottom: "60px",
                left: "40px",
              }}
            >
              <Image src={Iconn} alt="Icon" width={41} height={41} />
              <span
                style={{
                  fontFamily: "Space Grotesk",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  color:
                    card.title1 === "Social Media" && card.title2 === "Marketing" ||
                    card.title1 === "Analytics and " && card.title2 === "Tracking"
                      ? "#FFFFFF"
                      : "#000",
                  cursor: "pointer",
                  marginLeft: "8px",
                }}
              >
                Learn more
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Freeprps;
