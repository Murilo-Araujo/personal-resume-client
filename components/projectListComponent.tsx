import ProjectItemComponent from "@/components/projectItemComponent";


interface ProjectListComponentProps {
    projects: any
}

export default function projectListComponent({projects}: ProjectListComponentProps) {


    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 mb-10 w-3/4 h-full justify-center items-center relative z-50 overflow-x-auto ">


            {Array.isArray(projects) && projects.map((project: any) => (
                <ProjectItemComponent key={project.id} project={project}/>
            ))}



        </div>
    )
}




