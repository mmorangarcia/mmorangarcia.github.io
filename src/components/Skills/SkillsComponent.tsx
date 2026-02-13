import type { Icon } from "@/types";
import LogoLoop from "../LogoLoop/LogoLoop";
import { useEffect } from "react";
import "./SkillsComponent.css";

type SkillsComponentProps = {
  skillsIcons: Icon[];
};

export default function SkillsComponent({ skillsIcons }: SkillsComponentProps) {
  useEffect(() => {
    skillsIcons.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return (
    <section className="skills-section">
      <h1 className="skills-title">Skills</h1>
      <div
        className="skills-container"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Vertical loop with deceleration on hover */}
        <LogoLoop
          logos={skillsIcons}
          speed={50}
          direction="left"
          logoHeight={60}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#2d2d2d"
        />
      </div>
    </section>
  );
}
