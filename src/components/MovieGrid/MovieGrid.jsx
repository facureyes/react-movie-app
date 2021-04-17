import React from 'react';
import Movie from '../Movie/Movie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MovieGrid.css'


const MovieGrid = props => {
    const movies = props.rating === 0? props.movies : props.movies.filter(el => el.vote_average > props.rating-2 && el.vote_average <= props.rating);
    
    return (
        <Container fluid className="MovieGrid">
            <Row>
            {movies.length === 0 ? <h1>No movies were found :(</h1> : 
            movies.map((movie, idx) => (
                <Col lg={3} md={4} sm={6}>
                    <Movie movie={movie} key={idx} />
                </Col>
            ))}
            </Row>
        </Container>
    );
}

export default MovieGrid;
