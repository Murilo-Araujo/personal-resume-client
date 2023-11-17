import {Inter} from 'next/font/google'
import Axios from 'axios'
import HeroComponent from '@/components/heroComponent'
import SummaryComponent from "@/components/summaryComponent";
import ProjectsComponent from "@/components/projectsComponent";

const inter = Inter({subsets: ['latin']})

export default function Home({projects}: any) {


    return (
        <>
            <HeroComponent/>
            <SummaryComponent/>
            <ProjectsComponent projects={projects}/>
        </>
    )
}

export const getStaticProps = async () => {
    const res =
        await fetch('https://api.github.com/users/murilo-araujo/repos',
            {
                headers: {
                    Authorization: `token ${process.env.GITHUB_TOKEN}`
                }
            })
    const projects = await res.json()

    return {
        props: {projects: projects},
        revalidate: 60
    }
}