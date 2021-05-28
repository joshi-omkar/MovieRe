import React from "react";
import "./movie.css"

const image_api = "https://image.tmdb.org/t/p/w1280"

const setVoteColor =(vote)=>{
    if(vote>=8)
        return "green";

    else if (vote >= 6)
        return "yellow";

    else
        return "red";
};

const Movie = ({title,image,overview,vote_avg}) =>{
    return(
    <div className ="movie">
        <div className ="movie-img">
            <img src={image_api + image} alt={title} />
        </div>

        <div className ="movie-title">
            <h3>{title}</h3>
            <span className={`tag ${setVoteColor(vote_avg)}`}>
                {vote_avg}
            </span>
        </div>
        
        <div className="movie-overview">
            <h4>Overview:</h4>
            <p>{overview}</p>
        </div>
    </div>
    )}

export default Movie;