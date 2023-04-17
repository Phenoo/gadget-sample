import React from 'react'
import Tophead from '../ui/Tophead'
import { Button } from '../ui/Button'

import Img2 from  '@/assets/engine.png'
import Image from 'next/image'


const Subscribe = () => {
  return (
    <div className='bg-[#c4dbf6] py-16 min-h-[70vh] flex justify-center items-center relative'> 
      <section className='flex flex-col gap-4 justify-center items-center text-center h-full'>
        <div>
          <Tophead title='JOIN THE WAITLIST TO START USING OUR PRODUCT' />
            <h6 className='max-w-4xl mx-auto mt-4'>
                We are currently accepting names for the wait list for Gadgettt Technology. If you would like to be added to the list, please click the link below to submit your information.
            </h6>
        </div>

          <div className='mt-8'>
            <form>
              <div className='bg-[#fff0f0] flex gap-4 items-center border-2 border-black p-4 rounded-full'>
                <input type="text" placeholder='Enter your email address'
                  className='w-[300px] md:w-[350px] lg:w-[400px] outline-none placeholder:font-bold placeholder:text-black'
                  />
                <Button title='join' bgcolor='rgb(255, 201, 0)' />
              </div>
            </form>
          </div>
      </section>

      <div className='absolute bottom-4 left-1/2 w-[30px] md:w-[50px]'>
        <Image src={Img2} alt='subscibe' />
      </div>
    </div>
  )
}

export default Subscribe