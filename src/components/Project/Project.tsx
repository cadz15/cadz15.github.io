import Card from "../Card/Card";
import { ReactComponent as TypeScriptIcon } from "../../assets/img/typescript.svg";
import ProjectCard, { ProjectData } from "./ProjectCard";
import { forwardRef } from "react";

const Project = forwardRef<HTMLDivElement>((props, ref) => {
  const project1: ProjectData = {
    title: "Human Resource Management Information System",
    details: `Worked on the Human Resource Management Information System (HRMIS) project using PHP, MySQL, JQuery, Vuejs, and Laravel. Played a key role in the development and maintenance of HRMIS, ensuring its functionality met the university's requirements.`,
    image: <TypeScriptIcon className="w-[400px] h-[400px]" />,
    live: "https://hrmis.southernleytestateu.edu.ph/",
  };
  const project2: ProjectData = {
    title: "Registrar Records Management System",
    details: `Developed the front-end interface, created APIs to connect to the mobile app, and built the mobile app using React Native. Integrated third-party technologies including Semaphore for SMS functionality and Paymongo for billing solutions.`,
    image: <TypeScriptIcon className="w-[400px] h-[400px]" />,
    live: "https://recordsandepayment.com/",
  };

  return (
    <Card
      className="pb-20 pattern-dots opacity-100 pattern-blue-300 pattern-bg-bg-purple-light 
  pattern-size-8 "
      ref={ref}
    >
      <div className="container flex flex-col">
        <span className="font-bold text-2xl w-full text-center mb-12">
          Project
        </span>
        <div className="flex flex-col gap-6">
          <ProjectCard type="right" data={project1} />
          <ProjectCard type="left" data={project2} />
        </div>
      </div>
    </Card>
  );
});

export default Project;
