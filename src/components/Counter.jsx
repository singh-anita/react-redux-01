import { connect } from "react-redux";
import { INCREMENT, DECREMENT, INCREASEBY5 } from "../redux/actionsConstants/actionConstants";

const Counter = (props) =>{
  // console.log("Props in counter", props.count);
  return(
  <div>
      <h2>Count : {props.count.count}</h2>
      <button onClick={props.handleIncrementValue}> + </button>
      <button onClick={props.handleIncreaseValue}>Increase By 5</button>
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
    handleIncreaseValue: () => {
      return dispatch({ type: INCREASEBY5 })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
