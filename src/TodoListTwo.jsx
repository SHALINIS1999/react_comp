import React, { useEffect, useState } from "react";
import axios from "axios";

function TodoListTwo() {

    const [inputtodo, setinputtodo] = useState("")

    const [apidata, setapidata] = useState([])

    useEffect(() => {
        handleapiget()
    }, [])

    const handleinput = (event) => {

        setinputtodo(event.target.value)
    }

    const handleapiget = async () => {

        let todolist = await axios.get("http://localhost:3000/todoList")

        setapidata(todolist.data)

    }

    const handleadd = async () => {

        let body = {
            task: inputtodo
        }

        let senddata = await axios.post("http://localhost:3000/todoList", body)

        setinputtodo("")

        handleapiget()
    }

    const handledelete = async (id) => {

        let deletedata = await axios.delete("http://localhost:3000/todoList/" + id)

        handleapiget()
    }

    const handleedit = async (data) => {

        let promptdata = prompt("Edit your data", data.task)

        let body = {

            id: data.id,
            task: promptdata
        }

        let editdata = await axios.put("http://localhost:3000/todoList/" + data.id, body)

        handleapiget()
    }

    return (
        <div>
            <h1>My Todo list</h1>

            <input value={inputtodo} onChange={handleinput} placeholder="Enter your todo" />

            <button className="btn btn-primary ms-5 mb-4" onClick={handleadd}>Submit</button>
            <div>

                <ol>
                    {apidata.map((da) => (

                        <li key={da.id}>
                            {da.task} -
                            <button onClick={() => handledelete(da.id)} className="btn btn-danger ms-3 mb-2">Delete</button>
                            <button className="btn btn-info ms-3 mb-2" onClick={() => handleedit(da)}>Edit</button>
                        </li>
                    ))}

                </ol>
            </div>
        </div>
    )
}

export default TodoListTwo