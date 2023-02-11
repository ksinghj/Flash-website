import React from 'react'
import Image from 'next/image'

import flashLogoText from '../assets/logo-text.png'
import flashLogoBolt from '../assets/logo-bolt.png'
import C2AButton from '@/components/C2AButton'

export default function Layout({ children }: any) {
  return (
    <>
      <div className='p-4 md:p-5 top-0 lg:border-b-5 z-20 flex flex-row items-center justify-between bg-dark-blue sticky lg:flex lg:px-16 lg:py-4'>
        <Image className='hidden lg:inline-block' src={flashLogoText} alt='Flash logo' height={40} />
        <Image className='inline-block lg:hidden' src={flashLogoBolt} alt='Flash logo' height={40} />
        <C2AButton>Go to app</C2AButton>
      </div>
      {children}
    </>
  )
}