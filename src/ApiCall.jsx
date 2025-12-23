import React, { useState } from "react";

function ApiCall() {
    const [productlist, setproductlist] = useState([])

    const handleapi = async () => {
        let products = await fetch("https://fakestoreapi.com/products")

        let datas = await products.json()

        { setproductlist(datas) }
    }

    return (
        <div>
            <h1>Welcome to Our Products</h1>
            <button onClick={handleapi}>ApiCall</button>

            {productlist.map((pro) =>
            (
                <div>
                    <img height={200} width={200} src={pro.image} />
                    <h2>{pro.title}</h2>
                    <h5>{pro.price}</h5>
                </div>
            ))}

        </div>
    )
}

export default ApiCall