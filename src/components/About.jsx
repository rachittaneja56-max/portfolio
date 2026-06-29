import React from "react";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
    "Typescript",
    "Next.js",
    "tRPC",
    "Monorepo",
    "Full Stack",
    "Express.js",
    "PostgreSQL",
  ];

  return (
    <section id="about" className="py-16 text-white ">
      <div className="max-w-3xl mx-auto space-y-6 px-6">
        <h2 className="text-3xl font-semibold">About</h2>

        <p className="text-gray-400 leading-relaxed">
          I’m an aspiring full-stack engineer focused on building scalable, type-safe web applications and SaaS platforms. 
          I specialize in React, Next.js, and TypeScript, and enjoy creating clean, production-ready architectures.
        </p>

        <p className="text-gray-400 leading-relaxed">
          My current focus is on full-stack development, modern APIs (like tRPC and REST), monorepo setups, and building robust authentication systems.
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
