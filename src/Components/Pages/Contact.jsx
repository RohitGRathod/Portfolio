import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_8948u28",
        "template_pqcv5me",
        form.current,
        "tpprEcsFZVc2A6ZcG"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div
     
      className="w-full flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        className="w-11/12 md:w-8/12 lg:w-full xl:w-1/2 
          bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-xl p-10
          flex flex-col items-center gap-6 text-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-indigo-400 drop-shadow-md">
          Contact Me
        </h1>

        {/* Inputs */}
        <input
          type="text"
          name="userName"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full h-32 p-3 rounded-lg bg-gray-800 border border-gray-700
            focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="px-6 py-3 rounded-lg font-semibold 
            bg-gradient-to-r from-indigo-600 to-purple-600 
            hover:from-indigo-500 hover:to-purple-500 
            transition-transform transform hover:scale-105 cursor-pointer text-gray-200"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}

export default Contact;
