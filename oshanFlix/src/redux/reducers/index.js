import { combineReducers } from "redux";
import controller from "./controller";

const rootReducer = combineReducers({
  controller: controller,
});

export default rootReducer;
