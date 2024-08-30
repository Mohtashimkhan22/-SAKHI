import React, { useState } from "react";
import bg from "../assets/womensafety.jpg";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Importing icons

const Contact = () => {
  const [UserContact, setUserContact] = useState({
    username: "",
    email: "",
    msg: "",
  });

  const handleContact = (e) => {
    setUserContact({ ...UserContact, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="mt-5">

        <section className="text-gray-600 body-font relative py-16 bg-gray-100">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-8 lg:mb-0 rounded-lg overflow-hidden">
              <h2 className="text-gray-900 text-lg mb-4 font-medium title-font">
                Get in Touch
              </h2>
              <p className="leading-relaxed text-base mb-4">
                We'd love to hear from you! Whether you have a question about our services or need support, feel free to get in touch with us.
              </p>
              <div className="flex flex-col md:flex-row items-center">
                <div className="p-4 md:w-1/3 w-full">
                  <div className="h-full bg-white rounded-lg shadow-md p-6 flex items-center justify-center flex-col text-center">
                    <FaMapMarkerAlt className="text-indigo-500 w-8 h-8 mb-2" />
                    <h2 className="title-font font-medium text-gray-900 text-lg">
                      Address
                    </h2>
                    <p className="leading-relaxed mt-2">123 Street, City, Country</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 w-full">
                  <div className="h-full bg-white rounded-lg shadow-md p-6 flex items-center justify-center flex-col text-center">
                    <FaEnvelope className="text-indigo-500 w-8 h-8 mb-2" />
                    <h2 className="title-font font-medium text-gray-900 text-lg">
                      Email
                    </h2>
                    <p className="leading-relaxed mt-2">example@email.com</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/3 w-full">
                  <div className="h-full bg-white rounded-lg shadow-md p-6 flex items-center justify-center flex-col text-center">
                    <FaPhoneAlt className="text-indigo-500 w-8 h-8 mb-2" />
                    <h2 className="title-font font-medium text-gray-900 text-lg">
                      Phone
                    </h2>
                    <p className="leading-relaxed mt-2">123-456-7890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full bg-white flex flex-col md:ml-auto px-8 py-10 rounded-lg shadow-md">
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Contact Form
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="username"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="username"
                  value={UserContact.username}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleContact}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={UserContact.email}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleContact}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="msg"
                  value={UserContact.msg}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={handleContact}
                ></textarea>
              </div>
              <button
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      
              >
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
