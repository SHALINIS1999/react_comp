import { useForm } from "react-hook-form"

import "./detailformtwo.css"

function ReactHookFormTwo() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }
  return (
    <div>


      <div class="container">
        <h1 className="form">Form</h1>

        <div class="row">
          <div class="col-25">
            <b><label>FIRSTNAME </label></b> </div>
          <div class="col-75">
            <input type="text" {...register('name', { required: true, maxLength: 30 })} placeholder="enter" />
            {errors.name && errors.name.type === "required" && <span>This is required</span>}
            {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <b><label>MOBILE </label></b> </div>
          <div class="col-75">
            <input type="number" {...register('mobile')} placeholder="enter" />
            {errors.name && errors.name.type === "required" && <span>This is required</span>}
            {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <b><label>EMAIL </label></b> </div>
          <div class="col-75">
            <input type="email" {...register('email', {
              required: 'This is a required question',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Enter a valid email'
              }
            })} placeholder="enter" />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}


            {/* {errors.name && errors.name.type === "required" && <span>This is required</span>}
      {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span> } */}
          </div>
        </div>

        <br />
        <br />
        <button className="but" onClick={handleSubmit(onSubmit)}>Submit</button>
      </div>
    </div>

  )
}

export default ReactHookFormTwo
