import { div } from 'framer-motion/client'
import React from 'react'
import { abilities } from '../constants'

const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg transition-colors duration-300'>
        <div className='mx-auto grid-3-cols'>
            {abilities.map(({imgPath, title, desc}) =>(
                <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4 bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300'>
                    <div className='size-14 flex items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800'>
                        <img src={imgPath} alt={title} />
                    </div>
                    <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
                   <p className='text-gray-600 dark:text-white-50 text-lg'>{desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureCards