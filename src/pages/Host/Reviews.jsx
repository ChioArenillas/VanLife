import React from 'react'
import { reviewsData } from '../../data'
import { BsStarFill } from "react-icons/bs"

export default function Reviews() {

  const overalRating = reviewsData.reduce((acc, review) =>
    acc + review.rating, 0) / reviewsData.length

  const reviewElements = reviewsData.map(review => {
    return (
      <div key={review.id} className='review'>

        {[...Array(review.rating)].map((_, i) => (
          <BsStarFill className="review-star" key={i} />
        ))}
        <div className='info'>
          <p className='name'>{review.name}</p>
          <p className='date'>{review.date}</p>
        </div>
        <div>
          <p>{review.text}</p>
        </div>
      </div>
    )
  })

  return (
    <section className='host-reviews'>
      <div className='top-text'>
        <h2>Your Reviews</h2>
        <p>Last <span>30 days</span></p>
      </div>
      <div className='info-header'>
        <h2>{overalRating}  <BsStarFill className="review-star"/> Overal rating</h2>
        <h3>Reviews({reviewsData.length})</h3>
        <div className='reviews'>
          {reviewsData && reviewElements}
        </div>
      </div>
    </section>

  )
}
