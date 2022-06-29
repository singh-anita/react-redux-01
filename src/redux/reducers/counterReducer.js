import { INCREMENT, DECREMENT, INCREASE_BY_5, INCREASE_BY_VALUE } from "../actionsConstants/actionConstants";

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) =>{
  const {type, payload} = action
  console.log("payload", payload)
  switch(type){
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case INCREASE_BY_5:
      return {
        count: state.count + 5
      };
    case INCREASE_BY_VALUE:
      return{
        count: state.count + parseInt(payload)
      }
    default: 
      return state
  }
}

export default counterReducer;

