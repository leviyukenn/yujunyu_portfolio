import { resume } from "../../contants/resume";
import Section from "../Section/Section";
import SectionDivider from "../Section/SectionDivider";
import SectionTitle from "../Section/SectionTitle";
import ResumeSection from "./ResumeSection";

interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <Section id="about">
      <SectionDivider />
      <SectionTitle>About Me</SectionTitle>
      <h1 className="text-3xl text-gray-200 animate-bounce">
        <span>Hey!</span> ð
      </h1>
      <p className="text-gray-300  w-full sm:w-[60%] ">
        Thanks to visit my portfolio.
        <br/>
        My name is ä½ åå®(Junyu Yu) or you can call me ã¨ã¯ã³ã¦ in Japanese.
        <br/>
        I'm a web engineer and now work in Tokyo. It would be my pleasure to have an opportunity to work with youð.
      </p>
      <div className="mx-auto w-full md:w-[80%] ">
        {
            resume.map((resumeSection,index) => <ResumeSection resumeSection={resumeSection} key={index}/>)
        }
      </div>
    </Section>
  );
};
export default About;
