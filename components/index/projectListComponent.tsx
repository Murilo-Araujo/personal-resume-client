import ProjectItemComponent from "@/components/index/projectItemComponent";


interface ProjectListComponentProps {
    projects: any
}

export default function ProjectListComponent({projects}: ProjectListComponentProps) {

    return (
        <div className={"w-full h-full bg-gray-200"}>

            <div className="flex w-full h-full pb-12 space-x-9 px-32 overflow-x-auto overflow-y-hidden" data-aos={"fade-up"}>

                {Array.isArray(projects) && projects.map((project: any) => (
                    <ProjectItemComponent key={project.id} project={project}/>
                ))}

            </div>
        </div>
    )
}




