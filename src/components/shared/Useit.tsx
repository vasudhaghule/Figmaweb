import React from 'react';

// Define Props for the Useit component
interface UseitProps {
  title: string; // Title content
  paragraphText: string; // Paragraph content
  titleBgColor?: string; // Optional background color for the title
  titleStyle?: React.CSSProperties; // Optional additional styles for the title
  paragraphStyle?: React.CSSProperties; // Optional additional styles for the paragraph
}

// Define the Useit component
const Useit: React.FC<UseitProps> = ({
  title,
  paragraphText,
  titleBgColor = "#B9FF66", // Default background color
  titleStyle,
  paragraphStyle,
}) => {
  return (
    <div className="flex items-center w-full mb-0" style={{ margin: "20px 0 0 60px" }}>
      {/* Title Section */}
      <h3
        style={{
          fontFamily: "Space Grotesk",
          fontSize: "30px",
          fontWeight: "550",
          lineHeight: "32px",
          color: "#000",
          textAlign: "left",
          backgroundColor: titleBgColor, // Dynamically set background color
          borderRadius: "10px",
          padding: "5px 10px",
          flexShrink: 0, // Prevent the title from shrinking
          ...titleStyle, // Merge additional styles
        }}
      >
        {title}
      </h3>

      {/* Paragraph Section */}
      <p
        style={{
          fontFamily: "Space Grotesk",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "23px",
          color: "#000000",
          marginLeft: "20px", // Space between title and paragraph
          textAlign: "left",
          flexGrow: 1, // Allow the paragraph to grow within the remaining space
          ...paragraphStyle, // Merge additional styles
        }}
        dangerouslySetInnerHTML={{
          __html: paragraphText, // Inject HTML content with line breaks
        }}
      />
    </div>
  );
};

// Export the Useit component for reuse
export default Useit;
