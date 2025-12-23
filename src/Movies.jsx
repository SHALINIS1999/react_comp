import React from "react";

function Movies(props)
{
    return(
        <div>
            <h1>{props.moviename}</h1>
            <h4>{props.rating}</h4>
        </div>
    )
}

export default Movies