import type { Project } from "@/types";
import SpotlightCard from "./SpotlightCard";
import { InView } from "../ui/in-view";
import NameTitle from "../VariableProximityComponent/NameTitle";

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
            <p className="text-xs sm:text-md">{project.period}</p>
            <section className="">
              <h1 className="text-xl sm:text-xl lg:text-3xl pb-5 font-bold">
                <NameTitle label={project.title} />
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 p-2 text-xs rounded-4xl bg-gray-800 border border-gray-500 font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
            <span>{project.description}</span>
          </SpotlightCard>
        </InView>
      </div>
    </>
  );
}
