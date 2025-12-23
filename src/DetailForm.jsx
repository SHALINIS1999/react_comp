import React, { useState } from "react";

function DetailForm() {
    const [name, setname] = useState("")
    const [mobile, setmobile] = useState("")
    const [email, setemail] = useState("")

    const [ishide, setishide] = useState(false)

    const handlename = (e) => {
        console.log(e.target.value);

        setname(e.target.value)
    }

    const handlemobile = (e) => {
        setmobile(e.target.value)
    }

    const handleemail = (e) => {
        setemail(e.target.value)
    }

    const handlehide = () => {
        setishide(true)
    }

    return (
        <div>
            <h1>Details Form</h1>

            <form>
                <label>First Name :  </label>
                <input onChange={handlename} placeholder="Enter your name" />
                <br />
                <br />
                <label>Mobile :  </label>
                <input type="number" onChange={handlemobile} placeholder="Enter your mobile" />
                <br />
                <br />
                <label>Email :  </label>
                <input type="email" onChange={handleemail} placeholder="Enter your email" />
                <br />
                <br />
                <button onClick={handlehide}>Submit</button>
            </form>

            {ishide ?
                <div>
                    <h1>{name}</h1>

                    <h2>{mobile}</h2>

                    <h2>{email}</h2>

                </div>
                : ""
            }

        </div>
    )
}

export default DetailForm