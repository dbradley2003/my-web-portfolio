import { projects } from "@/lib/projects";
import { useFileContext } from "@/FileContext";
import { ProjectOverview } from "./ui/ProjectOverview";
export const ProjectDisplay = () => {
  const currentFile = useFileContext().currentFile;

  const project = projects.find((project) => project.title === currentFile);

  if (!project) {
    return (
      <div className="text-gray-200 text-lg h-full">Project not found</div>
    );
  }

  return (
    <div
      className="relative border p-8 
          border-n-1/10 rounded-2xl   "
    >
      <ProjectOverview project={project} />
    </div>
  );
};
