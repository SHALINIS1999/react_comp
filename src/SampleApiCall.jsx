import React, { useState } from "react";

function SampleApiCall() {
    const [sampleapi, setsampleapi] = useState([])

    const handlesampleapi = async () => {
        let apicall = await fetch("https://dummyjson.com/products/category/furniture")

        let samplecall = await apicall.json()

        setsampleapi(samplecall.products)
    }
    return (
        <div>
            <h1>Sample Api Call</h1>

            <button onClick={handlesampleapi}>Click me</button>
            <br />
            <br />
            {sampleapi.map((api) => (
                <div>
                    <img height={200} width={200} src={api.thumbnail} />
                    <h2>Title: {api.title}</h2>
                    <p><b>Description: </b>{api.description}</p>
                    <h3>Price : {api.price}</h3>
                    <h5>Rating : {api.rating}</h5>
                </div>
            ))}
        </div>
    )
}

export default SampleApiCall