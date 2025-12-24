import React from "react";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>

        <p className="text-gray-400 mt-4">
          Feel free to reach out for collaboration, opportunities, or discussions.
        </p>

        <div className="flex justify-center gap-8 mt-8">
          <a
            href="mailto:rachittaneja6@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/rachittaneja56-max"
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <GithubIcon size={20}/>
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rachit-taneja-b98985382/"
            target="_blank"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <LinkedinIcon size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
