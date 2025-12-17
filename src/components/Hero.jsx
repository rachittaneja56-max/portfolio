import React from "react";
import profile from "../assets/Profile.jpeg";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section
      id="hero"
      className="mt-15 flex items-center justify-center px-6"
    >
      <div className="flex flex-col items-center text-center max-w-xl">

        <img
          src={profile}
          alt="Rachit Taneja"
          className="w-32 h-32 rounded-full border border-white/10 object-cover"
        />

        <h1 className="text-3xl font-semibold mt-6">Rachit Taneja</h1>

        <p className="text-gray-300 mt-4 text-lg leading-relaxed">
          Aspiring full-stack engineer focused on mastering Web Development and AI.
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href={resume}
            target="_blank"
            className="px-5 py-2 bg-indigo-500 text-black text-sm font-medium rounded-lg hover:bg-indigo-400 transition"
          >
            View Resume
          </a>

          <a
            href="#contact"
            className="px-5 py-2 bg-white/10 border border-white/20 text-sm rounded-lg hover:bg-white/20 transition"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
