import React from 'react'
import star from '../assets/icons/star-solid.svg'
import '../css/movie.css'

function Movie({img_src, title, rating}) {
    return (
        <div className="movie">
            <img src={img_src} alt="" className="thumbnail"/>
            <h3 className="title">{title}</h3>
            <h4 className="rating"><img src={star} alt="" className="star"/> {rating}</h4>
        </div>
    )
}
 
export default Movie;
