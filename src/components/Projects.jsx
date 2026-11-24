import projects from "../data/projects.json";
import research from "../data/research.json";
import moreProjects from "../data/more-projects.json";

const linkProps = { target: "_blank", rel: "noopener noreferrer" };

const TechPills = ({ items }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((tech) => (
      <span
        key={tech}
        className="text-sm text-gray-300 border border-white/20 px-3 py-1 rounded-full"
      >
        {tech}
      </span>
    ))}
  </div>
);

const FeaturedProject = ({ project }) => (
  <div className="flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02]">
    {project.image && (
      <a
        href={project.live || project.github}
        {...linkProps}
        className="w-full block hover:opacity-90 transition-opacity border-b border-white/10"
      >
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          className="w-full object-cover"
        />
      </a>
    )}

    <div className="p-6 md:p-8 flex flex-col gap-6">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-2xl md:text-3xl font-semibold">
          <a href={project.live || project.github} {...linkProps} className="hover:underline">
            {project.title}
          </a>
        </h3>
        {project.year && (
          <span className="shrink-0 bg-white/10 px-4 py-1.5 rounded-full text-sm font-medium">
            {project.year}
          </span>
        )}
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex-1 space-y-5">
          <p className="text-gray-400 leading-relaxed text-lg">{project.description}</p>

          {project.features?.length > 0 && (
            <ul className="list-disc list-outside pl-5 text-gray-400 space-y-1">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          )}

          <TechPills items={project.tech} />
        </div>

        <div className="flex flex-col gap-3 md:min-w-[170px]">
          {project.live && (
            <a
              href={project.live}
              {...linkProps}
              className="flex items-center justify-center px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition-colors font-medium text-white"
            >
              View live ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              {...linkProps}
              className="flex items-center justify-center px-6 py-3 text-gray-300 hover:text-white transition-colors font-medium"
            >
              Code ↗
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ResearchCard = ({ item }) => (
  <article className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/[0.02] flex flex-col gap-5">
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-gray-200">
        {item.tag}
      </span>
      <span className="text-xs uppercase tracking-wider border border-white/15 px-3 py-1 rounded-full text-gray-400">
        Prototype · not deployed
      </span>
    </div>

    <h3 className="text-2xl font-semibold">{item.title}</h3>
    <p className="text-gray-400 leading-relaxed">{item.description}</p>

    <ul className="list-disc list-outside pl-5 text-gray-400 space-y-1">
      {item.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>

    <TechPills items={item.tech} />

    <a
      href={item.github}
      {...linkProps}
      className="self-start px-5 py-2.5 border border-white/20 rounded-xl hover:bg-white/10 transition-colors font-medium text-white"
    >
      Read the code ↗
    </a>
  </article>
);

const SmallProject = ({ project }) => (
  <article className="border border-white/10 rounded-2xl p-5 bg-white/[0.02] flex flex-col gap-3">
    <h3 className="text-lg font-semibold">{project.title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.description}</p>
    <p className="text-xs text-gray-500">{project.tech.join(" · ")}</p>
    <div className="flex gap-4 text-sm">
      {project.live && (
        <a href={project.live} {...linkProps} className="text-white hover:underline">
          Live ↗
        </a>
      )}
      <a href={project.github} {...linkProps} className="text-gray-300 hover:text-white hover:underline">
        Code ↗
      </a>
    </div>
  </article>
);

const Projects = () => {
  return (
    <section id="projects" className="py-6 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Projects</h2>
        <p className="text-gray-400 mb-12">Products I've built and shipped.</p>

        <div className="space-y-16">
          {projects.map((project) => (
            <FeaturedProject key={project.title} project={project} />
          ))}
        </div>

        <div id="research" className="mt-28 scroll-mt-24">
          <h2 className="text-4xl font-semibold mb-4">Research & Hackathons</h2>
          <p className="text-gray-400 mb-12 leading-relaxed">
            Prototypes built for Smart India Hackathon and other hackathon problem statements.
            They were demo deployments and are not live anymore, but the code and design docs are open.
          </p>

          <div className="space-y-8">
            {research.map((item) => (
              <ResearchCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-28">
          <h2 className="text-3xl font-semibold mb-10">More builds</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {moreProjects.map((project) => (
              <SmallProject key={project.title} project={project} />
            ))}
          </div>
          <a
            href="https://github.com/rachittaneja56-max"
            {...linkProps}
            className="inline-block mt-8 text-gray-300 hover:text-white hover:underline"
          >
            Everything else on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
