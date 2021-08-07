const loginReducer = (state = "guest",action) => {
    switch(action.type){
        case "newLogin":
            return action.payload;
        default:
            return state;
    }
};

export default loginReducer;