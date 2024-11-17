import React from 'react';

const Services = () => {
  return (
    <div
      className="relative flex items-center justify-start border border-gray-800 rounded-3xl shadow-md mx-auto"
      style={{
        backgroundColor: "#191A23",
        borderRadius: "45px",
        maxWidth: "1240px",
        height: "326px",
        padding: "30px 0 0 50px", // Slightly reduced padding at the top
        gap: '20px', // Gap between paragraphs
      }}
    >
      {/* First Paragraph */}
      <div
        style={{
          width: "30%", // Adjust width for even spacing
          padding: "0 10px 10px 10px", // Reduced padding at the top
          marginTop: "-20px", // Move content slightly upwards
          borderRight: '1px solid #FFFFFF', // Center border
          textAlign: "left",
        }}
      >
        <p style={{ color: 'white', whiteSpace: 'normal' }}>
          For a local restaurant, we <br />
          implemented a targeted PPC <br />
          campaign that resulted in a 50% <br />
          increase in website traffic and a <br />
          25% increase in sales.
        </p>
      </div>

      {/* Second Paragraph */}
      <div
        style={{
          width: "30%", // Adjust width for even spacing
          padding: "0 10px 10px 10px", // Reduced padding at the top
          marginTop: "-20px", // Move content slightly upwards
          borderRight: '1px solid #FFFFFF', // Center border
          textAlign: "left",
        }}
      >
        <p style={{ color: 'white', whiteSpace: 'normal' }}>
          For a B2B software company, we<br />
          developed an SEO strategy that<br />
          resulted in a first page ranking<br />
          for key keywords and a 200%<br />
          increase in organic traffic.
        </p>
      </div>

      {/* Third Paragraph */}
      <div
        style={{
          width: "30%", // Adjust width for even spacing
          padding: "0 10px 10px 10px", // Reduced padding at the top
          marginTop: "-20px", // Move content slightly upwards
          textAlign: "left",
        }}
      >
        <p style={{ color: 'white', whiteSpace: 'normal' }}>
          For a national retail chain, we<br />
          created a social media<br />
          marketing campaign that<br />
          increased followers by 25% and<br />
          generated a 20% increase in <br />
          online sales.
        </p>
      </div>
    </div>
  );
};

export default Services;
