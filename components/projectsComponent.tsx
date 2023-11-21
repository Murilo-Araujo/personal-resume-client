import ProjectListComponent from "@/components/projectListComponent";
import ProjectsComponent from "@/components/projectsComponent";
import BubbleComponent from "@/components/bubbleComponent";
import {FaGithubAlt} from "react-icons/fa";

interface ProjectsComponentProps {
    projects: any
}

function Bubbles() {
    return (<>
            <BubbleComponent className={"absolute left-[10%] bottom-[10%]"}/>
            <BubbleComponent className={"absolute left-[25%] bottom-[12%]"}/>
            <BubbleComponent className={"absolute left-[15%] bottom-[25%]"}/>
            <BubbleComponent className={"absolute left-[20%] bottom-[33%]"}/>
            <BubbleComponent className={"absolute left-[5%] bottom-[45%]"}/>
            <BubbleComponent className={"absolute left-[35%] bottom-[50%]"}/>
            <BubbleComponent className={"absolute left-[23%] bottom-[55%]"}/>
            <BubbleComponent className={"absolute left-[12%] bottom-[65%]"}/>
            <BubbleComponent className={"absolute right-[10%] bottom-[10%]"}/>
            <BubbleComponent className={"absolute right-[35%] bottom-[15%]"}/>
            <BubbleComponent className={"absolute right-[25%] bottom-[25%]"}/>
            <BubbleComponent className={"absolute right-[50%] bottom-[27%]"}/>
            <BubbleComponent className={"absolute right-[60%] bottom-[25%]"}/>
            <BubbleComponent className={"absolute right-[35%] bottom-[40%]"}/>
            <BubbleComponent className={"absolute right-[10%] bottom-[40%]"}/>
            <BubbleComponent className={"absolute right-[12%] bottom-[55%]"}/>
            <BubbleComponent className={"absolute right-[20%] bottom-[65%]"}/>
            <BubbleComponent className={"absolute right-[7%] bottom-[80%]"}/>
            <BubbleComponent className={"absolute left-[7%] bottom-[80%]"}/>
            <BubbleComponent className={"absolute left-[45%] bottom-[5%]"}/>
        </>
    )
}

function projectsComponent(props: ProjectsComponentProps) {
    return (
        <div className={"bg-black relative"}>

            <FaGithubAlt className={"absolute flex justify-center w-full text-white lg:text-[37rem] md:text-[25rem] sm:text-[15rem] text-[10rem] lg:-top-60 md:-top-40 sm:-top-20 -top-10"}/>

            <img src={"/granulated.png"} className={"absolute z-20 w-full h-full"}/>

            
            <div className={"flex justify-center items-center relative overflow-x-auto min-h-screen lg:pt-96 flex-col"}>
                <h1 className={"text-white text-4xl md:text-6xl font-bold text-center z-30 w-full top-1/4 lg:mt-5"}>Projects</h1>
                <Bubbles/>

                <ProjectListComponent projects={props.projects}/>
            </div>
        </div>
    )
}

export default projectsComponent;