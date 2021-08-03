import React from 'react'
import PropTypes from 'prop-types'

const IntroScreen = ({setLogin}) => {

    return (
        <div>
            <h1>Wordcloud game</h1>
            <input type="text" value=""/>
            <button onClick={() => setLogin("notGuest")}>Play</button>
        </div>
    )
}

IntroScreen.propTypes = {
    setLogin: PropTypes.func.isRequired
}

export default IntroScreen
