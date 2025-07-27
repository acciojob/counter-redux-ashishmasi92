import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Redux/action/actionCreator.js";

const CounterApp = () => {

    let x = useSelector(x => x)
    console.log(x);

    let dispatch = useDispatch()


    return (
        <>

            <h1 data-testid="counter-value" >{x.count}</h1>
            <div>
                <button data-testid="increment-btn" onClick={() => {
                    dispatch(increment())
                }} >increment</button>
                <button data-testid="decrement-btn" onClick={() => {
                    dispatch(decrement())
                }} >decrement</button>

            </div>

        </>
    )
}

export default CounterApp