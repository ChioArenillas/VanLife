import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HostVans() {
  const [hostVans, setHostVans] = useState([])

  useEffect(() => {
    fetch("/api/host/vans")
      .then(resp => resp.json())
      .then(data => setHostVans(data.vans))
  }, [])

  const hostVansElements = hostVans.map(van => (
    <Link to={`/host/vans/${van.id}`} key={van.id} className='host-van-link-wrapper'>
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
        {
          hostVans.length > 0 ? (
            <section>
              {hostVansElements}
            </section>) : <h2>Loading...</h2>
        }
      </div>
    </div>
  )
}
