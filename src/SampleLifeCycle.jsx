import React, { useEffect, useState } from "react";

function SampleLifeCycle() {
    const [name, setname] = useState("star")

    useEffect(() => {
        console.log("Shalu");

        return () => {
            console.log("dead");
        }
    })

    const handlename = () => {
        setname("Earth")
    }

    return (
        <div>
            <h1>Sample Life Cycle</h1>

            <button onClick={handlename}>Check</button>

            {name}
        </div>
    )
}

export default SampleLifeCycle