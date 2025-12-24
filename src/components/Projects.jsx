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
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-98 rounded-lg border border-white/10"
              />

              <div className="space-y-3">
                <h3 className="text-xl font-medium">
                  {project.title}
                </h3>

                <p className="text-gray-400 max-w-xl">
                  {project.description}
                </p>

                <div className="px-4 flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm text-gray-500 border border-white/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="px-20 flex gap-6 pt-3 text-sm">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-white hover:underline"
                    >
                      Live
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-white hover:underline"
                    >
                      GitHub
                    </a>
                  )}
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
