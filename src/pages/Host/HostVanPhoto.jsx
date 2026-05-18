import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhoto() {
    const {currentVan} = useOutletContext()
  return (
    <div className='host-van-detail-photos'>
        <img src={currentVan.imageUrl} alt='Van Imagen' />    </div>
  )
}
