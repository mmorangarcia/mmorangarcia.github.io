import type { Project } from "@/types";
import SpotlightCard from "./SpotlightCard";
import { InView } from "../ui/in-view";

type ProjectProps = {
  project: Project;
};
export default function ProjectsCard({ project }: ProjectProps) {
  return (
    <>
      <div className="p-2">
        <InView
          variants={{
            hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
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
        </InView>
      </div>
    </>
  );
}
