import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './Movie.css'

const Movie = (props) => {
    return (
        <div className={classes.Movie}>
            {/* <Card style={{ width: '12rem' }}> */}
            <Card bg='dark' text='white' style={{'margin':'1rem 0'}}>
                <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w342/" + props.movie.poster_path} />
                <Card.Body>
                    <Card.Title style={{'height':'4rem'}}>{props.movie.title}</Card.Title>
                    {/* <Card.Text>
                    {props.movie.overview}
                    </Card.Text> */}
                    <Button variant="outline-light">Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Movie;
