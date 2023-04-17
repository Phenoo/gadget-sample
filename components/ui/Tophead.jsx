import React from 'react'

const Tophead = ({title}) => {
  return (
    <h4 className='text-3xl md:text-5xl capitalize font-bold text-[#111]'>
        {title}
    </h4>
  )
}

export default Tophead