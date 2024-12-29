'use client'

import React from 'react'

interface PromoButtonProps {
  href: string
  children: React.ReactNode
}

export function PromoButton({ href, children }: PromoButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300 text-sm md:text-base"
    >
      {children}
    </button>
  )
}

