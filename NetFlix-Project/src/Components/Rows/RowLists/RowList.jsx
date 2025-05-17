import React from 'react'
import Row from "../Row/Row.jsx"
import requests from "../../../Utils/Requests.jsx"

const RowList = () => {
 return (
   <>
     <Row
       title="NETFLIX ORIGINALS"
       fetchUrl={requests.fetchNetflixOriginals}
       isLargeRow={true}
     />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
     <Row title="Action Movies" fetchUrl={requests.fetchActionsMovies} />
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
   </>
 );
}

export default RowList