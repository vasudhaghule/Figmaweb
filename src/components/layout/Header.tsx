import Image from "next/image";
import React from "react";
import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";

const SvgIcon = () => <svg width="27" height="15"></svg>;

const Header = () => {
  return (
    <header className="">
      <Wrapper>
        <div className="flex justify-between items-center py-5">
          {/* Correct way to reference an image from the public folder */}
          <Link className="hover:text-teal-700 duration-300" href={"/"}>
            <div>
              <Image src="/logo.png" alt="Panaverse dao" width={100} height={50} />
            </div>
          </Link>

          <nav className="flex items-center gap-x-4 sm:gap-x-8">
            <Link href={""} className="flex items-center hover:text-white-700 duration-300">About us<SvgIcon /> </Link>
            <Link href={""} className="flex items-center hover:text-white-700 duration-300">Services<SvgIcon /></Link>
            <Link href={""} className="flex items-center hover:text-white-700 duration-300">Use Cases <SvgIcon /></Link>
            <Link href={""} className="flex items-center hover:text-white-700 duration-300">Pricing<SvgIcon /></Link>
            <Link href={""} className="flex items-center hover:text-white-700 duration-300">Blog <SvgIcon /></Link>
            <Link href={""}>
              <button className="px-9 py-3 border border-black text-black font-medium rounded-md">
                Request a quote
              </button>
            </Link>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
