//a container inside of a Movie that houses Review components.

import React from 'react';
import Review from './Review';

function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} text={review.text} />
      ))}
    </div>
  );
}

export default ReviewList;
