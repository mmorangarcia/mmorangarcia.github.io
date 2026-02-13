import { projects } from "@/data/db"
import ProjectsCard from "./ProjectsCard"

export default function ExperienceComponent() {
  return (
    <div>
        {projects.map(project => 
            <ProjectsCard key={project.id} project={project}/>
        )}
    </div>
  )
}
