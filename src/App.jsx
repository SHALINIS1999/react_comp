import React, { useState } from "react";
import Accord from "./Accord";
import ApiCall from "./ApiCall";
import ApiCallHooks from "./ApiCallHooks";
import ApiCallTwo from "./ApiCallTwo";
import Badge from "./Badge";
import CountClass from "./CountClass";
import Counter from "./Counter";
import DetailForm from "./DetailForm";
import DetailFormTwo from "./DetailFormTwo";
import ExamApi from "./ExamApi";
import Food from "./Food";
import FormState from "./FormState";
import Home from "./Home";
import HooksExtra from "./HooksExtra";
import LifeCycle from "./LifeCycle";
import Movies from "./Movies";
import Name from "./Name";
import ReactHookForm from "./ReactHookForm";
import ReactHookFormTwo from "./ReactHookFormTwo";
import ReactNav from "./ReactNav";
import ReactRouterNav from "./ReactRouterNav";
import SampleApiCall from "./SampleApiCall";
import SampleLifeCycle from "./SampleLifeCycle";
import Shopping from "./Shopping";
import TodoList from "./TodoList";
import TodoListTwo from "./TodoListTwo";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route, Link } from "react-router";
import SomeComponent from "./UseNav";


function App() {

  // const[close, setclose] = useState(true)

  // const handleclose = () =>
  // {
  //   setclose(false)
  // }

  return (
    // <BrowserRouter>
    <div>
      {/* <Accord/> */}
      {/* <ApiCall/> */}
      {/* <ApiCallHooks/> */}
      {/* <ApiCallTwo/> */}
      {/* <Badge/> */}
      {/* <CountClass/> */}
      {/* <Counter/> */}
      {/* <DetailForm/> */}
      <DetailFormTwo/>
      {/* <ExamApi/> */}
      {/* <Food/> */}
      {/* <FormState/> */}
      {/* <Home/> */}
      {/* <HooksExtra/> */}
      {/* <LifeCycle/> */}
      {/* <Movies/> */}
      {/* <Name/> */}
      {/* <ReactHookForm/> */}
      {/* <ReactHookFormTwo/> */}
      {/* <ReactNav/> */}
      {/* <ReactRouterNav/> */}
      {/* <SampleApiCall/> */}
      {/* <SampleLifeCycle/> */}
      {/* <Shopping/> */}
      {/* <TodoList/> */}
      {/* <TodoListTwo/> */}
  

      {/* <h1>Shalini</h1>
    <h2>Swetha</h2>
    <p>Iam learning Reactjs</p> */}


       {/* movies_props_example
     <Movies moviename = {"Amaran"} rating = {5}/>
     <Movies moviename = {"Don"} rating = {4}/>
     <Movies moviename = {"Madharaasi"} rating = {4.5}/>  */}


      {/* {close ? <LifeCycle/> : ""}
<br/>
<br/>
      <button onClick={handleclose}>Close</button>     */}
      
{/* <nav>
  <Link to="/" >Home</Link>
  <Link to="/form" >form</Link>
  <Link to="/react-form" >react form</Link>

</nav>
      
<Routes>
<Route path="/" element={<ReactHookFormTwo/>}/>
<Route path="/form" element={<DetailForm/>}/>
<Route path="/react-form" element={<SomeComponent/>}/>
</Routes> */}


      {/* <nav className="navbar">
      <h2 className="logo">MySite</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Movie</Link></li>
        <li><Link to="/contact">About</Link></li>
      </ul>
    </nav>

      <Routes>
        <Route path="/" element={<FormState/>} />
        <Route path="/about" element={<SampleApiCall/>} />
        <Route path="/contact" element={<SampleLifeCycle/>} />
      </Routes> */}

    </div>
     /* </BrowserRouter> */
  )
}

export default App