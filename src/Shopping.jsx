import React, { useState } from "react";

function Shopping() {
    const [shoplist, setshoplist] = useState([])

    const handleshopapi = async () => {
        let shoppy = await fetch("https://api.escuelajs.co/api/v1/categories")

        let list = await shoppy.json()

         setshoplist(list) 
    }
    return (
        <div>
            <h1>My Shopping</h1>
            <button onClick={handleshopapi}>Click me</button>

            {shoplist.map((shop) =>
            (
                <div>
                    <h2>{shop.name}</h2>
                    <img height={200} width={200} src={shop.image} />
                </div>
            ))}
        </div>
    )
}

export default Shopping