import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index";
import IntroScreenCSS from './IntroScreen.module.css';
import {
    Link
  } from "react-router-dom";
const IntroScreen = () => {
    const {newLogin, newQuestions} = bindActionCreators(actionCreators, useDispatch())
    const login = useSelector((state) => state.login)

    const PlayLink = () => 
    (login ? <Link className={IntroScreenCSS.button} to="/game" onClick={() => newQuestions()} >Play</Link> :
    <Link className={IntroScreenCSS.button_not_active} to="/">Enter login</Link>);


    return (
        <div className={IntroScreenCSS.intro_container}>
            <h1>Wordcloud game</h1>
            <input type="text" className={IntroScreenCSS.effect}
            onChange={(event) =>newLogin(event.target.value)}
            placeholder="Input your login" value={login ?? ""}/>
            <PlayLink />
        </div>
    )
}


export default IntroScreen
