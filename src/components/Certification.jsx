import React from 'react';
import mckinsey from "../assets/mckinsey-forward.png";
import aiTools from "../assets/ai-tools-skill-up.png";

const Certificates = () => {
  const certificates = [
    {
      title: "McKinsey Forward Program",
      issuer: "McKinsey & Company",
      description: "Professional skills in problem solving, communication, and digital mindset.",
      image: mckinsey,
    },
    {
      title: "AI Tools Skill Up",
      issuer: "Nation Skill Up",
      description: "Hands-on exposure to modern AI tools and workflows.",
      image: aiTools,
    },
  ];

  return (
    <section id="certificates" className="py-20 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10">Certificates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-80 h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold">{cert.title}</h3>

              <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>

              <p className="text-gray-300 mt-3 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
