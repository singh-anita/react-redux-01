import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import counterReducer from "./counterReducer";

///incomplete mapping for diff reducres pending
const rootReducer = combineReducers({
  theme: themeReducer,
  count: counterReducer,
})

export default rootReducer;