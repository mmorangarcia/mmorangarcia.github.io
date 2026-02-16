import type { Project } from "@/types";
import SpotlightCard from "./SpotlightCard";

type ProjectProps = {
  project: Project;
};
export default function ProjectsCard({ project }: ProjectProps) {
  return (
    <>
      <div className="p-2">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <section className="flex justify-between align-middle">
            <h1 className="text-3xl pb-5 font-bold">{project.title}</h1>
            <p>{project.period}</p>
          </section>
          <span>{project.description}</span>
        </SpotlightCard>
      </div>
    </>
  );
}
