'use client'
import Image from "next/image";
import TabButton from "@/app/components/TabButton";
import { useState, useTransition} from "react";

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul>
                <li>Node.js</li>
                <li>React</li>
                <li>Nextjs</li>
                <li>NestJS</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul>
                <li>Nextjs</li>
                <li>NestJS</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul>
                <li>Node.js</li>
                <li>React</li>
                <li>Nextjs</li>
                <li>NestJS</li>
            </ul>
        )
    }
]

function AboutSection() {
    const [tab,setTab] = useState('skills')
    const [isPending,startTransition] = useTransition()

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id)
        })
    }
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
               <div className='h-full'>
                   <Image src={'/images/about-image.png'} alt='about' width={500} height={500}/>
               </div>
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.</p>
                {/* 其他方面 */}
                {/* tab 栏*/}
                    <div className='flex mt-8 justify-start'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === 'skills'}>{" "}Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === 'experience'}>{" "}experience{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === 'education'}>{" "}education{" "}</TabButton>
                    </div>
                {/* tab 内容 */}
                    <div className='mt-8'>{(TAB_DATA.find(item => item.id === tab))?.content}</div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;