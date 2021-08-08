const scoreReducer = (state = 0,action) => {
    switch(action.type){
        case "addScore":
            console.log(state + " dodajemy " +action.payload)
            return state + 2;
        case "substractScore":
            console.log(state + " odejmujemy " +action.payload)
            return state - 1; 
        default:
            return state;
    }
};

export default scoreReducer;