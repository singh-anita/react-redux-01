import { CHANGE_THEME } from "../actionsConstants/actionConstants";

const initialState = { isDarkThemeEnabled : false }

const themeReducer = (state = initialState, action) => {
   // console.log(state)
   const { type } = action;

   switch(type){
    case CHANGE_THEME: 
   //  return !state
    return {...state, isDarkThemeEnabled: !state.isDarkThemeEnabled};

    default: 
    return state
   }
  
}

export default themeReducer