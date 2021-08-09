export const addScore = (score) => {
    return (dispatch) => {
        dispatch({
            type: "addScore",
            payload: score
        })
    }
}

export const substractScore = (score) => {
    return (dispatch) => {
        dispatch({
            type: "substractScore",
            payload: score
        })
    }
}

export const setScore = (score) => {
    return (dispatch) => {
        dispatch({
            type: "setScore",
            payload: score
        })
    }
}