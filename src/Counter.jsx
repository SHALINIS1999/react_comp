import React, { useContext, useState } from "react";
import Food from "./Food";
import { CounterContext } from "./CounterContext";

function Counter() {
    let { count, increment } = useContext(CounterContext)

    return (
        <div>
            <h1>Counter - {count}</h1>
            <button onClick={increment}>Change</button>
        </div>
    )
}

export default Counter