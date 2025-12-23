import React, { useEffect, useState } from "react";

function LifeCycle() {
    const [count, setcount] = useState(0)

    const [name, setname] = useState("moon")

    useEffect(() => {
        console.log("Shalu");

        return () => {
            console.log("dead");
        }

    }, [name])

    const handleadd = () => {
        setcount(count + 1)
    }

    const handlename = () => {
        setname("sun")
    }


    return (
        <div>
            <h1>Hook - UseEffect</h1>
            <br />
            {count}
            <br />
            {name}
            <br />
            <button onClick={handleadd}>ad</button>

            <button onClick={handlename}>change</button>
        </div>
    )
}

export default LifeCycle