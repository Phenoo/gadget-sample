import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

import Img from '@/components/assets/whatsapp.webp'

const Whatsapp = () => {
    const [fixed, setFixed] = useState('');
    const btnRef = useRef(null);
  
  
    useEffect(() => {
      const windowScroll = () => {
        let windowHeight = window.scrollY
    
        if(windowHeight > 300){
          setFixed('fixed right-4 bottom-10');
        } else{
          setFixed('hidden')
        }
      }
  
      window.addEventListener('scroll', windowScroll);
    })
  return (
    <div ref={btnRef} className={`w-[40px] cursor-pointer ${fixed}`}  >
        <a href="https://wa.link/4wbwcy" target='_blank'>
            <Image src={Img} alt='whatsapp' className='w-full object-fit' />
        </a>
    </div>
  )
}

export default Whatsapp
