import { INCREMENT, DECREMENT, INCREASEBY5 } from "../actionsConstants/actionConstants";

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) =>{
  const {type} = action
  switch(type){
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case INCREASEBY5:
      return {
        count: state.count + 5
      };
    default: 
      return state
  }
}

export default counterReducer;

