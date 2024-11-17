import React from 'react';
import Image from 'next/image';
import Icon1 from '@/assets/Icon1.png';
import Wrapper from '../shared/Wrapper';
import Heading from '@/assets/Heading 3.png';
import Useit from '../shared/Useit';

const Services = () => {
  return (
    <section>
      <Wrapper>
        <div
          className="relative flex items-center justify-start border border-gray-800 rounded-3xl shadow-md mx-auto"
          style={{
            backgroundColor: "#191A23",
            borderRadius: "45px",
            maxWidth: "1240px",
            height: "326px",
            padding: "30px 0 0 50px",
            gap: '20px',
          }}
        >
          {/* First Paragraph */}
          <div
            style={{
              width: "30%",
              padding: "0 10px 10px 10px",
              marginTop: "-20px",
              borderRight: '1px solid #FFFFFF',
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
            <div className="flex items-center" style={{ marginTop: "15px" }}>
              <span
                style={{
                  width: "108px",
                  height: "28px",
                  fontFamily: "Space Grotesk",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  color: "#B9FF66",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Learn more
              </span>
              <Image src={Icon1} alt="Learn more icon" width={17.32} height={10} style={{ marginLeft: "8px" }} />
            </div>
          </div>

          {/* Second Paragraph */}
          <div
            style={{
              width: "30%",
              padding: "0 10px 10px 10px",
              marginTop: "-20px",
              borderRight: '1px solid #FFFFFF',
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
            <div className="flex items-center" style={{ marginTop: "15px" }}>
              <span
                style={{
                  width: "108px",
                  height: "28px",
                  fontFamily: "Space Grotesk",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  color: "#B9FF66",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Learn more
              </span>
              <Image src={Icon1} alt="Learn more icon" width={17.32} height={10} style={{ marginLeft: "8px" }} />
            </div>
          </div>

          {/* Third Paragraph */}
          <div
            style={{
              width: "30%",
              padding: "0 10px 10px 10px",
              marginTop: "-20px",
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
            <div className="flex items-center" style={{ marginTop: "15px" }}>
              <span
                style={{
                  width: "108px",
                  height: "28px",
                  fontFamily: "Space Grotesk",
                  fontSize: "20px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  color: "#B9FF66",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Learn more
              </span>
              <Image src={Icon1} alt="Learn more icon" width={17.32} height={10} style={{ marginLeft: "8px" }} />
            </div>
          </div>
        </div>
      </Wrapper>

      <div style={{ marginTop: "150px", marginBottom: "80px" }}>
      <Useit
        title="Our Working Process"
        paragraphText="Step-by-Step Guide to Achieving  <br /> Your Business Goals"
      />
    </div>
    </section>
  );
};

export default Services;
