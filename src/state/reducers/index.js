import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import questionsReducer from "./questionsReducer";
import answersReducer from "./answersReducer"
import scoreReducer from "./scoreReducer"

const reducers = combineReducers({
    login: loginReducer,
    questions:questionsReducer,
    answers:answersReducer,
    score:scoreReducer
});

export default reducers