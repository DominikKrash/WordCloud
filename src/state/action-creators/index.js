export const setLogin = (login) => {
    return (dispatch) => {
        dispatch({
            type: "new",
            payload: login
        })
    }
}