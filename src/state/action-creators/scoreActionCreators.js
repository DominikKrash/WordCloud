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