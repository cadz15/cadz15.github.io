import Card from "../Card/Card";

const About = () => {
  return (
    <Card className="bg-[#D26EDA] md:bg-gradient-to-r py-0 md:from-[#D26EDA] md:via-[#D26EDA] md:via-50% md:to-white md:to-50% border-t-2 border-b-2 border-black">
      <div className="container flex flex-col md:flex-row">
        {/* left */}
        <div className="w-full md:w-1/2 py-8 bg-[#D26EDA] md:border-e-2 border-black">
          Left
        </div>
        {/* right */}
        <div className="md:w-1/2 p-8 bg-white flex flex-col">
          <span className="font-bold text-2xl text-center w-full">
            About Me
          </span>
          <p className="text-lg text-justify pt-12 leading-loose">
            Hello! I'm Junatan Marc Cadayona, a passionate web developer with a
            strong foundation in creating dynamic and efficient web
            applications. With 2 years of experience working with Laravel and 1
            year specializing in ReactJS, I bring a blend of back-end and
            front-end experience to every project I undertake. My goal is to
            leverage my skills and enthusiasm for web development to contribute
            to innovative and impactful projects.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default About;
