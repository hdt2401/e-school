import React from 'react'

export default function IconAndInfo({ image, alt, text }) {
  return (
    <div className='flex flex-nowrap items-center mr-5'>
      <img className='mr-2' src={image} alt={alt} />
      <span>{text}</span>
    </div>
  )
}
