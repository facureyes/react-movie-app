import Movie from './Movie/Movie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './MovieGrid.css'


const MovieGrid = props => {    
    return (
        <Container fluid className="MovieGrid">
            <Row>
                {props.movies.length === 0 ? 
                    <h1>No movies were found :(</h1> 
                    : props.movies.map((movie, idx) => (
                        <Col xl={3} lg={4} md={6} sm={12} key={idx}>
                            <Movie movie={movie} key={idx} handleModal={props.onClick}/>
                        </Col>
                ))}
            </Row>
        </Container>
    );
}

export default MovieGrid;
