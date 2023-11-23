import {StarIcon} from '@heroicons/react/24/solid'
import Link from "next/link";
import {useTranslation} from "react-i18next";

interface ProjectItemComponentProps {
    project: {
        id: string
        name: string
        language: string
        description: string
    }
}

export default function ProjectItemComponent({project}: ProjectItemComponentProps) {
    const {t} = useTranslation('projectItemComponent')

    return (
        <Link href={`/project/${project.id}`} className="h-60 p-6 rounded-lg shadow border-4 border-black my-4 group cursor-pointer -wave_animation hover:shadow-lg w-96 hover:bg-black hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
            <div className="flex justify-center items-center mb-3">
                <img src={`/icons/${project.language}.png`} className="w-10 h-10"/>
            </div>

            <div className="flex items-center">
                {t('difficulty')}

                <div className="flex ml-2">
                    <StarIcon className="w-5 h-5 text-yellow-400"/>
                    <StarIcon className="w-5 h-5 text-yellow-400"/>
                    <StarIcon className="w-5 h-5 text-yellow-400"/>
                    <StarIcon className="w-5 h-5 text-yellow-400"/>
                    <StarIcon className="w-5 h-5 text-yellow-400"/>
                </div>
            </div>


            <div className="flex">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight group-hover:underline hover:text-gray-400">{project.name}</h5>
            </div>
            <p className=" font-normal dark:text-gray-400">{project.description}</p>
        </Link>
    )
}