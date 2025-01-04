import React, { useState } from "react";
import { useRefs } from "@/refContext";
import { Modal } from "./Modal";
import Contact from "@/components/Contact";
export const NavBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projectsRef, aboutRef } = useRefs();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="top-0 start-0 left-0 z-10 fixed w-full bg-action border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white transition-colors">
            Dominic Bradley
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-n-2 rounded-lg md:hidden "
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full  md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium space-y-2 md:space-y-0 flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
            <li>
              <a
                onClick={(event) => scrollToSection(aboutRef, event)}
                href="#"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:p-0 transition-colors hover:text-color-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={(event) => scrollToSection(projectsRef, event)}
                href="#"
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:p-0 transition-colors hover:text-color-2"
              >
                Projects
              </a>
            </li>

            <li>
              <button
                onClick={() => setIsModalOpen(true)}
                className="block py-2 px-3 text-white rounded md:hover:bg-transparent md:p-0 transition-colors hover:text-color-2"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Contact />
      </Modal>
    </nav>
  );
};
