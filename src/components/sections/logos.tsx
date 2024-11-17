import Image from "next/image";
import logo0 from "@/assets/logo0.png";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo5 from "@/assets/logo5.png";

const Logos = () => {
  return (
    <section className="-mt-4 pb-4 bg-gray-0 ml-10">
      {/* Adjusted flex layout for tighter spacing */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="mr-1">
          <Image src={logo0} alt="Company 1" width={100} height={50} />
        </div>
        <div className="mr-1">
          <Image src={logo1} alt="Company 2" width={100} height={50} />
        </div>
        <div className="mr-1">
          <Image src={logo2} alt="Company 3" width={100} height={50} />
        </div>
        <div className="mr-1">
          <Image src={logo3} alt="Company 4" width={100} height={50} />
        </div>
        <div className="mr-1">
          <Image src={logo4} alt="Company 5" width={100} height={50} />
        </div>
        <div>
          <Image src={logo5} alt="Company 6" width={100} height={50} />
        </div>
      </div>

      {/* Decorative SVG line */}
      <div className="mt-4">
        <svg
          width="1440"
          height="48"
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        ></svg>
      </div>
    </section>
  );
};

export default Logos;
