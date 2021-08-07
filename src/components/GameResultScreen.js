import React from 'react'
import GameResultScreenCSS from './GameResultScreen.module.css'
import {useSelector} from "react-redux";
import {
    Link
  } from "react-router-dom";
import Questions from './Questions'



const GameResultScreen = () => {


    const questionSet = useSelector((state) => state.questions);
    const GameHeader = () => <h1>{questionSet.question}</h1>;

    return (
        <div className={GameResultScreenCSS.game_container}>
            <GameHeader/>
        </div>
    )
}

export default GameResultScreen
