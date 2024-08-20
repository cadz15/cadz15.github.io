import Card from "../Card/Card";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <Card className="overflow-hidden py-24 md:py-12">
      <div className="container flex items-center">
        {/* left */}
        <div className="flex flex-col w-full md:w-1/3">
          <span className="font-extrabold text-2xl text-justify">
            Web Developer
          </span>
          <p className="mt-8 text-xl text-justify">
            Hi, my name is Junatan Marc. A passionate web developer skilled in
            Laravel and ReactJS.
          </p>
          <Button className="bg-amber-500 mt-6"> Download CV </Button>
        </div>
        {/* right */}
        <div className="hidden justify-end w-full md:w-2/3 md:flex">
          <div className="w-[350px] h-[350px] my-16 -rotate-45 bg-white border-2 border-black shadow-brutalism-alt"></div>
        </div>
      </div>
    </Card>
  );
};

export default Hero;
