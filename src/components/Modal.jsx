import React from 'react'
import Review from './Review'
import Card from './Card'
import '../css/Modal.css'
import { act } from 'react-dom/test-utils';

function Modal({
  title,
  release_year,
  runtime,
  genre,
  director,
  actors,
  lang,
  country,
  awards,
  prod,
  plot,
  ratings,
  image,
  similars,
  reviews,
}) {
  return (
    <div className="modal">
      <h1 className="title">{title}</h1>
      <div className="details-section">
        <div className="image-section">
          <img src={image} alt="" className="poster" />
          <p className="rating">IMDb: {ratings[0].value}</p>
          <p className="rating">Rotten Tomatoes: {ratings[1].value}</p>
        </div>
        <div className="details">
          <p>Year: {release_year}</p>
          <p>Runtime: {runtime}</p>
          <p>Genre: {genre}</p>
          <p>Director: {director}</p>
          <p>Actors: {actors}</p>
          <p>Language: {lang}</p>
          <p>Country: {country}</p>
          <p>Awards: {awards}</p>
          <p>Production: {prod}</p>
          <p>Plot: {plot}</p>
        </div>
      </div>
      <div className="similar">
        {similars.map((movie) => (
          <Card
            img_src={movie.poster_path}
            title={movie.title}
            rating={movie.vote_average}
            id={movie.id}
          />
        ))}
      </div>
      <div className="reviews">
        {reviews.map((review) => (
          <Review
            content={review.content}
            name={review.author_details.name}
            username={review.author_details.username}
            avatar={review.author_details.avatar_path}
          />
        ))}
      </div>
    </div>
  );
}

export default Modal
