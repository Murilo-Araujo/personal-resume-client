import {ArrowTopRightOnSquareIcon, StarIcon} from '@heroicons/react/24/solid'

interface ProjectItemComponentProps {
    project: {
        id: string
        name: string
        language: string
    }
}

export default function ProjectItemComponent({project}: ProjectItemComponentProps) {
    return (
        <div className="max-w-sm p-6 rounded-lg shadow border border-white w-96">
            <StarIcon className={"w-7 h-7 text-yellow-400 mb-3"}/>
            <a href={`/project/${project.id}`}>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">{project.name}</h5>
            </a>
            <p className="mb-3 font-normal text- dark:text-gray-400">{project.language}</p>
            <a href={`/project/${project.id}`} className="inline-flex items-center text-blue-600 hover:underline">
                See more
                <ArrowTopRightOnSquareIcon className="w-5 ml-2.5" aria-hidden="true"/>
            </a>
        </div>
    )
}