import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index";
import {
    Redirect
  } from "react-router-dom";
import ScoreScreenCSS from './ScoreScreen.module.css'


function scoreHeader(score){
    if(Math.abs(score) === 1)
        return <h2>{score + " point"}</h2>
    else    
        return <h2>{score + " points"}</h2>
}

function countScore(setScore,allWords, selectedAnswers, correctAnswers){
    
    let correctCount = 0;
    let incorrectCount = 0;
    allWords.forEach((question) => {
    let foundCorrect = false;
    let foundSelected = false;
    if(correctAnswers.find(element => element === question) === question)
        foundCorrect = true;
    
    if(selectedAnswers.find(element => element === question) === question)
        foundSelected = true;

    if(foundCorrect === false && foundSelected === false){}
    else if(foundCorrect === true && foundSelected === false)
        incorrectCount++;
    else if(foundCorrect === false && foundSelected === true)
        incorrectCount++
    else if(foundCorrect === true && foundSelected === true)
        correctCount++;
    })

    setScore((2* correctCount) - incorrectCount)
}

const ScoreScreen = () => {

    const score = useSelector((state) => state.score);
    const login = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const {setScore} = bindActionCreators(actionCreators, dispatch)
    const selectedAnswers =  useSelector((state) => state.answers);
    const correctAnswers =  useSelector((state) => state.questions.good_words);
    const allWords =  useSelector((state) => state.questions.all_words);
    const ScoreHeader = () => scoreHeader(score)
  
    if(login === null){
        return <Redirect to='/' />
    }

    countScore(setScore,allWords,selectedAnswers,correctAnswers);


    return (
        <div className={ScoreScreenCSS.container}>
            <h1>{"Congratulation, " + login + "!"}</h1>
            <h1>Your score:</h1>
            <ScoreHeader/>
        </div>
    )
}

export default ScoreScreen
