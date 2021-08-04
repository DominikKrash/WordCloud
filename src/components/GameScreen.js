import React from 'react'
import GameScreenCSS from './GameScreen.module.css';
import {useSelector,useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index";
import Questions from './Question'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const GameScreen = () => {
    
    const dispatch = useDispatch();
    const {setQuestions} = bindActionCreators(actionCreators, dispatch);
    setQuestions();
    const questionSet = useSelector((state) => state.questions);
    
    const GameHeader = () => <h1>{questionSet.question}</h1>;

    return (
        <div className={GameScreenCSS.game_container}>
            <GameHeader/>
            <div className={GameScreenCSS.question_container}>
                
            </div>
        </div>
    )
}

export default GameScreen
