import { skills } from "@/data/db";
import SkillsComponent from "../Skills/SkillsComponent";
import Header from "../Header/Header";
import AboutMeComponent from "../AboutMe/AboutMeComponent";
import CoursesComponent from "../Courses/CoursesComponent";
import ExperienceComponent from "../Experience/ExperienceComponent";

export default function CurriculumComponent() {
  return (
    <>
      <div className="curriculum-container">
        <div className="header bg-(--white)">
          <Header />
        </div>

        <div className="content">
          <AboutMeComponent />
          <SkillsComponent skillsIcons={skills} />
          <ExperienceComponent />
          {/* <CoursesComponent /> */}
        </div>
      </div>
    </>
  );
}
