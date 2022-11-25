const Reducer = (state, action) =>{
    switch(action.type){
        case "DISABLE" : {
            return state = true
        }
        default : {
            return state;
        }
    }
}

export default Reducer;