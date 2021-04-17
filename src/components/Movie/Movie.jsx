import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Movie.css'

const Movie = (props) => {
    return (
        <div className="Movie">
            
            {/* <div class="card" style={{'backgroundImage':`url(${"https://image.tmdb.org/t/p/w342/" + props.movie.poster_path})`}}>
                <div class="content" >
                    <h2 class="title">{props.movie.title}</h2>
                    <p class="copy">{`Rating: ${props.movie.vote_average}/10`}</p>
                    <button class="btn">Details</button>
                </div>
            </div> */}

            {/* <div class="box" style={{'backgroundImage':`url(${"https://image.tmdb.org/t/p/w342/" + props.movie.poster_path})`}}>
                <h1>{props.movie.title}</h1>

            </div> */}




            <Card bg='dark' text='white' style={{'margin':'1rem 0'}}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w342/" + props.movie.poster_path} />
                <Card.Body>
                    <Card.Title style={{'height':'4rem'}}>{props.movie.title}</Card.Title>
                    <Button variant="outline-light">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Movie;
