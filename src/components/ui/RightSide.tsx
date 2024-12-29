import { useFileContext } from "@/FileContext";
import { ProjectOverview } from "./ProjectOverview";
import { projects } from "../../lib/projects";

export function RightSide() {
  const currentFile = useFileContext().currentFile;

  const project = projects.find((project) => project.title === currentFile);
  if (!project) {
    return (
      <div className="text-gray-200 text-lg h-full">Project not found</div>
    );
  }

  return (
    <div className="container text-gray-200  h-full   ">
      <ProjectOverview project={project} />
    </div>
  );
}
