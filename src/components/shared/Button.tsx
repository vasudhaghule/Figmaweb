import React from 'react';
import Image from 'next/image'; // Correct import for Next.js Image
import Icon1 from '@/assets/Icon1.png'; // Ensure the path to your image is correct

const Button = () => {
  return (
    <div>
      <div
        className="flex items-center"
        style={{
          position: "absolute",
          bottom: "60px",
          left: "40px",
          flexDirection: "row-reverse", // Reverse the order of children
        }}
      >
        {/* Image on the right */}
        <Image src={Icon1} alt="Icon" width={41} height={41} />

        {/* Learn More Text */}
        <span
          style={{
            fontFamily: "Space Grotesk",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "28px",
            color: "#FFFFFF", // Always white
            cursor: "pointer",
            marginRight: "8px", // Adjust spacing to the right of the text
          }}
        >
          Learn more
        </span>
      </div>
    </div>
  );
};

export default Button;
