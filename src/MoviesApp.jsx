import {React, useEffect} from 'react'

import MovieGrid from './components/MovieGrid/MovieGrid';
import NavBar from './components/NavBar/NavBar'
import RatingFilter from './components/RatingFilter/RatingFilter'
import Modal from './components/Modal/Modal';
import Aux from './hoc/AuxHoc';

import useMovieSearch from './hooks/useMovieSearch'
import useRatingFilter from './hooks/useRatingFilter'
import useMovieModal from './hooks/useMovieModal'

import './MoviesApp.css';


function MoviesApp() {

  const [movies, searchTerm, handleMoviesSearch] = useMovieSearch();
  const [rating, handleRatingFilter, getFilteredMovies] = useRatingFilter();
  const [modal, openModal, closeModal] = useMovieModal();
  
  useEffect(() => {
    if(searchTerm.length === 0) { handleRatingFilter(0); }
  },[searchTerm]);

  return (
    <Aux>
      <NavBar onSearch={handleMoviesSearch} searchTerm={searchTerm} />
      { searchTerm.length !== 0 ?
        <RatingFilter clicked={handleRatingFilter} rating={rating}/>
        : <h1 className="title">Most popular movies</h1>
      }
      <MovieGrid movies={getFilteredMovies(movies)} onClick={openModal}/>
      {/* <Footer /> */}
      <Modal visible={modal.visible} close={closeModal} movie={modal.data} />
    </Aux>
    
  );
}

export default MoviesApp;
