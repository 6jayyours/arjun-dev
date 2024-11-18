import React from "react";

const Card = ({ project, src, reverse }) => {

  console.log(project.imagePath)
  return (
    <div className="group max-w-5xl mb-16">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } gap-x-6`}
      >
        {/** Image Section */}
        <div
          className={`md:w-1/3 ${
            reverse ? "md:rounded-r-2xl" : "md:rounded-l-2xl"
          }`}
        >
          <img
            src={src}
            alt="Project Thumbnail"
            className={`w-full h-full object-cover ${
              reverse ? "md:rounded-r-2xl" : "md:rounded-l-2xl"
            } md:group-hover:scale-105 md:group-hover:shadow-[0_0_15px_#fff] transition-all duration-300 ease-in-out`}
          />
        </div>

        {/** Content Section */}
        <div
          className={`md:w-2/3 p-6 flex flex-col bg-proj/80 ${
            reverse ? "md:rounded-l-2xl" : "md:rounded-r-2xl"
          } md:group-hover:scale-90 md:group-hover:border md:group-hover:border-white/0.5 transition-all duration-300 ease-in-out`}
        >
          <div className="mb-4">
            <h3 className="inline-block text-lg font-extrabold bg-gray-900 text-white py-1 px-3 rounded-full border-2 border-white/30">
              {project.title}
            </h3>
          </div>

          <div className="mb-4">
            <p className="md:text-3xl font-extrabold">{project.description}</p>
          </div>

          <div className="mb-4">
            <p className="text-content">{project.details}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-xl font-bold mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 text-sm font-medium py-1 px-3 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <a
              href={project.github}
              target="_blank"
              className="inline-block px-4 py-2 text-sm font-bold bg-black text-white transition duration-200 rounded-lg"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
