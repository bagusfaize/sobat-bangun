import Link from 'next/link';
import React from 'react'
import {BiChevronRight} from 'react-icons/bi';

export default function Breadcumbs() {
  const data = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Layanan Desain",
      link: "/"
    },
    {
      label: "Omah Apik 3",
      link: "/"
    }
  ];

  return (
    <div className="breadcumbs">
      {
        data.map((item, index, data) => {
          console.log('clg item', index, data.length - 1);
          return(
            <Link href={item.link} className="breadcumb-items">
              <span className="breadcumb-label">{item.label}</span>
              { data.length - 1 !== index && <span className="mx-1"><BiChevronRight fontSize={20}/></span> }
              
            </Link>
          )
        })
      }
    </div>
  )
}
