import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Redux/action/actionCreator.js";

const CounterApp = () => {

    let {count} = useSelector(x => x)
    console.log(count);

    let dispatch = useDispatch()


    return (
        <>

            <div data-testid="counter-value">{count}</div>
            <div>
                <button data-testid="increment-btn" onClick={() => {
                    dispatch(increment())
                }} >+</button>
                <button data-testid="decrement-btn" onClick={() => {
                    dispatch(decrement())
                }} >-</button>

            </div>

        </>
    )
}

export default CounterApp