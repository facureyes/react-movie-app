import {useState, useEffect} from 'react';
import axios from 'axios';

const useMovieSearch = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
        handleMoviesSearch();   
    }
    ,[]);
        
    // If this page will be running on a server I will need to add a configure call to the api to
    // get escential things such as base URL for images and images sizes instead of hardcoding it
    const handleMoviesSearch = input => {
        setSearchTerm(input === undefined ? "" : input);
        let query;
        if(input === undefined || input === ""){
            query= `${process.env.REACT_APP_API_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1`;
        } else {
            query=`${process.env.REACT_APP_API_BASE_URL}search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${encodeURIComponent(input)}&page=1&sort_by=popularity.desc`
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

    return [
        movies,
        searchTerm,
        handleMoviesSearch
    ];
}

export default useMovieSearch;
