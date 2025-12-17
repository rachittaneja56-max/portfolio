import React from "react";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
    "Prompt Engineering",
    "Deployment (Vercel)",

  ];

  return (
    <section id="about" className="py-16 text-white ">
      <div className="max-w-3xl mx-auto space-y-6 px-6">
        <h2 className="text-3xl font-semibold">About</h2>

        <p className="text-gray-400 leading-relaxed">
          I’m a first-year CS student focused on frontend engineering and AI-driven interfaces.
          I build fast, minimal, production-ready UIs using React, JavaScript, and Tailwind.
        </p>

        <p className="text-gray-400 leading-relaxed">
          My current focus is on production-grade UI, API integration, and prompt engineering for smarter workflows.
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
