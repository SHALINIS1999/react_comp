import React, { useState } from "react";
import "./name.css"

function Name() {
    const [name, setname] = useState("Priya")

    const change = () => {
        setname("Swetha")
    }
    return (
        <>
            <h1 className="change">Name : {name}</h1>
            <button onClick={change}>Change</button>
        </>
    )
}
// <> </> --> empty tag or react fragment tag
export default Name