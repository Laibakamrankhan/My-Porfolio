import React from 'react'
import Image from 'next/image'

interface propsType{
    tittle: string
    desc: string
    imgae: string
    tags: string[];
}

const Card: React.FC<propsType> = ({tittle , desc , imgae , tags}) => {
  return (
    <div className='border border-purple-500 w-[300px] sm:w[350px]' data-aos="flip-right">
        <div>
            <Image className='w-[300px] sm:w[350px] h-auto'
            src={imgae}
            width={350}
            height={350}
            alt={tittle} />
        </div>
        <div className='p-4 space-y-4'>
         <div className='text-4xl font-extralight'>
         {tittle}
         </div>
         <div>
         {desc}
         </div>
         <div>
        {tags.map((el) =>(
            <div className='tags' key={el}>
             {el}
            </div>
        ))}
         </div>
        </div>
      
    </div>
  )
}

export default Card
