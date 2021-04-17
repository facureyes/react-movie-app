import React from 'react';
import Card from 'react-bootstrap/Card';
import './Movie.css'

const Movie = (props) => {
    return (
        <div className="Movie" onClick={()=>{alert(props.movie.vote_average)}}>
            <Card className="bg-dark text-white border-0" >
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w342/" + props.movie.poster_path} />
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
