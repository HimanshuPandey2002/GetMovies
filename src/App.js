import { useState, useEffect } from "react";
import "./App.css";
import { List, ExtendedList } from "./components/List";
// import { Card, ExtendedCard } from "./components/Card";
import "./css/header.css";
import search from "./assets/icons/search.svg";
import Switch from "./components/Switch";

function App() {
  const API_KEY = "4c397752e5cefdf86d36ee3e05ff8a23";

  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState(" ");
  const [query, setQuery] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${submit}&page=1&include_adult=false`
    );
    const data = await response.json();
    console.log(data.results)
    setQuery(data.results);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setSubmit(search);
  };

  useEffect(() => {
   getMovies();
  }, [submit])


  const GetTrending = async () => {
    const link = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
    const response = await fetch(link);
    const data = await response.json();
    // console.log("Trending", data.results);
    setTrending(data.results);
  };

  const GetPopular = async () => {
    const link = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(link);
    const data = await response.json();
    // console.log("Popular", data.results);
    setPopular(data.results);
  };

  const GetTopRated = async () => {
    const link = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(link);
    const data = await response.json();
    // console.log("Top Rated", data.results);
    setTopRated(data.results);
  };

  const GetUpcoming = async () => {
    const link = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(link);
    const data = await response.json();
    // console.log("Upcoming", data.results);
    setUpcoming(data.results);
  };

  useEffect(() => {
    GetTrending();
    GetUpcoming();
    GetTopRated();
    GetPopular();
  }, []);

  return (
    <div className="App">
      <header>
        <div className="logo">Entertainment</div>
        <form className="form" onSubmit={getSearch}>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit">
            <img src={search} alt="" className="search icon" />
          </button>
        </form>
        <ul className="nav">
          <li>Anime</li>
          <li>TV Shows</li>
          {/* <li>
            <Switch />
          </li> */}
        </ul>
      </header>

      {/* <ExtendedList array={query} /> */}

      {/* {query.map((query) => (
        <ExtendedCard
          key={query.id}
          // title={query.title}
          img_src={query.poster_path}
          // rating={query.vote_average}
          overview={query.overview}
        />
      ))} */}

      {/* {(query != null) ? query.map((item) => (
        <ExtendedCard img_src={item.poster_path} overview={item.overview}/>
      )): ""} */}

      <ExtendedList array={query} />

      <List array={trending} heading="Trending this Week" />
      <List array={popular} heading="Popular" />
      <List array={topRated} heading="Top Rated" />
      <List array={upcoming} heading="Upcoming" />
      {/* <ExtendedList /> */}
    </div>
  );
}

export default App;
