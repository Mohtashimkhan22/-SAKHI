import React from "react";
import bg from "../assets/womensafety.jpg";
import aboutImage from "../assets/womenEmpowerment.jpg";
import techImage from "../assets/techInnovation.jpeg"; 
import { FaChartLine, FaLightbulb, FaMobileAlt } from "react-icons/fa"; 

const Aboutus = () => {
  return (
    <>
      <div>
        {/* Who We Are Section */}
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded-lg shadow-lg"
                alt="About Us"
                src={aboutImage}
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                Who We Are
              </h1>
              <p className="mb-8 leading-relaxed text-lg text-gray-700">
                At SAKHI, our mission is to empower and protect women
                through innovative technology and community-driven initiatives.
                Established in 2024, we have become a trusted resource for women’s
                safety across the country. Our platform combines the latest in safety
                technology with comprehensive resources, all designed to create a safer 
                and more inclusive environment for women.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="text-gray-600 body-font bg-gray-100">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                Empowering Through Technology
              </h1>
              <h3 className="text-gray-900 text-2xl font-semibold mb-4 flex items-center">
                <FaLightbulb className="text-indigo-500 w-8 h-8 mr-2" />
                Innovation for Safety
              </h3>
              <p className="mb-8 leading-relaxed text-lg text-gray-700">
                Our platform leverages cutting-edge technology to provide real-time safety 
                solutions for women. With features like SOS alerts, location tracking, and 
                emergency contacts, we ensure that help is always just a tap away. We are 
                dedicated to constantly evolving our technology to meet the ever-changing 
                needs of women in today’s world.
              </p>
              <h3 className="text-gray-900 text-2xl font-semibold mb-4 flex items-center">
                <FaChartLine className="text-indigo-500 w-8 h-8 mr-2" />
                Making an Impact
              </h3>
              <p className="leading-relaxed text-lg text-gray-700">
                Our technology isn’t just about safety—it’s about empowerment. By giving 
                women the tools they need to feel safe and confident, we are helping to 
                create a world where women can live free from fear.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-10 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded-lg shadow-lg"
                alt="Technology"
                src={techImage}
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-12">
              <h1 className="sm:text-3xl text-2xl font-bold title-font text-gray-900 mb-4">
                Why Choose Us?
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                We are committed to making the world a safer place for women. Here’s why 
                you can trust us to keep you safe.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/3 w-full">
                <div className="h-full bg-white rounded-lg p-8 shadow-lg">
                  <FaMobileAlt className="text-indigo-500 w-12 h-12 mb-4 mx-auto" />
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    Easy to Use
                  </h2>
                  <p className="leading-relaxed text-base">
                    Our app is designed to be user-friendly and accessible to women of all 
                    ages. Your safety is just one tap away.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 w-full">
                <div className="h-full bg-white rounded-lg p-8 shadow-lg">
                  <FaChartLine className="text-indigo-500 w-12 h-12 mb-4 mx-auto" />
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    Trusted by Millions
                  </h2>
                  <p className="leading-relaxed text-base">
                    Women across the country trust us to provide reliable and effective 
                    safety solutions that work when they need them the most.
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 w-full">
                <div className="h-full bg-white rounded-lg p-8 shadow-lg">
                  <FaLightbulb className="text-indigo-500 w-12 h-12 mb-4 mx-auto" />
                  <h2 className="text-lg font-medium text-gray-900 mb-2">
                    Innovation at the Core
                  </h2>
                  <p className="leading-relaxed text-base">
                    We are constantly innovating to bring you the latest in women’s safety 
                    technology, ensuring that you are always protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Aboutus;
