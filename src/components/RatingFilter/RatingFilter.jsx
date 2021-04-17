import React from 'react';
import './RatingFilter.css'

const RatingFilter = (props) => {

    const ratings = [2, 4, 6, 8, 10];
    return (
        <div className="RatingFilter">
            <h5>Filter by rating:</h5>
            <div>
            {ratings.map((el)=>{
                return (
                            <i onClick={()=> {props.clicked(el)}} class={`fa fa-star${props.rating < el ? "-o" : ""} rating-star`} aria-hidden="true" style={{'color':'yellow'}}></i>
                        )
            })}
            </div>
            
        </div>
    );
}

export default RatingFilter;
