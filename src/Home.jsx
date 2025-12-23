import React, { useState } from "react";
import DetailsOne from "./DetailsOne";


function Home() {

    const [data, setdata] = useState({
        name: "shalini",
        age: 25,
    });

    const [one, setone] = useState({
        phone: 6458225657
    });

    return (
        <div>
            <h1>Data 1</h1>

            <DetailsOne a={data} b={one} />
        </div>
    )
}

export default Home