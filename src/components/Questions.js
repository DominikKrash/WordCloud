import React from 'react'
import  Question  from './Question'
import  QuestionsCSS from './Questions.module.css'
import {useSelector} from 'react-redux'
const Questions = ({questions}) => {

    const answers = useSelector((state) => state.answers);

    return (
        <div className={QuestionsCSS.questions_container}>
            {questions.map((question) => (
                <Question key={question} question={question}
                 isSelected={answers.includes(question)}/>
            ))}
        </div>
    )
    
}

export default Questions
