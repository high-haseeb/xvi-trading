import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <div className="bg-black text-white tracking-widest w-screen h-screen flex flex-col justify-between relative">
      <div className="px-20 z-10">
        <Image src="/logo.jpg" width={200} height={200} alt="logo image" className="absolute top-0 left-1/2 translate-x-[-50%]"/>
        <Navbar />
        <div className="flex items-center justify-center text-center tracking-widest">
          <div className="text-7xl capitalize font-bold m-20">
            Our gateway to <br />
            smart investments
          </div>
        </div>
        <div className="flex items-center justify-center text-center tracking-widest">
          Securely acess real-time market data, execute trades with confidence,
          <br /> and stay ahead of the curve.
        </div>

        <div className="flex items-center justify-center text-center font-extrabold text-3xl tracking-widest m-10">
          Unleash Your Trading Potential
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-gradient-to-b from-[#EDC02B] to-[#F8EA76] px-20 rounded-lg py-4 text-black font-bold tracking-widest hover:scale-110 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
      <Footer />
      <div className="absolute w-[30rem] h-[30rem] z-0 top-10 right-20 bg-gradient-radial from-stone-700 via-black to-black blur-3xl" />
      <div className="absolute w-[30rem] h-[30rem] z-0 bottom-20 left-20 bg-gradient-radial from-stone-700 via-stone-900 to-black blur-3xl" />
    </div>
  );
};

export default Landing;
const Navbar = () => {
  return (
    <div className="flex items-end justify-end mt-10">
      <button className="px-8 py-2 font-bold border-[1px] rounded text-sm flex items-center justify-center w-auto text-white hover:text-black hover:bg-gradient-to-b from-[#EDC02B] to-[#F8EA76]  transition-transform duration-300 hover:scale-110">
        Login
      </button>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="w-screen bg-black text-stone-400 flex items-center justify-around h-20 text-xs tracking-normal">
      <div className="flex w-[15%] justify-between">
        <button>Privacy Policy</button>
        <button>Cache Policy</button>
      </div>
      <div>Copyright &#169;2023 XVI Trading.All rights reserved</div>
      <button>Terms and Conditions</button>
    </div>
  );
  g;
};
