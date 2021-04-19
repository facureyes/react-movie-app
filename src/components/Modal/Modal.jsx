import React from 'react';
import { createPortal } from "react-dom";
import './Modal.css'

const Modal = props => {

    const convertMinsToHrsMins = (mins) => {
        let h = Math.floor(mins / 60);
        let m = mins % 60;
        m = m < 10 ? '0' + m : m;
        return `${h}:${m}`;
    }

    return ( 
        props.visible ? createPortal(
            <div className="Modal" onClick={props.close}>
                <div className="modal-box" style={{'backgroundImage':`url(${process.env.REACT_APP_API_BACKDROP_URL + props.movie.backdrop_path})`}}>
                    <div className="modal-background"></div>
                    <div className="modal-content">

                        <h1 className="modal-title">{props.movie.title.toUpperCase()}</h1>

                        <div className="modal-genres">
                            {props.movie.genres.map((el, idx) => {
                                return <h6 key={idx} className="modal-genre">{el.name}</h6>
                            })}
                        </div>

                        <div className="modal-specs">
                            {props.movie.release_date.search(/\d{4}/) !== -1?
                                <h6 className="modal-info">
                                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                    {" " + props.movie.release_date.match(/\d{4}/)[0]}
                                </h6>
                                : null}
                            <h6 className="modal-info">
                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                                {" " + convertMinsToHrsMins(parseInt(props.movie.runtime)) }
                            </h6>
                            <h6 className="modal-info">
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                {" " + props.movie.vote_average}
                            </h6>
                            
                        </div>
                        
                        <h4>{props.movie.tagline}</h4>
                        <p>{props.movie.overview}</p>
                    </div>
                </div>
            </div>,
            document.body, )
        : null
    );
}

export default Modal;