import projects from "../data/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="py-6 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold mb-16">Projects</h2>

        <div className="space-y-20">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]"
            >
              {project.image && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-full block hover:opacity-90 transition-opacity border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover"
                  />
                </a>
              )}

              <div className="p-6 md:p-8 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-semibold">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">
                      {project.title}
                    </a>
                  </h3>
                  <span className="bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium">
                    2026
                  </span>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-8 mt-2">
                  <div className="flex-1 space-y-6">
                    <div className="space-y-4">
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      {project.features && project.features.length > 0 && (
                        <ul className="list-disc list-outside pl-5 text-gray-400 space-y-1">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm text-gray-300 border border-white/20 px-4 py-1.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 min-w-[180px]">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition-colors font-medium text-white"
                      >
                        View project ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 text-gray-300 hover:text-white transition-colors font-medium"
                      >
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
