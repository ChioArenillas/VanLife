import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api'

export default function Vans() {
  const [vans, setVans] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const typeFilter = searchParams.get("type")

  useEffect(() => {
    async function loadVans() {
      setLoading(true)
      try {
        const data = await getVans()
        setVans(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [])

  if (loading) {
    return <h1 aria-live='polite'>Loading...</h1>
  }
  if(error){
    return <h1 aria-live='assertive'>There was an error: {error.message}</h1>
  }

  const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

  const vanElements = displayedVans.map(van => (
    <div key={van.id} className='van-tile'>
      <Link to={van.id}
        state={{
          search: `?${searchParams.toString()}`,
          type: typeFilter
        }}>
        <img src={van.imageUrl} alt='Van Imagen' />
        <div className='van-info'>
          <h3>{van.name}</h3>
          <p>{van.price}€<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>

    </div>
  ))

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='van-list-filter-buttons'>
        <button
          onClick={() => setSearchParams({ type: "simple" })}
          className={`van-type simple ${typeFilter === "simple" ? "selected" : null}`}>
          Simple
        </button>
        <button
          onClick={() => setSearchParams({ type: "luxury" })}
          className={`van-type luxury ${typeFilter === "luxury" ? "selected" : null}`}>
          Luxury
        </button>
        <button
          onClick={() => setSearchParams({ type: "rugged" })}
          className={`van-type rugged ${typeFilter === "rugged" ? "selected" : null}`}>
          Rugged
        </button>
        {typeFilter ?
          <button
            onClick={() => setSearchParams({})}
            className='van-type clear-filters'>
            Clear filters
          </button> :
          null
        }
      </div>
      <div className='van-list'>
        {vanElements}
      </div>
    </div>
  )
}
