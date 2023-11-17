import ProjectListComponent from "@/components/projectListComponent";
import ProjectsComponent from "@/components/projectsComponent";
import BubbleComponent from "@/components/bubbleComponent";

interface ProjectsComponentProps {
    projects: any
}

function projectsComponent(props: ProjectsComponentProps) {
    return (
        <div className={"bg-black"}>
            <div className="flex justify-center bg-black h-full w-full">
                <img src="/me-with-glass.png" className="-mt-44 ml-28 absolute w-2/6" alt=''/>
            </div>
            <div className={"flex justify-center items-center relative overflow-x-auto my-6"}>
                <BubbleComponent className={" absolute left-[10%] bottom-[10%]"}/>

                <ProjectListComponent projects={props.projects}/>
            </div>
        </div>
    )
}

export default projectsComponent;