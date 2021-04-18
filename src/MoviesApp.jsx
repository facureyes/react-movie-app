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
  const [modal, setModal] = useState({
    visible: false,
    data: {}
  });
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    handleMoviesSearch();
  }, []);

  // If this page will be running on a server I will need to add a configure call to the api to
  // get escential things such as base URL for images and images sizes instead of hardcoding it
  // Need to protect API Key before uploading - Not doing so in this prototype
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
      <NavBar search={handleMoviesSearch}/>
      <Modal
        visible={modal.visible}
        close={closeModal}
        effect="fadeInUp"
        movie={modal.data}
      >
      {/* <h1>Title</h1> */}
        {/* <div>
            <h1>{modal.data.title}</h1>
            <p>Some Contents</p>
            <a href="javascript:void(0);" onClick={() => closeModal()}>Close</a>
        </div> */}
      </Modal>
      <RatingFilter clicked={handleRating} rating={rating}/>
      <MovieGrid movies={movies} rating={rating} onClick={openModal}/>
      {/* <Footer /> */}
    </Aux>
    
  );
}

export default MoviesApp;
