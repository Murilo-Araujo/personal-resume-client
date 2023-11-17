import ProjectItemComponent from "@/components/projectItemComponent";

interface ProjectListComponentProps {
    projects: any
}

export default function projectListComponent({projects}: ProjectListComponentProps) {
    console.log(projects)

    return (
        <div className="flex space-x-5 space-y-4">
            {projects.map((project: any) => (

                <ProjectItemComponent project={project}/>
            ))}
        </div>
    )
}




