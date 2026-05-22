import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useLocation } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader(){
  await requireAuth()
  return getHostVans()
}

export default function HostVans() {
  const location = useLocation()
  const hostVans = useLoaderData()

  const hostVansElements = hostVans.map(van => (
    <Link to={van.id} key={van.id} className='host-van-link-wrapper'>
      <div key={van.id} className='host-van-single'>
        <img src={van.imageUrl} alt={`photo of ${van.name}`} />
        <div className='host-van-info'>
          <h3>{van.name}</h3>
          <div>{van.price}€/day</div>
        </div>
      </div>
    </Link>
  ))
  
  return (
    <div>
      <h1 className='host-vans-title'>Your listed vans</h1>
      <div className='host-vans-list'>
            <section>
              {hostVansElements}
            </section>
      </div>
    </div>
  )
}
