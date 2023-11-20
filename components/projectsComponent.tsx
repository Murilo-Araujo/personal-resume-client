import ProjectListComponent from "@/components/projectListComponent";
import ProjectsComponent from "@/components/projectsComponent";
import BubbleComponent from "@/components/bubbleComponent";

interface ProjectsComponentProps {
    projects: any
}

function projectsComponent(props: ProjectsComponentProps) {
    return (
        <div className={"bg-black"}>

            <div className={"flex justify-center items-center relative overflow-x-auto "}>
                <BubbleComponent className={" absolute left-[10%] bottom-[10%]"}/>

                <ProjectListComponent projects={props.projects}/>
            </div>
        </div>
    )
}

export default projectsComponent;