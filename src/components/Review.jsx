import React from 'react'
import '../css/Review.css'

function Review({avatar, name, username, content}) {
    return (
      <div className="review">
        <header>
          <img src={`https://image.tmdb.org/t/p/w500${avatar}`} alt="" />
          <div className="names">
            <div className="name">{name}</div>
            <div className="uname">@{username}</div>
          </div>
        </header>
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    );
}

export default Review
