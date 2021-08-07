import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import questionsReducer from "./questionsReducer";
import answersReducer from "./answersReducer"

const reducers = combineReducers({
    login: loginReducer,
    questions:questionsReducer,
    answers:answersReducer
});

export default reducers