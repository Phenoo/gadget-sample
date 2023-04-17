import React from 'react'


import { Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import "swiper/css";
import "swiper/css/pagination";

import Image from 'next/image';

import { motion } from 'framer-motion';
import Tophead from '../ui/Tophead'
import { swiperITems } from '@/data/data';

import Img1 from '@/assets/herald.png'


const ReviewSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.4}
      }}
      viewport={{ once : true}}
      className='py-16 relative bg-[#b23850] flex justify-center items-center '
    >

    <section>
        <Tophead title='"SEE WHAT OUR CUSTOMERS ARE SAYING ABOUT OUR TECHNOLOGY SOLUTIONS"' />
        

        <div>
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Pagination]}
            className="h-[350px] w-full mySwiper my-8"
          >

            {
              swiperITems.map((item, index) => (
                <SwiperSlide key={index} className=''>
                  <div className="w-[300px] md:w-[370px] h-[285px] md:h-[270px] rounded-lg bg-white shadow-md p-4 flex justify-between flex-col cursor-pointer hover:scale-95 transition-all" key={index}>
                    <p>
                      {item.review}
                    </p>
                    <br />
                    <div className='flex'>
                     <h4 className='font-[600]'>
                       - {item.name}
                     </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }    

          </Swiper>
        </div>

      </section>

      <div className="absolute left-4 bottom-2">
        <Image src={Img1} alt='review' />
      </div>
    
    </motion.div>      

  )
}


export default ReviewSection