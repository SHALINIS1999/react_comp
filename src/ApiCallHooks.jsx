import React, { useEffect, useState } from "react";

function ApiCallHooks() {
    const [apiproducts, setapiproducts] = useState([])

    const handlehooks = async () => {
        let data = await fetch("https://fakestoreapi.com/products")

        let products = await data.json()

        setapiproducts(products)
    }

    useEffect(() => {
        handlehooks()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <br />
            {apiproducts.map((test) =>
            (
                <div>
                    <h4>{test.title}</h4>
                    <h3>{test.price}</h3>
                    <img height={200} width={200} src={test.image} />
                </div>
            ))}


        </div>
    )
}

export default ApiCallHooks