import React from 'react';
import {useSelector} from "react-redux";

const QuestionCheck = ({ question}) => {
    const correctAnswers = useSelector((state) => state.questions.good_words);
    const selectedAnswers = useSelector((state) => state.answers);
    

    let isCorrect = 0;
    let foundCorrect = false;
    let foundSelected = false;

    if(correctAnswers.find(element => element === question) === question)
        foundCorrect = true;
    
    if(selectedAnswers.find(element => element === question) === question)
        foundSelected = true;

    if(foundCorrect === false && foundSelected === false)
        isCorrect = 0; 
    else if(foundCorrect === true && foundSelected === false)
        isCorrect = -1;
    else if(foundCorrect === false && foundSelected === true)
        isCorrect = -1;
    else if(foundCorrect === true && foundSelected === true)
        isCorrect = 1;

    return (
        <div>
            <p>{question + isCorrect}</p>
        </div>
    )
}

export default QuestionCheck
