import { projects } from "@/data/db";
import ProjectsCard from "./ProjectsCard";

export default function ExperienceComponent() {
  return (
    <div>
      <h1 className="skills-title">Experiencia</h1>
      {projects.map((project) => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </div>
  );
}
