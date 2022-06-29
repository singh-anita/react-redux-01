import { connect } from "react-redux";
import { INCREMENT, DECREMENT } from "../redux/actionsConstants/actionConstants";

const Counter = (props) =>{
  console.log("Props in counter", props);
  return(
  <div>
      <p>Count : {props.count.count}</p>
      <button onClick={props.handleIncrementValue}> + </button>
      <button onClick={props.handleDecrementValue}> - </button>
  </div>
  )
}
const mapStateToProps = (state) =>{
  console.log('state',state)
  return {
    count: state.count.count,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    handleIncrementValue: () => {
     return dispatch( {type: INCREMENT})
    },
    handleDecrementValue: () => {
      return dispatch({ type: DECREMENT });
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
