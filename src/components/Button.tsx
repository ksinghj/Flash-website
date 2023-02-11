import React from 'react'
import Image, { type StaticImageData } from 'next/image'

export interface ButtonProps {
  className?: string
  children: React.ReactNode
  icon?: string | StaticImageData
  iconAlt?: string
  onClick?: () => void
  textStyles?: string
  disabled?: boolean
}

export default function Button({ className, children, icon, iconAlt, onClick, textStyles, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row items-center justify-center rounded-md px-4 py-2 align-middle ${className} ${
        disabled ? `!bg-dark-grey` : ''
      }`}
      disabled={disabled}>
      <span
        className={`${icon ? 'mr-3' : ''} font-ma text-2xl font-semibold text-white md:text-3xl ${textStyles || ''}`}>
        {children}
      </span>
      {icon && <Image src={icon} alt={iconAlt || 'icon'} width={18} height={18} className='self-center' />}
    </button>
  )
}
