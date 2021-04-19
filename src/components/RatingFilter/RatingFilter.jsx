import './RatingFilter.css'

const RatingFilter = (props) => {

    return (
        <div className="RatingFilter">
            <h5>Filter by rating:</h5>
            <div>
                {[2, 4, 6, 8, 10].map((el)=>{
                    return (
                        <i  key={el}
                            onClick={()=> {props.clicked(el)}}    
                            className={`fa fa-2x fa-star rating-star`} 
                            aria-hidden="true" 
                            style={{'color':`${props.rating < el ? "rgb(114, 114, 114)" : "rgb(248, 220, 60)"}`, cursor: 'pointer'}}>
                        </i>
                    )
                })}
            </div>
        </div>
    );
}

export default RatingFilter;
