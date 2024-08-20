import React from "react";
import Card from "../Card/Card";
import { ReactComponent as TypeScriptIcon } from "../../assets/img/typescript.svg";
import Button from "../Button/Button";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <Card className="pb-20">
      <div className="container flex flex-col">
        <span
          className="font-bold text-2xl w-full text-center mb-12"
          id="project"
        >
          Project
        </span>
        <div className="flex flex-col gap-6">
          <ProjectCard type="right" />
          <ProjectCard type="left" />
        </div>
      </div>
    </Card>
  );
};

export default Project;
