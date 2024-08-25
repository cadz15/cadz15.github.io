import React, { forwardRef, HTMLAttributes } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { ScrollToRefInterface } from "../Nav/Nav";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Card className="bg-[#D26EDA]" ref={ref}>
      <div className="container flex flex-col">
        <span className="w-full font-bold text-2xl text-center mb-12 ">
          Contact
        </span>
        <div className="flex flex-col gap-12 justify-center md:flex-row">
          <Button className="bg-white">cadayonajunatanmarc@gmail.com</Button>
          <a
            href="https://linkedin.com/in/jmcadayona"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white">www.linkedin.com/in/jmcadayona</Button>
          </a>
          <a
            href="http://github.com/cadz15"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white">www.github.com/cadz15</Button>
          </a>
        </div>
      </div>
    </Card>
  );
});

export default Contact;
