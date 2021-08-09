import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index";
import {
    Link,Redirect
  } from "react-router-dom";

function countScore(setScore, addScore,substractScore,allWords, selectedAnswers, correctAnswers){
    

    setScore(0);
    allWords.forEach((question) => {
    let foundCorrect = false;
    let foundSelected = false;

    if(correctAnswers.find(element => element === question) === question)
        foundCorrect = true;
    
    if(selectedAnswers.find(element => element === question) === question)
        foundSelected = true;

    if(foundCorrect === false && foundSelected === false){}
    else if(foundCorrect === true && foundSelected === false)
        substractScore(1);
    else if(foundCorrect === false && foundSelected === true)
        substractScore(1);
    else if(foundCorrect === true && foundSelected === true)
        addScore(2);
    })
}

const ScoreScreen = () => {

    const score = useSelector((state) => state.score);
    const login = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const {setScore, addScore,substractScore} = bindActionCreators(actionCreators, dispatch)
    const selectedAnswers =  useSelector((state) => state.answers);
    const correctAnswers =  useSelector((state) => state.questions.good_words);
    const allWords =  useSelector((state) => state.questions.all_words);
  
    if(login === null){
        return <Redirect to='/' />
    }

    countScore(setScore, addScore,substractScore,
        allWords,selectedAnswers,correctAnswers);

    return (
        <div>
            <h1>{"Congratulation, " + login + "!"}</h1>
            <h2>{score + " points"}</h2>
        </div>
    )
}

export default ScoreScreen
