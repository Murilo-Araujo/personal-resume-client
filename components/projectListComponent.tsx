import ProjectItemComponent from "@/components/projectItemComponent";


interface ProjectListComponentProps {
    projects: any
}

export default function projectListComponent({projects}: ProjectListComponentProps) {



    return (
        <div className={"w-full h-full relative bg-gray-200"}>

            <div className="grid grid-cols-1 w-full h-full gap-6 pb-6 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center relative overflow-x-auto" data-aos={"fade-up"}>

                {Array.isArray(projects) && projects.map((project: any) => (
                    <ProjectItemComponent key={project.id} project={project}/>
                ))}

            </div>
        </div>
    )
}




