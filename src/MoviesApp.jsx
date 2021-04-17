import {React, useState, useEffect} from 'react'
import './MoviesApp.css';
import MovieGrid from './components/MovieGrid/MovieGrid';
import NavBar from './components/NavBar/NavBar'
import RatingFilter from './components/RatingFilter/RatingFilter'
import axios from 'axios';
import Aux from './hoc/AuxHoc';

function MoviesApp() {
  const [rating, setRating] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    handleMoviesSearch();
  }, []);

  // Need to protect API Key before uploading
  const handleMoviesSearch = input => {
    let query;
    if(input === undefined || input === ""){
      query= `https://api.themoviedb.org/3/discover/movie?api_key=8fa4d18f25de3243e9c147cf34f534f2&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1`;
    } else {
      query=`https://api.themoviedb.org/3/search/movie?api_key=8fa4d18f25de3243e9c147cf34f534f2&language=en-US&query=${input}&page=1&sort_by=popularity.desc`
    }

    axios.get(query).then(res => {
      if (res.request.status === 200){ 
        const m = res.data.results; 
        setMovies(m);
        console.log(m);
      } else {
        setMovies([]);
      }
    });
  };

  const handleRating = rating => {
    setRating((prevStatus)=>{
      if(rating === prevStatus) {
        return 0;
      } else {
        return rating;
      }
    });
  };

  return (
    <Aux>
      <NavBar search={handleMoviesSearch}/>
      <RatingFilter clicked={handleRating} rating={rating}/>
      <MovieGrid movies={movies} rating={rating} />
      {/* <Footer /> */}
    </Aux>
    
  );
}

export default MoviesApp;
