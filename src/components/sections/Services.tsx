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
        padding: "60px 0 0 50px",
        gap: '20px', // Added gap between the paragraphs
      }}
    >
      {/* First Paragraph */}
      <div style={{ 
        borderRight: '1px solid #FFFFFF',
        padding:"10px 20px 150px 10px", // Consistent padding on all sides
        height: "100%"  // Ensure this div takes up the full height of the container
       }}>
        <p style={{ color: 'white', whiteSpace: 'normal' }}>
          For a local restaurant, we <br />
          implemented a targeted PPC <br />
          campaign that resulted in a 50% <br />
          increase in website traffic and a <br />
          25% increase in sales.
        </p>
      </div>

      {/* Second Paragraph */}
      <div style={{  
        color: 'white',
        padding:"10px 20px 150px 100px",  // Consistent padding on all sides
        borderRight: '1px solid #FFFFFF',
        height: "100%"  // Ensure this div takes up the full height of the container
      }}>
        <p>
          For a B2B software company, we<br />
          developed an SEO strategy that<br />
          resulted in a first page ranking<br />
          for key keywords and a 200%<br />
          increase in organic traffic.
        </p>
      </div>

      {/* Third Paragraph */}
      <div style={{  
        color: 'white', 
        padding:"10px 30px 150px 200px",  // Consistent padding on all sides
        height: "100%"  // Ensure this div takes up the full height of the container
      }}>
        <p>
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
