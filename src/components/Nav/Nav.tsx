import React from "react";

const Nav = () => {
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
          <a href="#about" className="font-bold">
            About
          </a>
          <a href="#project" className="font-bold">
            Projects
          </a>
          <a href="#contact" className="font-bold">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
