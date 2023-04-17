import { foot } from '@/data/data'
import Link from 'next/link'
import React from 'react'

const Social = () => {
  return (
    <div>
    {
        foot.map((item, index) => (
          <article className='w-[280px]' key={index}>
            <ul className='flex gap-4 items-center mt-6'>
              {
                item.links.map((link, index) => (
                  <li key={index} className='bg-white text-[#111] rounded-full p-2 hover:opacity-80 hover:scale-90 transition-all cursor-pointer border border-[#808080]' >
                    <Link href={link.url} target="_blank" rel="noopener noreferrer"  aria-label={`${link.name}`} > 
                      <span className='text-lg md:text-xl'>
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </article>
        ))
      }
    </div>
  )
}

export default Social