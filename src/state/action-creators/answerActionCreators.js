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
