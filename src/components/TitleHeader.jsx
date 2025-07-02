import React from 'react'

const TitleHeader = ({title, sub}) => {
  return (
    <div className='flex flex-col items-center  gap-5'>
        <div className='hero-badge bg-white-50 dark:bg-gray-700 '>
            <p>{sub}</p>
        </div>
        <div className='font-semibold md:text-2xl lg:text-3xl text-lg text-center'>
            {title}
        </div>
    </div>
  )
}

export default TitleHeader