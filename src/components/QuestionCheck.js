import React from 'react';
import {useSelector} from "react-redux";
import  QuestionCheckCSS from './QuestionCheck.module.css'

function setColor(isCorrect){
    if(isCorrect === 0)
        return null;
    else if(isCorrect === 1)
        return QuestionCheckCSS.good_color;
    else if(isCorrect === -1)
       return  QuestionCheckCSS.bad_color;
}
function setAlertMessage(isCorrect){
    if(isCorrect === 0)
        return <span></span>;
    else if(isCorrect === 1)
        return <span className={QuestionCheckCSS.good_color}>Good</span>;
    else if(isCorrect === -1)
        return <span className={QuestionCheckCSS.bad_color}>Bad</span>;

}

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

    const AlertMessage = () => setAlertMessage(isCorrect);
    const color = setColor(isCorrect);

    return (
        <div className={QuestionCheckCSS.question_container}>
            <p className={color}>{question}</p>
            <AlertMessage/>
        </div>
    )
}

export default QuestionCheck
