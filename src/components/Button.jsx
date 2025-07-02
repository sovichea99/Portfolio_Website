import React from 'react'
import ShinyText from './ShinyText';

const Button = ({text, className, id}) => {
  return (
   <a 
    onClick={(e)=>{
      e.preventDefault();
      const target = document.getElementById('counter')

      if (target && id){
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top,behavior:'smooth'
        })
      }
    }}
    id={id} className={`${className ?? ''} cta-wrapper`}>
      
    <div className='cta-button group'>
        <div className='bg-circle'/>
        <ShinyText text="see my work!" className='text'/>
        <div className='arrow-wrapper'>
            <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
    </div>
   </a>
  )
}

export default Button;