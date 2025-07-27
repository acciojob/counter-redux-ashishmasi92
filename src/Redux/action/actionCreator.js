import { INCREMENT,DECREMENT,RESET } from "./actionType.js"


export function increment(n=1){

    return {
type:INCREMENT,
payload:n
    }
}


export function decrement(n=1){
    return{
        type:DECREMENT,
        payload:n
    }

}


export function reset(){

    return {
        tpye:RESET
    }
}