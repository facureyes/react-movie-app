import {React, useState, useEffect} from 'react'
import './MoviesApp.css';
import MovieGrid from './components/MovieGrid/MovieGrid';
import NavBar from './components/NavBar/NavBar'
import RatingFilter from './components/RatingFilter/RatingFilter'
import Modal from './components/Modal/Modal';
import axios from 'axios';
import Aux from './hoc/AuxHoc';

function MoviesApp() {
  const [rating, setRating] = useState(0);
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState({
    visible: false,
    data: {}
  });
  

  useEffect(() => {
    handleMoviesSearch();
  }, []);

  // If this page will be running on a server I will need to add a configure call to the api to
  // get escential things such as base URL for images and images sizes instead of hardcoding it
  // Need to protect API Key before uploading - Not doing so in this prototype
  const handleMoviesSearch = input => {
    let query;
    setSearchTerm(input === undefined ? "" : input);
    if(input === undefined || input === ""){
      setRating(0);
      query= `https://api.themoviedb.org/3/discover/movie?api_key=8fa4d18f25de3243e9c147cf34f534f2&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1`;
    } else {
      query=`https://api.themoviedb.org/3/search/movie?api_key=8fa4d18f25de3243e9c147cf34f534f2&language=en-US&query=${encodeURIComponent(input)}&page=1&sort_by=popularity.desc`
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

  const openModal = mov => {
    let query = `https://api.themoviedb.org/3/movie/${mov.id}?api_key=8fa4d18f25de3243e9c147cf34f534f2&language=en-US`;
    
    axios.get(query).then(res => {
      if (res.request.status === 200){ 
        const newModal = {
          visible: true,
          data: {...res.data}
        };
        console.log(res);
        setModal(newModal);
      } else {
        const newModal = {
          visible: true,
          data: {...mov}
        };
        setModal(newModal);
      }
    });
  }

const closeModal = () => {
  setModal(prevStatus => ({...prevStatus, visible: false}));
}

  return (
    <Aux>
      <NavBar onSearch={handleMoviesSearch} searchTerm={searchTerm} />
      <Modal visible={modal.visible} close={closeModal} movie={modal.data} > </Modal>
      { searchTerm.length !== 0 ?
        <RatingFilter clicked={handleRating} rating={rating}/>
        : <h1 className="title">Most popular movies</h1>
      }
      <MovieGrid movies={movies} rating={rating} onClick={openModal}/>
      {/* <Footer /> */}
    </Aux>
    
  );
}

export default MoviesApp;
