import { projectsArray } from "../assets/shared";
import BulletPoints from "../components/BulletPoints";

const PROJECTS = projectsArray;

const Projects = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sectionTitle">PROJECTS</h3>
      {PROJECTS.map((project) => {
        return (
          <div key={project.id}>
            <div className="flex gap-2 items-center">
              <span className="font-bold">{project.name}</span>
              {project.links.map((link, i) => {
                return (
                  <a
                    key={i}
                    href={link.href}
                    className="text-blue-600"
                    target="_blank"
                  >
                    {link.icon({})}
                  </a>
                );
              })}
            </div>
            <p>{project.description}</p>
            <div className="flex gap-2">
              <span className="font-semibold">Languages:</span>
              <BulletPoints bullets={project.tools} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
