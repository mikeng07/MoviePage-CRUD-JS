// a one to five-star rating component that allows users to rate 
// something (movies in this case, but remember that components 
// are reusable, so you could use it elsewhere!)



import React from 'react';

function Stars({ rating }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} className={value <= rating ? 'star filled' : 'star'}>
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default Stars;
