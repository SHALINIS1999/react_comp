import React, { useState } from "react";
import "./name.css"

function Name() {
    const [name, setname] = useState("Priya")

    const handlechange = () => {
        setname("Swetha")
    }
    return (
        <>
            <h1 className="change">Name : {name}</h1>
            <button onClick={handlechange}>Change</button>
        </>
    )
}
// <> </> --> empty tag or react fragment tag
export default Name