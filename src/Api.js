const API_KEY = "4c397752e5cefdf86d36ee3e05ff8a23";



export const GetLatest = async () => {
  const link = `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(link);
  const data = await response.json();
  console.log("Latest",data);
  return data;
};


export const GetTrending = async () => {
  const link = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
   const response = await fetch(link);
   const data = await response.json();
  console.log("Trending", data.results);
   return data.results;
};

export const GetPopular = async () => {
  const link = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
   const response = await fetch(link);
   const data = await response.json();
  console.log("Popular", data.results);
   return data.results;
};

export const GetTopRated = async () => {
  const link = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
   const response = await fetch(link);
   const data = await response.json();
  console.log("Top Rated", data.results);
   return data.results;
};

export const GetUpcoming = async () => {
  const link = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
   const response = await fetch(link);
   const data = await response.json();
  console.log("Upcoming", data.results);
   return data.results;
};
