import React, { useEffect, useState } from 'react'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'
import { getVan } from '../../api'

export default function HostVansDetails() {
  const { id } = useParams()
  const [currentVan, setCurrentVan] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadVans(){
      setLoading(true)
      try {
        const data = await getVan(id)
        setCurrentVan(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [id])

  if(loading){
    return <h1>Loading...</h1>
  }
  if(error) {
    return <h1>There was an error: {error.message}</h1>
  }

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
        {currentVan && (
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} alt='Van Imagen' />
            <div className="host-van-detail-info-text">
              <i className={`van-type ${currentVan.type} selected`}>{currentVan.type}</i>
              <h3>{currentVan.name}</h3>
              <h4 className='van-price'><span>{currentVan.price}€</span>/day</h4>
            </div>
          </div>
        )}
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
