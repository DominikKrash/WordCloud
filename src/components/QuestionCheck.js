import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index";

const QuestionCheck = ({ question }) => {

    const dispatch = useDispatch();
    const {addScore, substractScore} = bindActionCreators(actionCreators, dispatch)

    const correctAnswers = useSelector((state) => state.questions.good_words);
    const selectedAnswers = useSelector((state) => state.answers);
    

    let isCorrect = 0;
    let foundCorrect = false;
    let foundSelected = false;

    if(correctAnswers.find(element => element === question) === question){ 
        foundCorrect = true;
    }
    
    if(selectedAnswers.find(element => element === question) === question){ 
        foundSelected = true;
    }
    if(foundCorrect === false && foundSelected === false){
        console.log("zer0");
        isCorrect = 0; 
    } 
    else if(foundCorrect === true && foundSelected === false){
        isCorrect = -1;
        substractScore(1);
        console.log("minus1")
    }
    else if(foundCorrect === false && foundSelected === true){
        isCorrect = -1;
        substractScore(1);
        console.log("minus1")
    }
    else if(foundCorrect === true && foundSelected === true){
        isCorrect = 1;
        addScore(2);
        console.log("plus2")
    }
    return (
        <div>
            <p>{question + isCorrect}</p>
        </div>
    )
}

export default QuestionCheck
