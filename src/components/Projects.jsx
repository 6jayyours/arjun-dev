import React from "react";
import Card from "./Card";
import { PROJECTS } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-28 px-6 h-auto">
      <div className="container mx-auto max-w-6xl">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-rubik-distressed text-start mb-8">
            Projects
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          {PROJECTS.map((project, index) => (
            <Card key={index} project={project} src={`/arjun-dev/projects/${project.image}`} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
