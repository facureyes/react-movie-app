import React from 'react';
import { createPortal } from "react-dom";
import './Modal.css'

const Modal = props => {
    return ( 
        props.visible ? createPortal(
            <div className="Modal" onClick={props.close}>
                <div className="modal-box" style={{'backgroundImage':`url(https://image.tmdb.org/t/p/w1280${props.movie.backdrop_path})`}}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <h1>{props.movie.title}</h1>
                        {props.movie.release_date.search(/\d{4}/) !== -1?
                            <h6 className="modal-info">{props.movie.release_date.match(/\d{4}/)[0]}</h6>
                            : null}
                        <h6 className="modal-info">{props.movie.vote_average}</h6>
                        <p>{props.movie.overview}</p>
                    </div>
                    
                </div>
            </div>,
            document.body, )
        : null
    );
}

export default Modal;