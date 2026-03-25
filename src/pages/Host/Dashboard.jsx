import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsStarFill } from 'react-icons/bs'
import { getHostVans } from '../../api'
import { transactionsData } from '../../data'
import { reviewsData } from '../../data'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const formatEUR = (value) => value.toLocaleString("es-ES") + " €"
  const totalIncome = transactionsData.reduce((acc, transaction) =>
    acc + transaction.amount, 0)

  const overalRating = reviewsData.reduce((acc, review) =>
    acc + review.rating, 0) / reviewsData.length

  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    getHostVans()
      .then(data => setVans(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  function fakeLogOut(){
    localStorage.removeItem("loggedin")
    navigate("/login")
  }

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
        <Link to={`vans/${van.id}`}>View</Link>
      </div>
    ))
    return (
      <div className="host-vans-list">
        <section>{hostVansEls}</section>
      </div>
    )
  }

  // if (loading) {
  //     return <h1>Loading...</h1>
  // }

  if (error) {
    return <h1>Error: {error.message}</h1>
  }

  return (
    <>
    <div className='logout-button'>
      <button onClick={fakeLogOut}>Log Out</button>
    </div>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>Income last <span>30 days</span></p>
          <h2>Total: {formatEUR(totalIncome)}</h2>
        </div>
        <Link to="income">Details</Link>
      </section>

      <section className="host-dashboard-reviews">
        <h2>Review score</h2><BsStarFill className="star" />
        <p><span>{overalRating}</span>/{reviewsData.length}</p>
        <Link to="reviews">Details</Link>
      </section>
      
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        {
          loading && !vans
            ? <h1>Loading...</h1>
            : (
              <>
                {renderVanElements(vans)}
              </>
            )
        }
        {/*<React.Suspense fallback={<h3>Loading...</h3>}>
                    <Await resolve={loaderData.vans}>{renderVanElements}</Await>
                </React.Suspense>*/}
      </section>
    </>
  )
}
