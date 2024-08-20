import React from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <Card className="bg-[#D26EDA]">
      <div className="container flex flex-col">
        <span
          className="w-full font-bold text-2xl text-center mb-12 "
          id="contact"
        >
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
};

export default Contact;
