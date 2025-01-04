import { Button } from "./Button";
import { Section } from "./Section";
import GitHub from "@/assets/svg/github-icon.svg?react";
import LinkedIn from "@/assets/svg/linkedin-icon.svg?react";
import portfolio from "@/assets/documents/portfolioDocument.pdf";
import { useRefs } from "@/refContext";
export const AboutMe = () => {
  const { aboutRef } = useRefs();
  return (
    <Section
      id="about"
      className="pt-[12rem] -mt-[6.25rem] lg:-mt-0  bg-primary/30"
      ref={aboutRef}
    >
      <div className="container relative mt-0 lg:mt-12">
        <div className="max-w-[62rem] mx-auto text-center mb-[3.5rem] lg:mb-[6.875rem]  ">
          <div className=" space-y-4 lg:space-y-8 mb-6 lg:mb-8">
            <h1 className="h1 "> About Me</h1>
            <p className="body-1 max-w-3xl  mx-auto mb-6 text-n-2 lg:mb-8">
              Hi, I’m Dominic, a third-year computer science student and
              aspiring software developer. I’ve worked on diverse projects,
              including TeamUp, a full-stack web app that helps film students
              collaborate, and predictive modeling tools that assist traders in
              decision-making. I also specialize in creating data visualizations
              for large datasets. I’m eager to apply my technical expertise to
              impactful, real-world projects.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mt-10 lg:mt-14 lg:gap-10">
            <Button
              href={portfolio}
              white={false}
              className=" bg-action mx-0 text-n-1 text-sm px-[22px] lg:text-xl lg:px-10 h-9  lg:h-[58px] py-[20px] lg:py-[28px]   rounded  hover:text-white hover:bg-action/75 mr-8 lg:mr-16 "
            >
              Resume
            </Button>
            <Button
              href="https://www.linkedin.com/in/dominic-bradley-602787241/"
              white={false}
              className="w-12 h-12 border-none "
            >
              <LinkedIn className="w-12 h-12 lg:w-16 lg:h-16" />
            </Button>{" "}
            <Button
              href="https://github.com/dbradley2003"
              white={false}
              className="w-12 h-12 border-none "
            >
              <GitHub className="w-12 h-12 lg:w-16 lg:h-16" />
            </Button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Section>
  );
};
