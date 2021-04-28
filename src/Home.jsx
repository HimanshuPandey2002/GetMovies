import React from 'react'
import List  from "./components/List";

function Home({trending, popular, topRated, upcoming}) {
    return (
      <div>
        <List array={trending} heading="Trending this Week" />
        <List array={popular} heading="Popular" />
        <List array={topRated} heading="Top Rated" />
        <List array={upcoming} heading="Upcoming" />
      </div>
    );
}

export default Home
