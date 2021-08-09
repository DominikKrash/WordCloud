const scoreReducer = (state = 0,action) => {
    switch(action.type){
        case "addScore":
            return state + action.payload;
        case "substractScore":
            return state - action.payload; 
        case "setScore":
            return action.payload;
        default:
            return state;
    }
};

export default scoreReducer;