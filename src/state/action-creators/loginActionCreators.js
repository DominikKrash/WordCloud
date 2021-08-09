export const newLogin = (login) => {
    return (dispatch) => {
        dispatch({
            type: "newLogin",
            payload: login
        })
    }
}