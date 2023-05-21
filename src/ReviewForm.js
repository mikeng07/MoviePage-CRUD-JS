// a form at the bottom of a Movie component that allows
// users to leave reviews. When submitted, the review 
// should be added to the movie. All this data can be 
// stored in an array, no networking or database needed
// for this assignment.

import React from 'react';

function ReviewForm({ onSubmit, reviewText, onReviewTextChange }) {
  return (
    <form onSubmit={onSubmit}>
      <textarea value={reviewText} onChange={(e) => onReviewTextChange(e.target.value)}></textarea>
      <br></br>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
