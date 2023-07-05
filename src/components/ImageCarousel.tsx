import Image from 'next/image'
import React from 'react'

export default function ImageCarousel() {
  return (
    <div className="custom-carousel">
      <Image src="/images/hero-banner.png" alt="hero-banner" width={1400} height={100} />
    </div>
  )
}
