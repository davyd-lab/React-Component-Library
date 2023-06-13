import { produce } from "immer";
import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";


const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DEINCREMENT_COUNT = 'decrement';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
///whatever gets returned will be the new state

switch(action.type) {
  case INCREMENT_COUNT:
    state.count = state.count + 1;
    return;
  case DEINCREMENT_COUNT:
    state.count = state.count - 1;
    return;
  case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
  case ADD_VALUE_TO_COUNT:
    state.count = state.count + state.valueToAdd;
    state.valueToAdd = 0;
    return;
  default:
    return;
}

}

function CounterPage ( { initialCount }){
//  const [count, setCount] = useState(initialCount);
//  const [valueToAdd, setValueToAdd] = useState(0);

//defime reducer so we can see all pieces of state together, update state with dispatch/reducer()
const [state, dispatch] = useReducer(produce(reducer), {
  count: initialCount,
  valueToAdd: 0
});
 const handleIncrement = () => {
  dispatch({
    type: INCREMENT_COUNT
  });
 }
 const handleDecrement = () => {
  dispatch({
    type: DEINCREMENT_COUNT
  });
 }

 const handleChange = (event) => {
  const value = parseInt(event.target.value) || 0;

  dispatch({
    type: SET_VALUE_TO_ADD,
    payload: value
  });
 }
 const handleSubmit = (event) => {
  event.preventDefault();

  dispatch({
    type: ADD_VALUE_TO_COUNT,
  });

 // setCount(count + valueToAdd);
  //setValueToAdd(0);
 }
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
      <input value={state.valueToAdd || ""} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border-gray-300" />
      <Button>Add it!</Button>
      </form>
    </Panel>
  )

}
export default CounterPage;