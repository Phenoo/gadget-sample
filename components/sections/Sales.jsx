import React from 'react'
import Tophead from '../ui/Tophead'

import Img from '@/components/assets/light.png'
import Image from 'next/image'
import { productData } from '@/data/data'
import Link from 'next/link'
import { Button } from '../ui/Button'

const Sales = () => {
  return (
    <div className='py-20 relative bg-[#0084ff]'>
      <div className='absolute right-8 w-[70px] md:w-[120px]'>
        <Image src={Img} alt='sales' className='object-contain' />
      </div>

        <section>
            <Tophead title='Our Products' />
            {/* <p>what we sell</p> */}
            <div className="flex items-center justify-center flex-wrap gap-5 md:gap-9 py-10">
              {
                productData.map((item, index) => (
                  <article key={index} className='w-[170px] md:w-[250px] lg:[w-300px] h-[190px] md:h-[260px] p-4 bg-white   flex gap-4 flex-col justify-between rounded-md cursor-pointer transition-all'>
                    <div className='h-3/4'>
                      <Image src={item.image} alt={item.name} className='w-full h-full' />
                    </div>
                    <div>
                      <h6 className='font-bold'>
                        {item.name}
                      </h6>
                    </div>                  
                  </article>
                ))
              }
            </div>
            <Link href='/shop' className='flex justify-center mt-8'>
              <Button title='shop here' />
            </Link>
        </section>
    </div>
  )
}

export default Sales