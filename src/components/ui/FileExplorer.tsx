import { Section } from "./Section";
import { Heading } from "./Heading";
import { Sidebar } from "./Sidebar";
import { AppGrid } from "./AppGrid";
import { ProjectDisplay } from "@/components/ProjectDisplay";
import { projects } from "../../lib/projects";
import { useFileContext } from "@/FileContext";
export const FileExplorer = () => {
  const currentFile = useFileContext().currentFile;
  const project = projects.find((project) => project.title === currentFile);
  if (!project) {
    return (
      <div className="text-gray-200 text-lg h-full">Project not found</div>
    );
  }
  return (
    <Section id="Projects">
      <div className="container relative  md:pb-10  ">
        <Heading
          title="Project Explorer"
          text="This section highlights some of my projects. 
        Click on a project to view more details."
        ></Heading>
        <div className="relative ">
          <div
            className="relative md:text-left
           mb-[2.875rem] lg:mb-[2.25rem] 
           "
          >
            <div
              className="grid p-8 grid-cols-2 md:col-span-2 mb-6 md:mb-24 text-n-2 border 
          border-n-1/10 rounded-2xl"
            >
              <Sidebar />
              <AppGrid />
            </div>
            <ProjectDisplay />
          </div>
        </div>
      </div>
    </Section>
  );
};

{
  /* <div className="col-span-4">
<ProjectOverview project={project} />
</div> */
}
{
  /* <Layout
            left={<LeftSide />}
            right={<RightSide />}
            leftWeight={1}
            rightWeight={2}
            leftClassName=""
            rightClassName=" "
          /> */
}
{
  /* <Heading
          className="md:max-w-md lg:max-w-lg"
          title="My Projects"
          text="This section contains a list of projects I have worked on. Click on a project file to view more details."
        /> */
}
