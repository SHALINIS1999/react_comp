import React, { useState } from "react";
import "./detailformtwo.css"

function DetailFormTwo() {
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [ishide, setishide] = useState(false);

  const handlename = (e) => setname(e.target.value);
  const handlemobile = (e) => setmobile(e.target.value);
  const handleemail = (e) => setemail(e.target.value);

  const handlehide = () => {
    setishide(true);
  };

  return (
    <div>
      {ishide ? (
        <div className="form-container">
          <h2> Your Form has Submitted</h2>
     
          <div className="form-row"><b> NAME: </b>{name}</div>
        
          <div className="form-row"><b>MOBILE: </b>{mobile}</div>

          <div className="form-row"><b>EMAIL: </b>{email}</div>
        </div>
      ) : (
        <form>

          <div className="form-container">
            <h1 style={{textAlign:"center"}}>Form</h1>

            <div className="form-row">
               <label>FIRSTNAME</label> 
                <input type="text" onChange={handlename} placeholder="Enter Your Name" />
            </div>

            <div className="form-row">
                <label>MOBILE </label> 
                <input type="number" onChange={handlemobile} placeholder="Enter Your mobile" />
            </div>

            <div className="form-row">
                <label>EMAIL </label>
                <input type="email" onChange={handleemail} placeholder="Enter Your email" />
            </div>

            <br />
            <br />
            <button className="button" onClick={handlehide}>Submit</button>
          </div>
        </form>

      )}
    </div>
  );
}

export default DetailFormTwo;
