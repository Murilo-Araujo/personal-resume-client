import Image from 'next/image'
import {Inter} from 'next/font/google'
import Axios from 'axios'
import HeroComponent from '@/components/heroComponent'
import SummaryComponent from "@/components/summaryComponent";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <><HeroComponent/><SummaryComponent/></>
    )
}
