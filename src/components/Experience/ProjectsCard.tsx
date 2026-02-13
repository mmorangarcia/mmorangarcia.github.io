import type { Project } from '@/types'

type ProjectProps = {
    project: Project
}
export default function ProjectsCard({project}: ProjectProps)  {
  return (
    <div className='p-2'>
        <h1 className='text-3xl'>{project.title}</h1>
        <p>{project.period}</p>
        <p>{project.description}</p>

    </div>
  )
}
