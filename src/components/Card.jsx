import React, { useState, useEffect } from 'react'
import '../css/card.css'
import star from "../assets/icons/star-solid.svg";
import Modal from './Modal'


const API_KEY = "269385d2";

// const getDetails = async (title) => {
//   const response = await fetch(
//     `https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`
//   );

//   const data = await response.json();
//   console.log("Details", data);
//   return data;
// };

// const getReviews = async (id) => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=4c397752e5cefdf86d36ee3e05ff8a23&language=en-US&page=1`
//   );
//   const data = await response.json();
//   console.log("Reviews", data.results)
//   return data.results;
// }

// const getSimilar = async (id) => {
//   const response = await fetch(
//     `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4c397752e5cefdf86d36ee3e05ff8a23&language=en-US&page=1`
//   );
//   const data = await response.json();
//   console.log("Similar",data.results);
//   return data.results;
// }


export function ExtendedCard({ img_src, overview, title, rating, release_date, id}) {
   if (img_src == null || title == null || overview == null) return null;
  return (
    <div className="extended-card" onClick={() =>{
      // getDetails(title);
      // getReviews(id);
      // getSimilar(id);
    }}>
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

export function Card({ img_src, title, rating, id}) {

  const [details, setDetails] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [reviews, setReviews] = useState([]);


  const getDetails = async (title) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`
    );

    const data = await response.json();
    console.log("Details", data);
    setDetails(data)
  };

  const getReviews = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=4c397752e5cefdf86d36ee3e05ff8a23&language=en-US&page=1`
    );
    const data = await response.json();
    console.log("Reviews", data.results);
    // return data.results;
    setReviews(data.results)
  };

  const getSimilar = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4c397752e5cefdf86d36ee3e05ff8a23&language=en-US&page=1`
    );
    const data = await response.json();
    console.log("Similar", data.results);
    // return data.results;
    setSimilar(data.results)
  };

  const [hide, setHide] = useState(true)

  const showModal = () => setHide(false);
  const hideModal = () => setHide(true);

  if (img_src == null || title == null) return null;
  return (
    <div
      className="movie"
      onClick={() => {
        getDetails(title);
        getReviews(id);
        getSimilar(id);
        showModal();
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${img_src}`}
        alt=""
        className="thumbnail"
      />
      <h3 className="title">{title}</h3>
      <h4 className="rating">
        <img src={star} alt="" className="star" /> {rating}
      </h4>
      <div className={hide ? "hide" : "cont"} onClick={hideModal}>
        <Modal
          title={details.Title}
          release_year={details.Released}
          runtime={details.Runtime}
          genre={details.Genre}
          director={details.Director}
          actors={details.Actors}
          lang={details.Language}
          country={details.Country}
          awards={details.Awards}
          prod={details.Production}
          plot={details.Plot}
          ratings={details.Ratings}
          image={img_src}
          similars={similar}
          reviews={reviews}
        />
      </div>
    </div>
  );
}

