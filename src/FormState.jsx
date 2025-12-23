import React, { useState } from "react";

function FormState() {

    const [name, setname] = useState("")

    const handlename = (e) => {
        setname(e.target.value)
    }
    return (
        <div>
            <input onChange={handlename} placeholder="Enter your name" />
            <br />
            {name}
        </div>
    )
}

export default FormState