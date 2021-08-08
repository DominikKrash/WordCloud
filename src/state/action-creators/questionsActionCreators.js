export const newQuestions = () => {
    return (dispatch) => {
        dispatch({
            type: "newQuestions",
            payload: null
        })
    }
}