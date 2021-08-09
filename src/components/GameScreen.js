import React from 'react'
import GameScreenCSS from './GameScreen.module.css';
import {useSelector} from "react-redux";
import {
    Link,Redirect
  } from "react-router-dom";
import Questions from './Questions'

const GameScreen = () => {
    
    const login = useSelector((state) => state.login);
    const questionSet = useSelector((state) => state.questions);
    if(login === null){
        return <Redirect to='/' />
    }
    const GameHeader = () => <h1>{questionSet.question}</h1>;

    return (
        <div className={GameScreenCSS.game_container}>
            <GameHeader/>
            <Questions questions={questionSet.all_words}/>
            <Link className={GameScreenCSS.button} to="/game-check">Check answers</Link>
        </div>
    )
}

export default GameScreen
