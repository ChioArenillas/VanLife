import React, { useEffect, useState } from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'

export default function HostVansDetails() {
  const params = useParams()
  const [currentVan, setCurrentVan] = useState(null)

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then(resp => resp.json()
        .then(data => setCurrentVan(data.vans)))
  }, [params.id])

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }


  return (
    <div className='van-detail-container'>
      <Link to=".." relative='path' className="back-button" >
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        {currentVan ? (
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} alt='Van Imagen' />
            <div className="host-van-detail-info-text">
              <i className={`van-type ${currentVan.type} selected`}>{currentVan.type}</i>
              <h3>{currentVan.name}</h3>
              <h4 className='van-price'><span>{currentVan.price}€</span>/day</h4>
            </div>
          </div>
        )
          : <h2>Loading...</h2>}
        <div>
          <nav className='host-van-detail-nav'>
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
        {<Outlet context={currentVan}/>}
      </div>
    </div>
  )
}
