import { Button } from "./Button";
import { Section } from "./Section";

import GitHub from "@/assets/svg/github-icon.svg?react";
import LinkedIn from "@/assets/svg/linkedin-icon.svg?react";

export const AboutMe = () => {
  return (
    <Section id="about">
      <div className="container  ">
        <div className="relative ">
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1.75rem] lg:mb-0   ">
            <h1 className="h1 mb-6"> About Me</h1>
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Hey there! My name is Dominic, I'm a third year computer science
              student at university. I specialize in full-stack development and
              have expertise in Python, TypeScript, JavaScript, and frameworks
              like Django and React. I also have experience working with cloud
              platforms like AWS and Azure.
            </p>
            <div className="flex justify-center items-center">
              <Button href="" white={false} className=" bg-action  rounded-xl ">
                Resume
              </Button>
              <div className="pl-8 flex justify-center items-center">
                <Button
                  href="https://www.linkedin.com/in/dominic-bradley-602787241/"
                  white={false}
                >
                  <LinkedIn />
                  {/* <span className="body-1">LinkedIn</span> */}
                </Button>{" "}
                <Button href="https://github.com/dbradley2003" white={false}>
                  <GitHub color="" />
                  {/* <span className="body-1">GitHub</span> */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

{
  /* <div className="container border-2  grid font-terminal shadow-sm  grid-cols-2 bg-lightAction text-background justif-center items-center rounded-xl h-[35rem]   "> */
}
/* <Button
              className="text-lg text-background "
              href="https://github.com/dbradley2003"
            >
              <GitHub />
              <span>GitHub</span>
            </Button>

            <Button
              className="text-lg text-background "
              href="https://www.linkedin.com/in/dominic-bradley-602787241/"
            >
              <LinkedIn />
              <span>LinkedIn</span>
            </Button> */

{
  /* <div className="flex col-span-1 justify-center items-left "> */
}
{
  /* <img
            src={PersonIMG}
            alt="About Me"
            className="rounded-full object-cover w-[200px] max-h-[200px]  bg-primary/15  py-8 px-14"
          /> */
}
{
  /* </div> */
}
{
  /* <Heading
            className="md:max-w-md lg:max-w-lg"
            title="About Me"
            text="I am a software engineer based in Chicago, USA. I specialize in
            building exceptional websites, full-stack applications, and everything in
            between."
            button={
              <Button className="bg-primary text-white text-base" white={false}>
                Resume
              </Button>
            }
          ></Heading> */
}
