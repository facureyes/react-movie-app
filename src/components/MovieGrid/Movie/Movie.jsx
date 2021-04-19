import Card from 'react-bootstrap/Card';
import './Movie.css'
import defaultPoster from '../../../assets/default_poster.png'

const Movie = (props) => {
    return (
        <div className="Movie" onClick={()=>{props.handleModal(props.movie)}}>
            <Card className="bg-dark text-white border-0" >
                { props.movie.poster_path ? 
                    <img alt={props.movie.title + "Poster"} src={process.env.REACT_APP_API_POSTER_URL + props.movie.poster_path} />
                    : <img alt={props.movie.title + "Poster"} src={defaultPoster} />
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
