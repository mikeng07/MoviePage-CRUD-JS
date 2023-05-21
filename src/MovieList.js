//a container for all the Movie components and their data.


import React, { useState } from 'react';
import Movie from './Movie';

function MovieList() {
  const [movies] = useState([
    {
      id: 1,
      title: 'Titanic',
      image: './img.jpg',
      synopsis: 'This a movie about love story between Jack and Rose',
      rating: 5,
      reviews: []
    },
    {
      id: 2,
      title: 'Wall-E',
      image: './img2.jpeg',
      synopsis: 'This a movie about love story between robots Wall-E and Eve',
      rating: 5,
      reviews: []
    }
  ]);

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
