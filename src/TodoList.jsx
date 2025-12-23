import React, { useEffect, useState } from 'react'
import "./todolist.css"
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

export default function TodoList() {

    const [inputtodo, setinputtodo] = useState("")

    const [tododata, settododata] = useState([])

    const handleinput = (event) => {
        setinputtodo(event.target.value);
    };

    useEffect(() => {
        handleapiget();
    }, []);

    const handleapiget = async () => {

        let todolist = await axios.get("http://localhost:3000/todoList");

        // let data = await todolist.json(); --> no need in axios

        settododata(todolist.data)
    };

    const handleadd = async () => {
        let body = {
            task: inputtodo
        }

        let senddata = await axios.post("http://localhost:3000/todoList", body);

        setinputtodo("")

        handleapiget()
    }

    const handledelete = async (id) => {

        let deletedata = await axios.delete("http://localhost:3000/todoList/" + id);

        handleapiget()

    }

    const handleedit = async (data) => {

        let promptdata = prompt("Edit your data", data.task)

        let body = {
            id: data.id,
            task: promptdata
        }
        let editdata = await axios.put("http://localhost:3000/todoList/" + data.id, body);

        handleapiget()
    };

    return (
        <div>
            <h2>My Todo List</h2>

            <input value={inputtodo} onChange={handleinput} placeholder='Enter your todo' />

            <button className='btn btn-primary ms-5 mb-2' onClick={handleadd}>Submit</button>

            <div>
                <ol>

                    {/* either key or index,, in array index is unique--> for the warning in console */}
                    {/* {tododata.map((da,index) => (
                <li key={index}> */}
                    {tododata.map((da) => (
                        <li key={da.id}>
                            {da.task} -
                            <MdDelete className='delicon' size={17} onClick={() => handledelete(da.id)} />
                            <FaEdit className='editicon' size={17} onClick={() => handleedit(da)} />
                        </li>
                    ))}

                </ol>
            </div>
        </div>
    )
}

