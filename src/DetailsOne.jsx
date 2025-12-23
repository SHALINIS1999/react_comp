import React from "react";

function DetailsOne({a,b}) {
    console.log(a);
    
    return(
        <div>
            <h1>Name - {a.name}</h1>
            <h1>Age - {a.age}</h1>
            <h1>Phone - {b.phone}</h1>
        </div>
    )
}

export default DetailsOne