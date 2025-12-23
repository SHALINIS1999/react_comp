import React, { useEffect, useReducer, useRef, useState } from "react";

const counterReducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return { count: state.count + 1 };
    }
    if (action.type === "DECREMENT") {
        return { count: state.count - 1 };
    }
};

export default function HooksExtra() {
    const [count, setcount] = useState(0);

    let inputref = useRef();


    // usememo example
    // const[data1, setdata1] = useState(2)
    // const[data2, setdata2] = useState(4)
    // const heavycalculation = useMemo((a,b)=>
    // {
    //     console.log(a*b);

    // },[data1,data2])
    // heavycalculation(2,4)


    // usecallback example
    // const[data1, setdata1] = useState(2)
    // const[data2, setdata2] = useState(4)
    // const heavycalculation = useCallback((a,b)=>
    // {
    //     console.log(a*b);

    // },[data1,data2])
    // heavycalculation(2,4)


    function heavycalculation()
    {
        console.log("heavycalculation");
        return 2*2;
    }
    console.log(heavycalculation());

    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    useEffect(() => {
        inputref.current.focus();

    }, []);

    return (
        <div>
            <h1>Hello</h1>
            {state.count}

            <input ref={inputref} />

            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
}

