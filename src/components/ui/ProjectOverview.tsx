import React from "react";

interface Project {
  title: string;
  desc: string;
  content: string;
  techStack: string[];
  href?: string;
}

interface ProjectOverviewProps {
  project: Project;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  project: project,
}) => {
  return (
    <>
      <h1 className="h5 font-code font-semibold  border-b-2 border-primary pb-2">
        {project.title}
      </h1>
      <p className="tagline pt-4">{project.desc}</p>
      <div className="body-1 mt-8">{project.content}</div>
      <ul className="tagline mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech, index) => (
          <li key={index} className="px-3 py-1 bg-primary/55 rounded-full ">
            {tech}
          </li>
        ))}
      </ul>
    </>
  );
};
