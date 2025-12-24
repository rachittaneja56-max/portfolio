import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-6 mt-2">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Rachit Taneja. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
