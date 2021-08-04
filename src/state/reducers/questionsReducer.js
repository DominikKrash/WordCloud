import {questionsData} from '../../data/questions';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const reducer = (state = questionsData[0],action) => {
    switch(action.type){
        case "new":
            return questionsData[getRandomInt(0,questionsData.length)];
        default:
            return state;
    }
};

export default reducer;