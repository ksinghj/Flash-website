import * as React from 'react'

export default function C2AButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <a
      href='https://flashapp.cards'
      aria-describedby='Link to Flash app'
      className={`p-2 font-semibold px-4 text-center text-black bg-flash-yellow rounded-full ${className}`}>
      {children}
    </a>
  )
}
