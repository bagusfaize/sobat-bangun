import React from 'react'
import {BiChevronRight} from 'react-icons/bi';

export default function Breadcumbs() {
  return (
    <div className="breadcumbs">
        <span>Home</span>
        <span><BiChevronRight/></span>
        <span>Layanan Desain</span>
        <span><BiChevronRight/></span>
        <span>Omah Apik 3</span>
    </div>
  )
}
