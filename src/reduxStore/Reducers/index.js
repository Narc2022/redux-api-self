import { combineReducers } from "redux";
import { userReducer } from "./reducers";

const reducers = combineReducers({
    allUsers:userReducer,
});

export default reducers;