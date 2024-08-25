import Card from "../Card/Card";
import { ReactComponent as LaravelIcon } from "../../assets/img/laravel.svg";
import { ReactComponent as ReactIcon } from "../../assets/img/react.svg";
import { ReactComponent as ReactNativeIcon } from "../../assets/img/react-native.svg";
import { ReactComponent as JqueryIcon } from "../../assets/img/jquery.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/img/bootstrap-5.svg";
import { ReactComponent as MySqlIcon } from "../../assets/img/mysql.svg";
import { ReactComponent as TailwindIcon } from "../../assets/img/tailwindcss.svg";
import { ReactComponent as TypeScriptIcon } from "../../assets/img/typescript.svg";
import { forwardRef, HtmlHTMLAttributes, MutableRefObject } from "react";

const Skills = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Card className="bg-white pb-12" ref={ref}>
      <div className="flex flex-col items-center justify-center container">
        <span className="font-bold text-2xl">Skills</span>
        <div className="w-full flex-col flex gap-12 justify-center items-center pt-12 md:flex-row">
          <LaravelIcon className="w-24 h-24 "></LaravelIcon>
          <ReactIcon className="w-24 h-24 "></ReactIcon>
          <ReactNativeIcon className="w-24 h-24 "></ReactNativeIcon>
          <JqueryIcon className="w-24 h-24 "></JqueryIcon>
          <TypeScriptIcon className="w-24 h-24 "></TypeScriptIcon>
          <BootstrapIcon className="w-24 h-24 "></BootstrapIcon>
          <TailwindIcon className="w-24 h-24 "></TailwindIcon>
          <MySqlIcon className="w-24 h-24 "></MySqlIcon>
        </div>
      </div>
    </Card>
  );
});

export default Skills;
