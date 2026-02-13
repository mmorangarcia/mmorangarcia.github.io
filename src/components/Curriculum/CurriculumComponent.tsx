import { skills } from "@/data/db";
import SkillsComponent from "../Skills/SkillsComponent";
import Header from "../Header/Header";
import AboutMeComponent from "../AboutMe/AboutMeComponent";
import Experience from "../ExperienceComponent/Experience";

export default function CurriculumComponent() {
  return (
    <>
      <div className="curriculum-container">
        <div className="header">
          <Header />
        </div>

        <div className="content">
          <AboutMeComponent />
          <SkillsComponent skillsIcons={skills} />
          <Experience />
        </div>
      </div>
    </>
  );
}
