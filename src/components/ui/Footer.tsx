import { Section } from "./Section";
import { useRefs } from "@/refContext";
import { Modal } from "./Modal";
import Contact from "@/components/Contact";
import { useState } from "react";
export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projectsRef, aboutRef } = useRefs();
  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Section className="!px-0 !py-15 border-t border-n-1/10 ">
      <div className="container z-1 relative ">
        <div className="font-grotesk flex-col  relative space-y-10 lg:space-y-15 ">
          <div className="py-8 lg:py-15 border bg-[#5614da] border-n-1/10 w-full text-center space-y-6 lg:space-y-15 rounded-xl shadow">
            <h1 className=" text-xl  text-n-1 lg:text-[2.75rem] font-bold ">
              dombradley2003@gmail.com
            </h1>
            <p className="text-sm lg:text-lg px-5 lg:mx-0  text-n-2 ">
              A computer science student with experience in full stack web
              development, ML/AI, and data analytics.
            </p>
          </div>
          <div className="flex items-center justify-center gap-8">
            <ul className="text-sm lg:text-lg flex gap-8 lg:gap-15">
              <li
                className="hover:text-color-2 transition-colors cursor-pointer"
                onClick={(event) => scrollToSection(aboutRef, event)}
              >
                Home
              </li>
              <li
                className="hover:text-color-2 transition-colors cursor-pointer"
                onClick={(event) => scrollToSection(aboutRef, event)}
              >
                About
              </li>
              <li
                className="hover:text-color-2 transition-colors cursor-pointer"
                onClick={(event) => scrollToSection(projectsRef, event)}
              >
                Projects
              </li>
              <li
                onClick={() => setIsModalOpen(true)}
                className="hover:text-color-2 transition-colors cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </div>

          <p className="caption text-n-4 lg:block text-center">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
      <div>
        {/* <h1 className="h2 font-bold font-code text-center">Dominic Bradley</h1> */}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Contact />
      </Modal>
    </Section>
  );
};
{
  /* <div className="container flex-col sm:justify-between justify-center items-center max-sm:flex-col"></div> */
}
