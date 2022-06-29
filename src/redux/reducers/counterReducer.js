import { INCREMENT, DECREMENT } from "../actionsConstants/actionConstants";

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) =>{
  const {type} = action
  switch(type){
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state -1;
    default: 
      return state
  }
}

export default counterReducer;

