import React, { useEffect, useState } from "react";
import axios from "../../Utils/axios.jsx"
import requests from "../../Utils/Requests.jsx";
import "./Banner.css"
const Banner = () => {
  const [movie, setMovie] = useState({});useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(requests);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]);
     console.log(movie?.backdrop_path) 
    } 
      catch (error) {
        console.log("error", error);
      }
    }
    
    fetchData();
  }, []);
function truncate(str, n){
  return (str?.length >n ? str.substr(0,n, -1)+'...': str);
}
  return (
    <div className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }}
    >
      <div className="banner__contents">
  <h1 className="banner__title">
    {movie?.title || movie?.name || movie?.original_name}
  </h1>

  <div className="banner__buttons">
    <button className="banner__button">Play</button>
    <button className="banner__button">My List</button>
  </div>

  <h1 className="banner__description">
    {truncate(movie?.overview, 150)}
  </h1>
</div>

<div className="banner--fadeBottom" />

      {/* Banner contents go here */}
    </div>
  );
};
export default Banner;
