import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import Card from "../Card/Card";
import { ReactComponent as TypeScriptIcon } from "../../assets/img/typescript.svg";
import Button from "../Button/Button";
import { twClassMerge } from "../../utils/twClassMerge";

interface ProjectCardInterface {
  type: "left" | "right";
}

const ProjectCard = ({
  type,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement> & ProjectCardInterface) => {
  const [flexStyle, setFlexStyle] = useState("md:flex-row");
  const [imageOffset, setImageOffset] = useState("md:-left-8");

  useEffect(() => {
    if (type === "right") {
      setFlexStyle("md:flex-row-reverse");
      setImageOffset("md:-right-8");
    } else {
      setFlexStyle("md:flex-row");
      setImageOffset("md:-left-8");
    }
  }, []);
  return (
    <Card className="bg-white px-0 pt-0 md:pt-12 border-2 border-black rounded-lg shadow-brutalism-alt overflow-hidden">
      <div className={`relative flex flex-col gap-4 w-full ${flexStyle}`}>
        {/* left */}
        <div
          className={`relative  shrink-0  bg-emerald-600  md:ps-24 md:pt-4  border-2 border-black md:rounded-2xl shadow-brutalism-alt overflow-hidden md:w-1/2 md:h-[300px] ${imageOffset}`}
        >
          <TypeScriptIcon className="w-[400px] h-[400px]" />
        </div>
        {/* right */}
        <div className="flex flex-col px-4">
          <span className="font-bold text-xl">
            Human Resource Management Information System
          </span>
          <p className="text-lg mt-6  ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            praesentium minus nemo. Quas voluptatibus quos porro odio sed,
            suscipit, nulla illo et repellendus, sapiente soluta voluptate.
            Laborum eaque ducimus molestias.
          </p>
          <div className="flex gap-4 mt-6">
            <Button className="bg-amber-500">Live Demo</Button>
            <Button>Github</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
