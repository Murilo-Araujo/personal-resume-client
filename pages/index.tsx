import {Inter} from 'next/font/google'
import HeroComponent from '@/components/index/heroComponent'
import SummaryComponent from "@/components/index/summaryComponent";
import ProjectsComponent from "@/components/index/projectsComponent";
import ContactComponent from "@/components/index/contactComponent";
import EducationComponent from "@/components/index/educationComponent";
import ExperienceComponent from "@/components/index/experienceComponent";
import AboutMeComponent from "@/components/index/aboutMeComponent";

const inter = Inter({subsets: ['latin']})

export default function Home({projects}: any) {


    return (
        <>
            <HeroComponent/>
            <SummaryComponent/>
            <ProjectsComponent projects={projects}/>
            <EducationComponent/>
            <ExperienceComponent/>
            {/*<AboutMeComponent/>*/}
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