import React from 'react'
import Tophead from '../ui/Tophead'
import { Button } from '../ui/Button'
import { serviceItems } from '@/data/data'

import Image from 'next/image'

import Img1 from  '@/assets/star.png'
import Img2 from  '@/assets/scuba.png'

const Services = () => {
  return (
    <div className='py-16 bg-[#e7e3d4] relative'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <Tophead title="GADGETTT'S TOP TECHNOLOGY PICKS" />
          <p className='my-4'>
            Gadgettt Technology website offers customers a vast selection of cutting-edge tech products, as well as expert buying advice, product reviews, and helpful info on the latest tech trends.
          </p>
          <Button title='Get Started' />
        </div>
        <div className='flex  gap-4 flex-wrap'>
          {
            serviceItems.map((item, index) => (
              <article key={index} className='bg-white  p-4  rounded-sm w-full md:w-[300px]'>
                <h4 className='font-semibold'>
                  {item.Service}
                </h4>
                <p>
                  {item.Description}
                </p>
              </article>
            ))
          }
        </div>
      </section>

      <div className="absolute bottom-8 left-4 w-[20px] md:w-[40px]">
        <Image src={Img1} alt='engine' className='animate-spin' />
      </div>

      <div className="absolute top-8 right-4 w-[30px] ">
        <Image src={Img2} alt='engine'  />
      </div>
    </div>
  )
}

export default Services