import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index";
import IntroScreenCSS from './IntroScreen.module.css';
import {
    Link
  } from "react-router-dom";
const IntroScreen = () => {
    const dispatch = useDispatch();
    const {newLogin, newQuestions} = bindActionCreators(actionCreators, dispatch)
    const score = useSelector((state) => state.score);
    console.log(score);
    return (
        <div className={IntroScreenCSS.intro_container}>
            <h1>Wordcloud game</h1>
            <input type="text" className={IntroScreenCSS.effect}
            onChange={(event) =>newLogin(event.target.value)}
            placeholder="Input your login"/>
            <Link className={IntroScreenCSS.button} to="/game" onClick={() => newQuestions()}>Play</Link>
        </div>
    )
}


export default IntroScreen
