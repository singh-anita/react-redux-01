import react,{ useState} from "react"
import { connect } from "react-redux";
import {
  INCREMENT,
  DECREMENT,
  INCREASE_BY_5,
  INCREASE_BY_VALUE,
} from "../redux/actionsConstants/actionConstants";
// const [incrementAmount, setIncrementAmount] = useState('2')
const Counter = (props) => {
  // console.log("Props in counter", props.count);
  const [incrementNumber, setIncrementNumber] = useState(null)
  return (
    <div>
      <h1>Count : {props.count.count}</h1>
      <button onClick={props.handleIncrementValue} style={{margin: "0 12px"}}> + </button>
      <button onClick={props.handleIncreaseValue} style={{margin: "0 12px"}}>Increase By 5</button>
      <input
        aria-label="Set increment amount"
        value={incrementNumber}
        onChange={(e) => setIncrementNumber(e.target.value)}
      />
      <button onClick={() => props.handleIncreaseGivenValue(incrementNumber)} style={{margin: "0 12px"}}>Add {incrementNumber} Amount</button>
      <button onClick={props.handleDecrementValue} style={{margin: "0 12px"}}> - </button>
    </div>
  );
};

//connect -- HOC higer order component
// function -- input component --  another component
// connect -- input Counter --- output Counter connected to store and redux

const mapStateToProps = (state) => {
  // console.log('state',state.count)
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    handleIncrementValue: () => {
      return dispatch({ type: INCREMENT });
    },
    handleDecrementValue: () => {
      return dispatch({ type: DECREMENT });
    },
    handleIncreaseValue: () => {
      return dispatch({ type: INCREASE_BY_5 });
    },
    handleIncreaseGivenValue: (incrementNumber) => {
      return dispatch({ type: INCREASE_BY_VALUE, payload: incrementNumber });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
