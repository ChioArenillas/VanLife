import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function HostVansDetails() {
  const params = useParams()
  const [currentVan, setCurrentVan] = useState(null)

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then(resp => resp.json()
        .then(data => setCurrentVan(data.vans)))
  }, [params.id])
  console.log(currentVan)

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <div>
      <h2>Back to all vans</h2>
      <div>
        {currentVan ? (
          <div>
            <img src={currentVan.imageUrl} alt='Van Imagen' />
            <div>
              <i className={`van-type ${currentVan.type} selected`}>{currentVan.type}</i>
              <h2>{currentVan.name}</h2>
              <p className='van-price'><span>{currentVan.price}€</span>/day</p>
            </div>
          </div>
        )
          : <h2>Loading...</h2>}
      </div>
      <div>
        <nav className='host-nav'>
          <NavLink to="."
            end
            style={({ isActive }) => isActive ? activeStyles : null}>
            Details
          </NavLink>
          <NavLink to="pricing"
            style={({ isActive }) => isActive ? activeStyles : null}>
            Pricing
          </NavLink>
          <NavLink to="photos"
            style={({ isActive }) => isActive ? activeStyles : null}>
            Photos
          </NavLink>
        </nav>

      </div>
    </div>
  )
}
