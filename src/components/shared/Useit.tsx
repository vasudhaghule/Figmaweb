import React from 'react';

interface UseitProps {
  title: string; 
  paragraphText: string; 
  titleBgColor?: string; 
  titleStyle?: React.CSSProperties; 
  paragraphStyle?: React.CSSProperties; 
}

const Useit: React.FC<UseitProps> = ({
  title,
  paragraphText,
  titleBgColor = "#B9FF66", 
  titleStyle,
  paragraphStyle,
}) => {
  return (
    <div className="flex items-center w-full mb-0" style={{ margin: "20px 0 0 60px" }}>
    
      <h3
        style={{
          fontFamily: "Space Grotesk",
          fontSize: "30px",
          fontWeight: "550",
          lineHeight: "32px",
          color: "#000",
          textAlign: "left",
          backgroundColor: titleBgColor, 
          borderRadius: "10px",
          padding: "5px 10px",
          flexShrink: 0, 
          
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
