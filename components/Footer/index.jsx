import { footerItems } from '@/data/data'
import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'
import Social from '../sections/Social'



const FooterSection = () => {
  return (
    <div className='bg-[#8590aa] text-white pt-20 pb-6'>
      <section>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-8'>
          <article>
            <Logo />
            <p>
            Details on how customers can get their gadgets repaired in case of damage
            </p>
            <Social />
          </article>
          {
              footerItems.map((item, index) => (
                <article className='w-[280px]' key={index}>
            <h4 className='font-bold text-xl'>
                    {item.title}
                  </h4>
                  <ul className='flex gap-2 flex-col'>
                    {
                      item.links.map((link, index) => (
                        <li key={index + link.name}>
                          <Link href={link.url} aria-label={`${link.name} Link`}>
                            <span>
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
        <p className='text-center'>
          Copyright ©2023 Gadgettt. All Right Reserved.
        </p>
      </section>
    </div>
  )
}

export default FooterSection