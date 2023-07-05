import { ContainerProps } from '@/types'
import React from 'react'

export default function Container({children} : ContainerProps) {
  return (
    <div className="container px-10">
        {children}
    </div>
  )
}
