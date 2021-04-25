import React, {useState} from 'react'
import Review from './Review'
import {Card} from './Card'
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

  const [hide, sethide] = useState(false)
  const Hidemodal = () => sethide(true)
  return (
    <div className={hide ? "hide" : "modal"}>
      <div className="close" onClick={Hidemodal}>+</div>
      <h1 className="title">{title}</h1>
      <div className="details-section">
        <div className="image-section">
          <img
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt=""
            className="poster"
          />
          {/* <p className="rating">IMDb: {ratings[0].value}</p> */}
          {/* <p className="rating">Rotten Tomatoes: {ratings[1].value}</p> */}
        </div>
        <div className="details">
          <p>
            <span>Released:</span> {release_year}
          </p>
          <p>
            <span>Runtime:</span> {runtime}
          </p>
          <p>
            <span>Genre:</span> {genre}
          </p>
          <p>
            <span>Director:</span> {director}
          </p>
          <p>
            <span>Actors:</span> {actors}
          </p>
          <p>
            <span>Language:</span> {lang}
          </p>
          <p>
            <span>Country:</span> {country}
          </p>
          <p>
            <span>Awards:</span> {awards}
          </p>
          <p>
            <span>Production:</span> {prod}
          </p>
          <p>
            <span>Plot:</span> {plot}
          </p>
        </div>
      </div>
      <div className="similar">
        <h2 className="heading">Similar Movies</h2>
        <div className="content">
         
          {similars.map((movie) => (
            <Card
              img_src={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average}
              id={movie.id}
            />
          ))}
        </div>
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
