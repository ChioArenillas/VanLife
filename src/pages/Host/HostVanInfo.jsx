import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {
    const currentVan = useOutletContext()
    const category = currentVan ? currentVan.type : null
    const categoryFormat = currentVan ? category.charAt(0).toUpperCase() + category.slice(1) : null

  return (
    <div>
    {currentVan ? 
    <div className='host-van-detail-label'>
        <p><span>Name:</span> {currentVan.name}</p>
        <p><span>Category:</span> {categoryFormat}</p>
        <p><span>Description:</span> {currentVan.description}</p>
        <p><span>Visibility:</span> Public</p>
    </div> :
    <h2>Loading...</h2>
}
    </div>
    )

}
