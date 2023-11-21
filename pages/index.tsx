import {Inter} from 'next/font/google'
import HeroComponent from '@/components/heroComponent'
import SummaryComponent from "@/components/summaryComponent";
import ProjectsComponent from "@/components/projectsComponent";
import ContactComponent from "@/components/contactComponent";
import EducationComponent from "@/components/educationComponent";
import ExperienceComponent from "@/components/experienceComponent";

const inter = Inter({subsets: ['latin']})

export default function Home({projects}: any) {


    return (
        <>
            <HeroComponent/>
            <SummaryComponent/>
            <ProjectsComponent projects={projects}/>
            <EducationComponent/>
            <ExperienceComponent/>
            {/*<ContactComponent/>*/}
        </>
    )
}

export const getStaticProps = async () => {
    const res =
        await fetch('https://api.github.com/users/murilo-araujo/repos',
            {
                headers: {
                    Authorization: `token ${process.env.GITHUB_PUBLIC_REPOS_KEY}`
                }
            })

    const projects = await res.json()

    return {
        props: {projects: projects},
        revalidate: 60
    }
}