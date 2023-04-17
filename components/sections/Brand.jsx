import { brands } from '@/data/data'
import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <div className='my-16 pt-4  py-10'>
        <section>
            <h4 className='uppercase text-center text-gray-600 font-bold text-sm'>
                our partners
            </h4>
            <div className='flex gap-4 md:gap-8 flex-row items-center justify-between py-4'>
                {
                    brands.map((item, index) => (
                        <article key={index} className=' w-[40px] md:w-[70px]'>
                            <Image src={item.image} alt='brand logo' className='object-contain' />
                        </article>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default Brand