import React from 'react';
import Card from 'react-bootstrap/Card';
import './Movie.css'
import defaultPoster from './default_poster.png'

const Movie = (props) => {
    return (
        <div className="Movie" onClick={()=>{props.handleModal(props.movie)}}>
            <Card className="bg-dark text-white border-0" >
                { props.movie.poster_path ? 
                    <img src={"https://image.tmdb.org/t/p/w342/" + props.movie.poster_path} />
                    : <img src={defaultPoster} />
                }
                <div className="card-title-background"></div>
                <div className="card-title">
                    <h5>{props.movie.title}</h5>
                </div>
                <div className="card-button">
                    <h5>+ Details</h5>
                </div>
            </Card>
        </div>
    );
}

export default Movie;
