import React from "react";
import { useForm } from "react-hook-form"
import cart from "./assets/cartoon.webp"

function ReactHookForm()
{
    const {register, handleSubmit} = useForm()

  const onsubmit = (data)=>
  {
    console.log(data); 
  }
    return(
        <div>
            <h1 style={{color: "blue", backgroundColor: "pink", textAlign: "center"}}>Hook Form</h1>

            <img height={200} width={200} src ={cart}/>
          <br/>
          <br/>
            <input {...register("name")}placeholder="enter"/>
            <br/>
            <br/>
            <input {...register("mobile")}placeholder="enter"/>
            <br/>
            <br/>
            <input {...register("email")}placeholder="enter"/>
            <br/>
            <br/>
            <button onClick={handleSubmit(onsubmit)}>Submit</button>
        </div>
    )
}

export default ReactHookForm
