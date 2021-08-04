import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import questionsReducer from "./questionsReducer";

const reducers = combineReducers({
    login: loginReducer,
    questions:questionsReducer
});

export default reducers