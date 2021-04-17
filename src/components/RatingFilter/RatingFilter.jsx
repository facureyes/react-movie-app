import React from 'react';
import './RatingFilter.css'

const RatingFilter = (props) => {

    const ratings = [2, 4, 6, 8, 10];
    return (
        <div className="RatingFilter">
            {console.log(ratings, props.rating)}
            {ratings.map((el)=>{
                return (
                            <i onClick={()=> {props.clicked(el)}} class={`fa fa-star${props.rating < el ? "-o" : ""}`} aria-hidden="true" style={{'color':'yellow'}}></i>
                        )
            })}
        </div>
    );
}

export default RatingFilter;
