'use client'
import Image from 'next/image'
import Presentation, { ProfileCard } from './components/home'
import Skills from './components/skills'
import ProjectGrid, { ProjectCard } from './components/projects'

export default function Home() {

  
  return (
   <div className='mt-10'>
    <Presentation id="home" ></Presentation>
    <Skills></Skills>
    <div className='mt-20 min-h-screen'>
      <ProjectGrid></ProjectGrid>

    </div>
   </div>
  )
}
