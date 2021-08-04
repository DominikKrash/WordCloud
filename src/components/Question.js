import React from 'react'

const Question = ({question}) => {
    let state = false;

    return (
        <button>
            {question}
        </button>
    )
}

export default Question
