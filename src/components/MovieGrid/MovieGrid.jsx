import React from 'react';
import Movie from '../Movie/Movie';
import Aux from '../../hoc/AuxHoc'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const MovieGrid = props => {
    const movies = props.rating === 0? props.movies : props.movies.filter(el => el.vote_average > props.rating-2 && el.vote_average <= props.rating);
    
    return (
        <Aux>
            <Container fluid style={{'padding': '1.5rem 0', 'width':'80%'}}>
            <Row>
            {movies.length === 0 ? <h1 style={{'color':'#CCC'}}>No movies were found.</h1> : 
            movies.map((movie, idx) => (
                <Col lg={3} md={4} sm={6}>
                    <Movie movie={movie} key={idx} />
                </Col>
            ))}
            </Row>
                
            </Container>
        </Aux>
    );
}

export default MovieGrid;
