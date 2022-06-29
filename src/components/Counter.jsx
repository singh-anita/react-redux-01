import { connect } from "react-redux";
import { INCREMENT, DECREMENT } from "../redux/actionsConstants/actionConstants";

const Counter = (props) =>{
  console.log("Props in counter", props.count);
  return(
  <div>
      <button onClick={props.handleIncrementValue}> + </button>
      <span>Count : {props.count.count}</span>
      <button onClick={props.handleDecrementValue}> - </button>
  </div>
  )
}

//connect -- HOC higer order component
// function -- input component --  another component
// connect -- input Counter --- output Counter connected to store and redux

const mapStateToProps = (state) =>{
  // console.log('state',state.count)
  return {
    count: state.count
  };
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
