import { useState, useEffect } from "react";
import ExtendedList  from "./components/List";
import "./css/header.css";
import "./App.css";
import search_icon from "./assets/icons/search.svg";
import Home from './Home'
import { BrowserRouter as Router, Switch, Route , NavLink} from "react-router-dom";


function App() {
  const API_KEY = "4c397752e5cefdf86d36ee3e05ff8a23";


  // States

  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState(" ");
  const [query, setQuery] = useState([]);


  //Functions

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
    setSearch("");
  };

  useEffect(() => {
   getMovies();
  }, [submit])


  const GetTrending = async () => {
    const link = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
    const response = await fetch(link);
    const data = await response.json();
    console.log("Trending", data.results);
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
    <Router>
      <div className="App">
        <header>
          <NavLink to="/" className="NavLink">
            <p className="logo">Entertainment</p>
          </NavLink>
          <form className="form" onSubmit={getSearch}>
            <NavLink to="/s" className="NavLink input">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={updateSearch}
              />
            </NavLink>

            <button type="submit">
              <img src={search_icon} alt="" className="search icon" />
            </button>
          </form>
        </header>

        <Route
          path="/"
          exact
          component={() => (
            <Home
              trending={trending}
              popular={popular}
              topRated={topRated}
              upcoming={upcoming}
            />
          )}
        />
        <Route
          path="/s"
          exact
          component={() => <ExtendedList array={query} />}
        />

      </div>
    </Router>
  );
}

export default App;
