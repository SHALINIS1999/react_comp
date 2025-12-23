import React, { useState } from "react";

function ExamApi() {

    const [apidata, setapidata] = useState([])

    const handleapi = async () => {
        let products = await fetch("https://fakestoreapi.com/products")

        let data = await products.json()

        setapidata(data)
    }

    return (
        <div>
            <h1>Exam Api</h1>

            <button onClick={handleapi}>Click</button>

            {apidata.map((da) => (
                <div>
                    <img height={200} width={200} src={da.image} />
                    <h5>{da.title}</h5>
                    <h3>{da.price}</h3>

                </div>

            ))}
        </div>
    )
}

export default ExamApi