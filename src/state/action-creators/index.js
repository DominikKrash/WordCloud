export const setLogin = (login) => {
    return (dispatch) => {
        dispatch({
            type: "new",
            payload: login
        })
    }
}
export const setQuestions = () => {
    return (dispatch) => {
        dispatch({
            type: "new",
            payload: null,
        })
    }
}