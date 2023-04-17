import React from 'react'

export const Button = ({title, bgcolor}) => {
  return (
    <div className='w-fit h-fit' >
        <button style={{background: bgcolor}} className='uppercase rounded-[30px] border border-black font-semibold py-2 md:py-3 px-6 md:px-8  text-black hover:scale-95 active:scale-105 transition-all'  aria-label={`${title}`}>
            {title}
        </button>
    </div>
  )
}
