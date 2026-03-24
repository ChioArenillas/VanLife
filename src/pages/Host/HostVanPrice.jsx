import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPrice() {
    const currentVan = useOutletContext()
  return (
    <div >
      {currentVan ? 
      <div className='host-van-detail-price'>
        {currentVan.price}€ <span >/day</span>
        </div> : 
      <h2>Loading...</h2>}
    </div>
  )
}
