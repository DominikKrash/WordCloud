import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../state/index";
import IntroScreenCSS from './IntroScreen.module.css'

const IntroScreen = () => {
    
    const login = useSelector((state) => state.login); 
    
    const dispatch = useDispatch();
    const {setLogin} = bindActionCreators(actionCreators, dispatch)

    return (
        <div className={IntroScreenCSS.intro_container}>
            <h1>Wordcloud game</h1>
            <input type="text" className={IntroScreenCSS.effect}
            onChange={(event) =>setLogin(event.target.value)}
            placeholder="Input your login"/>
            <button className={IntroScreenCSS.button}
            onClick={() => (console.log(login))}>Play</button>
        </div>
    )
}


export default IntroScreen
