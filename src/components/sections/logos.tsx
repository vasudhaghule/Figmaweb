import Image from "next/image";
import logo0 from "@/assets/logo0.png";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo5 from "@/assets/logo5.png";

const Logos = () => {
  return (
    <section className="-mt-4 pb- bg-gray-0">
      <div className="container mx-auto flex justify-between items-center space-x-4">
        
         <Image src={logo0} alt="Company 1" width={100} height={50} />
        <Image src={logo1} alt="Company 1" width={100} height={50} />
        <Image src={logo2} alt="Company 2" width={100} height={50} />
        <Image src={logo3} alt="Company 3" width={100} height={50} />
        <Image src={logo4} alt="Company 4" width={100} height={50} />
        <Image src={logo5} alt="Company 5" width={100} height={50} />
      </div>
      <div>
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
