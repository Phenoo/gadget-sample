import React from 'react'
import { Button } from '../ui/Button'
import Link from 'next/link'
import Image from 'next/image'


const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')] bg-no-repeat bg-cover grid grid-cols-1 gap-8 place-items-center text-center text-[#fff] py-8 pt-44 md:pt-8">
      <div>
        <section className=' flex flex-col  gap-4 justify-center h-full'>
            <h1 className='text-3xl md:text-[40px] lg:text-5xl font-bold capitalize max-w-[800px] mx-auto'>
            WELCOME TO GADGETTT: YOUR TECHNOLOGY SOLUTIONS SOURCE!
            </h1>
            <p className='text-lg md:text-xl' >
              Technology offers endless possibilities for innovation and progress. Embracing tech to create positive change is key to success.
            </p>
            <Link href='/quote' className='flex justify-center'>
              <Button title='get started' bgcolor='#fff' />
            </Link>

        </section>
      </div>

    </div>
  )
}

export default HeroSection