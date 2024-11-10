import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data =[
    {
        id: 0,
        tittle: "Pixel Perfect Page",
        desc: "A Next.Js and Tailwind CSS page from figma design",
        imgae: "/project_1.jpg",
        tags: ["Next.js" , "Node" , "TailwindCSS"]
    },
    {
        id: 1,
        tittle: "Static  Resume",
        desc: "A Resume built by using HTML CSS and Typescript",
        imgae: "/project_2.jpg",
        tags: ["HTML" ,  "CSS" , "Typescript"]
    },
    {
        id: 2,
        tittle: "Editable Resume ",
        desc: "A Resume built by using HTML CSS and Typescript",
        imgae: "/project_3.jpg",
        tags: ["HTML" , "CSS" , "Typescript"]
    }
];

const projects = () => {
  return (
    <div   id="projects" className='container pt-32'>
      <Heading   tittle='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=> (<Card 
        key={el.id}
        tittle={el.tittle}
        desc={el.desc}
        imgae={el.imgae}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default projects
