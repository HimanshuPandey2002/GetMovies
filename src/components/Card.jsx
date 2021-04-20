import React from 'react'
import '../css/card.css'
import star from "../assets/icons/star-solid.svg";


export function ExtendedCard({ img_src, overview, title, rating, release_date }) {
 
  return (
    <div className="extended-card">
      <div className="image">
        <img src={`https://image.tmdb.org/t/p/w500${img_src}`} alt="" />
      </div>
      <div className="details">
        <h2 className="title">{title}</h2>
        <p className="overview">
          {overview === "" ? "** NO INFORMATION AVAILABLE**" : overview}
        </p>
        <h4 className="rating">
          <img src={star} alt="" className="star" /> {rating}
        </h4>
      </div>
    </div>
  );
}

export function Card({ img_src, title, rating, key }) {
  if (img_src == null || title == null) return null;
  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/w500${img_src}`}
        alt=""
        className="thumbnail"
      />
      <h3 className="title">{title}</h3>
      <h4 className="rating">
        <img src={star} alt="" className="star" /> {rating}
      </h4>
    </div>
  );
}

