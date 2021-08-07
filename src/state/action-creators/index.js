export const setLogin = (login) => {
    return (dispatch) => {
        dispatch({
            type: "newLogin",
            payload: login
        })
    }
}

export const setQuestions = () => {
    return (dispatch) => {
        dispatch({
            type: "newQuestions",
            payload: null
        })
    }
}

export const addAnswer = (word) =>{
    return (dispatch) => {
        dispatch({
            type:"addAnswer",
            payload:word
        })
    }
}

export const removeAnswer = (word) =>{
    return (dispatch) => {
        dispatch({
            type:"removeAnswer",
            payload:word
        })
    }
}
