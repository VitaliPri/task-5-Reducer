import {useReducer } from 'react'; //we getting analog of Redux inside of React
//{useReducer} "creates" for us reducer, in order to use it we sent reducer method and initialstate (value) to useReducer(); useReducer(reducer, intialstate) then const state will be equal count: 0 and we will be changes this later
const initialState = {//and we sent it to useReducer()
    count: 0,
    numberToChangeBy: 1
};

const reducer = (state, action) =>  {//Before we stored data inside of component <App/> by help of useState. Downside is only available inside of that component. But with reducer we declare it outside of component that is why we can use it anywhere, in any component. I mean we can use data in any component with help of useState but it make more complecated logic but with reducer its super easy. Reducer is clean function, that receive State and Action that refresh current State. 
    switch(action.type) {
        case 'increment': {
          return {...state, count: parseInt(state.count,10)+parseInt(state.numberToChangeBy,10)}
         }
        case 'decrement': {
             return {...state, count: parseInt(state.count,10)-parseInt(state.numberToChangeBy,10)}
        }
        case 'count':
            return {...state, count: state.count};
        case 'numberToChangeBy':
            return {...state, numberToChangeBy: state.numberToChangeBy}
        case 'change': {
            return {...state, numberToChangeBy: action.value}
        }
        default: //If typo in type: like increeeement it throw an error.
            throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //dispatch method() for refresh the state. Inside of dispatch() we throw object action. This object action must have property key - type. dispatch({ type: "increment" })} we will increment with help of dispatch

    return (<div className="App">
    <pre className="rainbow box text-center"> {state.count} </pre>
    <div className="flex gap center">
        <button className="button-box" onClick={() => dispatch({type: 'increment'})}><span className="huge">+</span>Increment by {state.numberToChangeBy}</button>
        <button className="button-box" onClick={() => dispatch({type: 'decrement'})}><span className="huge">-</span>Decrement by {state.numberToChangeBy}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box"  onChange={(e) => dispatch({type: 'change', value: e.target.value})} type="number" value={state.numberToChangeBy} name="number" id="number" /></p>
  </div>);
}

export default Counter;


