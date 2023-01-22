import React from 'react'
import Image from 'next/image'

import flashLogoText from '../assets/logo-text.png'
import C2AButton from '@/components/C2AButton'

export default function Layout({ children }: any) {
  return (
    <>
      <div className='p-3 md:p-5 sticky top-0 lg:border-b-5 flex flex-row items-center justify-between border-b-4 border-flash-yellow bg-light-blue lg:flex lg:px-16 lg:py-2'>
        <Image src={flashLogoText} alt='Flash logo' height={40} />
        <C2AButton />
      </div>
      {children}
    </>
  )
}
