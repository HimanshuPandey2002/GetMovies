import './App.css';
import Header from './components/Header'
import {List, ExtendedList} from './components/List';
import {useState, useEffect} from 'react'
import {Card} from './components/Card'

function App() {
  const API_KEY = "4c397752e5cefdf86d36ee3e05ff8a23";
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);


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
    console.log("Popular", data.results);
    setPopular(data.results);
  };

  const GetTopRated = async () => {
    const link = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(link);
    const data = await response.json();
    console.log("Top Rated", data.results);
    setTopRated(data.results);
  };

  const GetUpcoming = async () => {
    const link = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await fetch(link);
    const data = await response.json();
    console.log("Upcoming", data.results);
    setUpcoming(data.results);
  };

  useEffect(() => {
   GetTrending();
   GetUpcoming();
   GetTopRated();
   GetPopular();
  }, [])

  return (
    <div className="App">
      <Header />
      
      <List array={trending} heading="Trending this Week" />
      <List array={popular} heading="Popular" />
      <List array={topRated} heading="Top Rated" />
      <List array={upcoming} heading="Upcoming" />
      {/* <ExtendedList /> */}
    </div>
  );
}

export default App;
