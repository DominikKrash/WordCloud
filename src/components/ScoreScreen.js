import React from 'react'
import {useSelector} from "react-redux";

const ScoreScreen = () => {

    const score = useSelector((state) => state.score);
    const login = useSelector((state) => state.login);

    return (
        <div>
            <h1>{"Congratulation, " + login + "!"}</h1>
            <h2>{score + " points"}</h2>
        </div>
    )
}

export default ScoreScreen
