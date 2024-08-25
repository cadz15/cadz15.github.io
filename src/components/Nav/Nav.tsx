import React, { HTMLAttributes, RefObject } from "react";

export interface ScrollToRefInterface {
  aboutRef?: RefObject<HTMLDivElement | null>;
  projectRef?: RefObject<HTMLDivElement | null>;
  contactRef?: RefObject<HTMLDivElement | null>;
}

const Nav = ({
  aboutRef,
  projectRef,
  contactRef,
  ...props
}: HTMLAttributes<HTMLDivElement> & ScrollToRefInterface) => {
  return (
    <div className="h-[72px] bg-white border-b-2  border-black">
      <nav className="container  h-full flex items-center justify-between px-4">
        {/* Logo */}
        <div>
          <span className="font-extrabold text-4xl">jM</span>
        </div>
        {/* Menu */}
        <div className="gap-6 hidden md:flex">
          <a href="#home" id="home" className="font-bold">
            Home
          </a>
          <a
            href="#about"
            className="font-bold"
            onClick={() => {
              aboutRef?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </a>
          <a
            href="#project"
            className="font-bold"
            onClick={() => {
              projectRef?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="font-bold"
            onClick={() => {
              contactRef?.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
