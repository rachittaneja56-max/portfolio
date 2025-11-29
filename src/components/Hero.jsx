import React from "react";
import profile from "../assets/Profile.jpeg";
import resume from "../assets/resume.pdf";

const Hero = () => {
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center mt-24 px-6"
        >
            <div className="flex items-center gap-10">
                <img
                    src={profile}
                    alt="Rachit Taneja"
                    className="w-32 h-32 rounded-full border border-white/10 object-cover"
                />
                <h1 className="text-4xl mt-18 font-semibold text-white">Rachit Taneja</h1>
            </div>

            <p className="text-gray-300 mt-10 text-xl  max-w-sm">
                Aspiring full-stack engineer focused on mastering Web Development and AI.
            </p>

            <div className="flex gap-4 mt-4">
                <a
                    href={resume}
                    target="_blank"
                    className="px-4 py-2 bg-indigo-500 text-black text-sm font-medium rounded-lg hover:bg-indigo-400 transition"
                >
                    Resume
                </a>
                <a
                    href="mailto:rachittaneja56@gmail.com"
                    className="px-4 py-2 bg-gray-700 text-white text-sm font-medium rounded-lg hover:bg-gray-600 transition"
                >
                    Contact Me
                </a>

            </div>
        </section>
    );
};

export default Hero;
