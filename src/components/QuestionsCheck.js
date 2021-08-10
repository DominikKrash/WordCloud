import React from 'react'
import QuestionCheck from './QuestionCheck';
import  QuestionsCSS from './Questions.module.css'
const QuestionsChecked = ({questions}) => {

    return (
        <div className={QuestionsCSS.questions_container}>
            {questions.map((question) => (
                <QuestionCheck key={question} question={question}/>
            ))}
        </div>
    )
}

export default QuestionsChecked
