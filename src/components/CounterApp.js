import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Redux/action/actionCreator.js";

const CounterApp = () => {

    let x = useSelector(x => x)
    console.log(x);

    let dispatch = useDispatch()


    return (
        <>

            <h1>{x.count}</h1>
            <div>
                <button onClick={() => {
                    dispatch(increment())
                }} >increment</button>
                <button onClick={() => {
                    dispatch(decrement())
                }} >decrement</button>

            </div>

        </>
    )
}

export default CounterApp