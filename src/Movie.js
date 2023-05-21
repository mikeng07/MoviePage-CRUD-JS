// a component that represents movie data (i.e. image, synopsis, rating, etc…)
// import React from "react";


import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

function Movie({ movie }) {
  const { title, image, synopsis, rating, reviews } = movie;
  const [reviewText, setReviewText] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      text: reviewText
    };
    movie.reviews.push(newReview);
    setReviewText('');
  };

  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt={title} className="demo" />
      <p>{synopsis}</p>
      <div>
        <Stars rating={rating} />
      </div>
      <h3>Reviews</h3>
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={handleReviewSubmit} reviewText={reviewText} onReviewTextChange={setReviewText} />
    </div>
  );
}

export default Movie;
