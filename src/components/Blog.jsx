import React from "react";

const BlogPreview = () => {
  return (
    <section id="blog" className=" border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
        <h2 className="text-4xl font-semibold">Blog</h2>

        <p className="text-gray-400">
          I’ll be sharing technical learnings, project breakdowns, and notes as I build.
        </p>

        <span className="inline-block mt-4 text-sm text-gray-500 border border-white/10 px-4 py-2 rounded-full">
          Coming Soon
        </span>
      </div>
    </section>
  );
};

export default BlogPreview;
