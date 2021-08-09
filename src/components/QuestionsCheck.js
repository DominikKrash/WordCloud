import React from 'react'
import QuestionCheck from './QuestionCheck';

const QuestionsChecked = ({questions}) => {

    return (
        <div>
            {questions.map((question) => (
                <QuestionCheck key={question} question={question}/>
            ))}
        </div>
    )
}

export default QuestionsChecked
