import React, {
  FC,
  HtmlHTMLAttributes,
  ReactElement,
  SVGProps,
  useEffect,
  useState,
} from "react";
import Card from "../Card/Card";
import { ReactComponent as TypeScriptIcon } from "../../assets/img/typescript.svg";
import Button from "../Button/Button";
import { motion } from "framer-motion";

interface ProjectCardInterface {
  type: "left" | "right";
  data: ProjectData;
}

export type ProjectData = {
  title: string;
  image: ReactElement;
  details: string;
  demo?: string;
  repo?: string;
  live?: string;
};

const ProjectCard = ({
  type,
  data,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement> & ProjectCardInterface) => {
  const [flexStyle, setFlexStyle] = useState("md:flex-row");
  const [imageOffset, setImageOffset] = useState("md:-left-8");

  const bounceTransition = {
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 0.5,
  };

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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      whileInView={{ opacity: 1 }}
      style={{ perspective: "1000px" }}
    >
      <Card
        className="bg-white px-0 pt-0 md:pt-12 border-2 border-black rounded-lg shadow-brutalism-alt overflow-hidden"
        {...props}
      >
        <div className={`relative flex flex-col gap-4 w-full ${flexStyle}`}>
          {/* left */}
          <div
            className={`relative  shrink-0  bg-emerald-600  md:ps-24 md:pt-4  border-2 border-black md:rounded-2xl shadow-brutalism-alt overflow-hidden md:w-1/2 md:h-[300px] ${imageOffset}`}
          >
            {data?.image}
          </div>
          {/* right */}
          <div className="flex flex-col px-4">
            <span className="font-bold text-xl">{data?.title}</span>
            <p className="text-lg mt-6  ">{data?.details}</p>
            <div className="flex gap-4 mt-6">
              {data?.demo && (
                <a href={data?.demo} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-amber-500">Demo</Button>
                </a>
              )}
              {data?.live && (
                <a href={data?.live} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-500">Website</Button>
                </a>
              )}
              {data?.repo && (
                <a href={data?.repo} target="_blank" rel="noopener noreferrer">
                  <Button>Github</Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
