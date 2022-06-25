import React from 'react'
import { Link} from 'react-router-dom'
import './style.css'


const ReviewList = ({ reviews }) => {
  console.log(reviews)
  return (

   <div className='card mb-3'>
   <div className='card-header'>
   <span className='text-light'>Reviews</span>
   </div>
   <div className='card-body'>
   {reviews && reviews.map((review) => {
    return(
       <p className='pill mb-3' key={review._id}>
       {review.reviewBody}
       
       {/*
       <Link to={`/profile/${review.username}`} style={{fontWeight: 700}}>
       {review.username} on { review.createdAt}
       </Link>
       */}
       </p>
   )})}
   </div>
   </div>
  )
}

export default ReviewList