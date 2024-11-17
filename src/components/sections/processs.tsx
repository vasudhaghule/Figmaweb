import React from 'react';
import Image from 'next/image'; // Ensure you're using Next.js for optimized image handling
import SampleImageFirst from '@/assets/sub.png'; // Image for containers 2-6
import SampleImage from '@/assets/Plus icon.png'; // Image for container 1
import Useit from '@/components/shared/Useit';

const Processs = () => {
  const containers = [
    { id: 1, title: "Consultation", fontSize: "30px", hasParagraph: true, hasImage: true },
    { id: 2, title: "Research and Strategy Development", fontSize: "30px", hasParagraph: false, hasImage: true },
    { id: 3, title: "Implementation", fontSize: "30px", hasParagraph: false, hasImage: true },
    { id: 4, title: "Monitoring and Optimization", fontSize: "30px", hasParagraph: false, hasImage: true },
    { id: 5, title: "Reporting and Communication", fontSize: "30px", hasParagraph: false, hasImage: true },
    { id: 6, title: "Continual Improvement", fontSize: "30px", hasParagraph: false, hasImage: true },
  ];

  return (
    <section>
      {containers.map((container) => (
        <div
          key={container.id}
          className="relative flex items-center justify-start border border-gray-800 rounded-3xl shadow-md mx-auto"
          style={{
            backgroundColor: container.id === 1 ? "#B9FF66" : "#F3F3F3", // Different colors for the first and others
            borderRadius: "45px",
            maxWidth: "1240px",
            height: container.id === 1 ? "279px" : "159px", // Height for the 1st container is different
            padding: "30px 0 0 50px",
            marginBottom: "20px", // Spacing between containers
          }}
        >
          {/* Container ID Box */}
          <div
            style={{
              position: "absolute",
              top: "35px",
              left: "50px",
              width: "65px",
              height: "77px",
              color: "#000000", // White text color
              display: "flex",
             marginBottom:"20px",
              fontSize: "60px",
              fontWeight: "500",
            }}
          >
            {container.id < 10 ? `0${container.id}` : container.id}
          </div>

          {/* Title */}
          <div
            style={{
              position: "absolute",
              top: "55px",
              left: "150px", // All titles will now be aligned to the left
              fontSize: container.fontSize,
              color: "#191A23",
              fontFamily: "Space Grotesk",
              fontWeight: "500",
              width:"612px",
              height:"38px",
              marginBottom: container.id >= 2 && container.id <= 6 ? "20px" : "0", // Custom margin for containers 2 to 6
            }}
          >
            {container.title}
          </div>

          {/* Image */}
          <div
            style={{
              position: "absolute",
              top: "30px",
              right: "50px", // Positioned to the right
              width: "58px", // Adjust width
              height: "58px", // Adjust height
            }}
          >
            {/* Conditionally render images based on container id */}
            <Image
              src={container.id === 1 ? SampleImageFirst : SampleImage} // Different image for container 1
              alt={`${container.title} illustration`}
              width={150} // Original width of the image
              height={150} // Original height of the image
            />
          </div>

          {/* Horizontal Line in the 1st container */}
          {container.id === 1 && (
            <div
              style={{
                position: "absolute",
                top: "135px", // Align with title
                left: "50px",
                width: "90%", // Span width of container
                borderTop: "2px solid #191A23",
              }}
            />
          )}

          {/* Paragraph only in 1st container */}
          {container.hasParagraph && (
            <div
              style={{
                position: "absolute",
                top: "140px",
                left: "50px",
                fontFamily: "Space Grotesk",
                width: "1114px",
                height: "60px",
                lineHeight:"22.97px"
              }}
            >
              <p style={{ color: "#191A23", marginTop: "40px" }}>
                During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
              </p>
            </div>
          )}
        </div>
      ))}
     <div style={{ marginTop: "100px", marginBottom: "15px" }}>
      <Useit
        title="Case Studies"
        paragraphText="Explore Real-Life Examples of Our Proven Digital Marketing <br /> Success through Our Case Studies"
      />
    </div>
    <div style={{ marginTop: "100px", marginBottom: "90px" }}>
      <Useit
        title="Team"
        paragraphText="Meet the skilled and experienced team behind our  <br /> successful digital marketing strategies"
      />
    </div>
    </section>
  );
};

export default Processs;
