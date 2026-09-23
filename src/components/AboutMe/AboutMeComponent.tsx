import { aboutMe } from "@/data/db";
import AboutMeCard from "./AboutMeCard";
import "./AboutMeComponent.css";

export default function AboutMeComponent() {
  return (
    <div>
      <h1 className="skills-title">Sobre mí</h1>
      <AboutMeCard aboutMe={aboutMe} />
    </div>
  );
}
