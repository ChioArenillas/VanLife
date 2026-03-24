import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPhoto() {
    const currentVan = useOutletContext()
  return (
    <div className='host-van-detail-photos'>
        { currentVan ?
        <img src={currentVan.imageUrl} alt='Van Imagen' /> :
        <h2>Loading...</h2>
        }
    </div>
  )
}
