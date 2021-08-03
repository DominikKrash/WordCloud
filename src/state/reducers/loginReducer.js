const reducer = (state = "guest",action) => {
    switch(action.type){
        case "new":
            return action.payload;
        default:
            return state;
    }
};

export default reducer;