import { Button } from "./Button";
import { Section } from "./Section";
import GitHub from "@/assets/svg/github-icon.svg?react";
import LinkedIn from "@/assets/svg/linkedin-icon.svg?react";
import portfolio from "@/assets/documents/portfolioDocument.pdf";
import { useRefs } from "@/refContext";
export const AboutMe = () => {
  const { aboutRef } = useRefs();
  return (
    <Section id="about" className="mt-[6.25rem] bg-primary/5" ref={aboutRef}>
      <div className="container relative    ">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6"> About Me</h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Hey there! My name is Dominic, I'm a third year computer science
            student at university. I specialize in full-stack development and
            have expertise in Python, TypeScript, JavaScript, and frameworks
            like Django and React. I also have experience working with cloud
            platforms like AWS and Azure.
          </p>

          <div className="flex items-center justify-center gap-8">
            <Button
              href={portfolio}
              white={false}
              className=" bg-action text-lg rounded hover:text-color-2 "
            >
              Resume
            </Button>
            <Button
              href="https://www.linkedin.com/in/dominic-bradley-602787241/"
              white={false}
              className="w-15 h-15 border-none "
            >
              <LinkedIn className="w-15 h-15" />
            </Button>{" "}
            <Button
              href="https://github.com/dbradley2003"
              white={false}
              className="w-15 h-15 border-none "
            >
              <GitHub className="w-15 h-15 " />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
