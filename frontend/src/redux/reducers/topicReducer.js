const initialState = {}

const topicReducer = (state = initialState, action) => {
    switch (action.type){
        case "CREATE_TOPIC":
            return action.payload;
        default:
            return state;
    }
}


export default topicReducer