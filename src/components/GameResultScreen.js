import React from 'react'
import GameResultScreenCSS from './GameResultScreen.module.css'
import {useSelector} from "react-redux";
import {
    Link
  } from "react-router-dom";
import QuestionsCheck from './QuestionsCheck'



const GameResultScreen = () => {


    const questionSet = useSelector((state) => state.questions);
    const GameHeader = () => <h1>{questionSet.question}</h1>;

    return (
        <div className={GameResultScreenCSS.game_container}>
            <GameHeader/>
            <QuestionsCheck questions={questionSet.all_words} correctAnswers={questionSet.good_words} />
            <Link className={GameResultScreenCSS.button} to="/score">Check score</Link>
        </div>
    )
}

export default GameResultScreen
