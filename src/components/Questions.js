import React from 'react'
import  Question  from './Question'
import  QuestionsCSS from './Questions.module.css'
const Questions = (questions) => {
    return (
        <div className={QuestionsCSS.questions_container}>
            {questions.questions.map((question) => (
                <Question key={question} question={question}/>
            ))}
        </div>
    )
}

export default Questions
