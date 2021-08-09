const answersReducer = (state = [],action) => {
    let newArray = state.slice()
    switch(action.type){
        case "addAnswer":
            newArray.splice(0,0,action.payload)
            return newArray;
        case "removeAnswer":
            newArray.splice(state.indexOf(action.payload),1);
            return newArray;
        default:
            return state;
    }
};

export default answersReducer;