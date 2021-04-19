import {useState} from 'react';

const useRatingFilter = () => {
    const [rating, setRating] = useState(0);

    const handleRatingFilter = rating => {
        setRating((prevStatus)=>{
          if(rating === prevStatus) {
            return 0;
          } else {
            return rating;
          }
        });
      };

    const getFilteredMovies = movies => {
      return rating === 0? movies : movies.filter(el => el.vote_average > rating-2 && el.vote_average <= rating);
    }

    return [ 
      rating,
      handleRatingFilter,
      getFilteredMovies
    ];
}

export default useRatingFilter;
