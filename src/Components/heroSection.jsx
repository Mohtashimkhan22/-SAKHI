import React from "react";
import womenHand from "../assets/womenHand.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="relative mt-10">
        <div>
          <img src={womenHand} alt="" className="object-cover object-center" />
        </div>
        <div className="absolute top-[30%] w-full text-end right-5">
          <h1 className="text-1xl sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl font-bold text-red-500">
            SAKHI(Safety and Awareness for Keeping Her Informed)
          </h1>
          <p className="text-[10px] md:text-lg lg:text-2xl mt-2 lg:mt-5 font-semibold">
            Support and Assistance to Helpless and Harassed Individuals
          </p>
          <p className="text-[10px] md:text-lg lg:text-2xl mt-2 lg:mt-5 font-semibold">
            Empowering Women, Uplifting Communities
          </p>
          <Link to="/about">
            <button className="mt-10 lg:px-8 lg:py-4 md:px-4 md:py-2 bg-red-600 text-white rounded-full text-lg lg:text-2xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
