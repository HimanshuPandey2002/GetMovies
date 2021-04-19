import React from 'react'
import '../css/card.css'
import star from "../assets/icons/star-solid.svg";


export function ExtendedCard({img_src, overview}) {
    if(img_src == null || overview == null)
        return null;
    return (
        <div className="extended-card">
            <div className="image">
                <img src={img_src} alt=""/>
            </div>
            <div className="details">
                <p className="overview">{overview}</p>
            </div>
        </div>
    )
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

