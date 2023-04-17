import React, { useEffect, useState } from 'react'
import Logo from '../Logo'
import NavMenu from '../Navigation'
import Link from 'next/link'
import { navLinks } from '@/data/data'


const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const changeBackground = () => {
    
    if (window.scrollY >= 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    changeBackground()
  })
  return (
    <nav className={`flex  items-center fixed top-0 w-full z-20 ${scrolled ? 'bg-[#ffffff] text-black shadow-md' : 'text-white'} transition-all`} aria-label='Navigation'>
      <header className=' w-[95%] lg:w-[85%] mx-auto py-6'>
          <div className='flex justify-between items-center w-full'>
            <Logo />
            <div >
              <ul className='hidden md:flex gap-6'>
                {
                  navLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.url} className='uppercase font-bold text-xl'>
                          {link.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="md:hidden">
              <NavMenu scrolled={scrolled} />
            </div>
          </div>

      </header>
      
    </nav>
  )
}

export default NavigationBar