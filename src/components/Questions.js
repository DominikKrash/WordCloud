import React from 'react'
import  Question  from './Question'
import QuestionCheck from './QuestionCheck'
import  QuestionsCSS from './Questions.module.css'
const Questions = ({questions, check}) => {

    if(check === 0){
    return (
        <div className={QuestionsCSS.questions_container}>
            {questions.map((question) => (
                <Question key={question} question={question}/>
            ))}
        </div>
    )} 
    else if(check === 1){
    return (
        <div>
            {questions.map((question) => (
                <QuestionCheck key={question} question={question}/>
            ))}
        </div>
    )}
}

export default Questions
