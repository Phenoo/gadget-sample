import React from 'react'
import Tophead from '../ui/Tophead'
import Image from 'next/image'


import Img1 from '@/assets/cast.png'
import Img2 from '@/assets/firewall.png'

const BlogSection = () => {
  return (
    <div className='py-20 min-h-[70vh] relative'>
        <section>
            <div>
                <Tophead title='latest updates' />
                <br />

                <div className='flex flex-wrap gap-6 justify-center items-center mt-8'>
                  {
                    [1, 2, 3, 4].map((item, index) => (
                      <article key={index} className='w-full md:w-[300px] shadow-lg h-[200px] p-4 cursor-pointer hover:scale-105 transition-all group-[]:'>
                        <h4 className='font-semibold capitalize'>
                          blog {item}
                        </h4>
                        <div className='w-1/2 h-1 rounded-full bg-red-400 m-4 hover:w-full transition-all' />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius non dolor! Optio dolorem labore provident praesentium quis odit dignissimos.
                        </p>
                      </article>
                    ))
                  }
                </div>
            </div>
           
        </section>

        <div className="absolute right-8 top-8 w-[30px]">
          <Image src={Img1} alt='review' />
        </div>

        <div className="absolute left-8 bottom-8 w-[30px]">
          <Image src={Img2} alt='review' />
        </div>
    </div>
  )
}

export default BlogSection