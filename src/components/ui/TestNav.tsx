import React, { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useRefs } from "@/refContext";
import { navigation } from "../../lib/constants";
import { Button } from "./Button";
import MenuSvg from "@/assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { Modal } from "./Modal";
import Contact from "@/components/Contact";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openNavigation, setOpenNavigation] = useState(false);
  const { projectsRef, aboutRef } = useRefs();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    event.preventDefault();
    enablePageScroll();
    scrollToSection(ref);
    setOpenNavigation(false);
  };

  const refs = { aboutRef, projectsRef };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 border-b border-n-6/90   lg:bg-background  lg:backdrop-blur-sm ${
          openNavigation ? "bg-background" : "bg-background backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8">
            <h1 className="text-xl">Dominic Bradley</h1>
          </a>

          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bottom-0  bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation(refs).map((item) => (
                <a
                  key={item.name}
                  href="#"
                  onClick={(event) => handleClick(event, item.ref)}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${"lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <HamburgerMenu />
          </nav>

          <a
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
          >
            Contact Me
          </a>

          <Button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Contact />
      </Modal>
    </>
  );
};

export default Header;
