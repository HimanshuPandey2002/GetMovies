import React, { useState } from "react";
import Review from "./Review";
import "../css/Modal.css";
import Star from "../assets/icons/star-solid.svg";

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
  const [hide, sethide] = useState(false);
  const Hidemodal = () => sethide(true);
  return (
    <div className={hide ? "hide" : "modal"}>
      <div className="close" onClick={Hidemodal}>
        +
      </div>
      <div className="container">
        <div className="Details">
          <h1 className="title">{title}</h1>
          <p className="small-details">
            {runtime} | {genre} | {release_year}
          </p>
          <br />
          <p className="overview">{plot}</p>

          <p className="sub-details">
            <span> Director : </span>
            {director} | <span>Production : </span>
            {prod}
          </p>
          <p className="sub-details">
            <span>Actors :</span> {actors}
          </p>
          <p className="sub-details">
            <span>Country : </span>
            {country} | <span>Language :</span> {lang}
          </p>
          <p className="sub-details">
            <span>Awards :</span> {awards}
          </p>
          <p className="ratings">
            <img src={Star} alt="" />
            {ratings}
          </p>
        </div>
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w500${image}`}
            alt=""
            className="poster"
          />
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

export default Modal;
