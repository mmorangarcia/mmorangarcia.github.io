import { skills } from "@/data/db";
import SkillsComponent from "../Skills/SkillsComponent";
import Header from "../Header/Header";
import AboutMeComponent from "../AboutMe/AboutMeComponent";
import ExperienceComponent from "../Experience/ExperienceComponent";

export default function CurriculumComponent() {
  return (
    <>
      <div className="curriculum-container">
        <div className="header bg-(--white)">
          <Header />
        </div>

        <div className="content px-4 py-8 md:px-20 md:py-12 lg:px-40 lg:pt-16 lg:pb-8">
          <AboutMeComponent />
          <SkillsComponent skillsIcons={skills} />
          <ExperienceComponent />
          {/* <CoursesComponent /> */}
        </div>
      </div>
    </>
  );
}
