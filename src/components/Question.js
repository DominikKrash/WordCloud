import React from 'react'
import { useState } from 'react'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index";
import  QuestionsCSS from './Questions.module.css'

const Question = ({ question }) => {
    const [isSelected, setSelect] = useState(false);
    const dispatch = useDispatch();
    const {addAnswer,removeAnswer} = bindActionCreators(actionCreators, dispatch)
    return (
        <button onClick={() => {
            !isSelected ? addAnswer(question) : removeAnswer(question);
            setSelect(!isSelected);
        }} className={isSelected ? 
        QuestionsCSS.question_button_active : QuestionsCSS.question_button}>
            {question}</button>

        
    )
}

export default Question
