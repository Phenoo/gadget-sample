import { faqItems } from '@/data/data'
import React, { useState } from 'react'

import { motion } from 'framer-motion';

import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import Tophead from '../ui/Tophead';
import Overflow from '../Overflow';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

import Img1 from '@/assets/usb.png'

const Faq = () => {
  const [sindex, setSindex] = useState();

  const handleClick = (index)  => {
    setSindex(index);
    if(sindex === index){
      setSindex()
    }
  }
  return (
    <div className='bg-[#c4dbf6] relative py-8 flex justify-center flex-col'>
      <Overflow text='frequently asked questions '   icon={<FaStar color='#ff8180' />} />
      <motion.section className='h-full py-10'
        initial={{
          x: -100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.4}
        }}
      >
        <div className="flex items-center gap-4 flex-col justify-center">
            {/* <Tophead title='frequently asked questions' /> */}
            <p>
                
            </p>
        </div>

        <div className="faq-section">
          {
            faqItems.map((item, index) => (
              <article key={index} className='py-6 overflow-hidden border-b border-b-[#111] cursor-pointer ' onClick={() => handleClick(index)}>
                <div className="flex justify-between items-center"  onClick={() => handleClick(index)}>
                  <h4 className={`text-md md:text-lg capitalize font-[500] ${sindex === index ? ' font-bold' : ''}`} >
                    <span className='font-bold mr-4'>0{index + 1}</span>{item.Question}
                    </h4>
                  <div>
                    <button onClick={() => handleClick(index)}
                      aria-expanded='true'
                    >
                      {
                      sindex === index ? 
                        <AiOutlineMinus color='#054FB3' />
                      :
                      <AiOutlinePlus />
                      }
                    </button>
                  </div>

                </div>
                
                <div>
                  {
                      sindex === index &&
                      <motion.p
                        initial={{ height: 0 }}
                        animate={{
                          height: 'auto',   
                          transition: { duration: 0.2 }
                        }}
                        exit={{
                          height: 0,
                          transition: {  duration: 0.2, delay: 0.3 }
                        }}
                        className='mt-4'
                      >
                        {item.Answer}
                      </motion.p>
                    }
                </div>
              </article>
            ))
          }
        </div>
      </motion.section>

      <div className='absolute bottom-4 right-4'>
        <Image src={Img1} alt='review' />
      </div>
    </div>
  )
}

export default Faq