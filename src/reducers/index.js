import { combineReducers } from 'redux'

const sendStateReducer = (state = {}, action) => {
   switch (action.type) {
       case 'SEND_STATE':
           return action.payload
       default:
           return state
   }
}



export default combineReducers({
    fizzBuzz: sendStateReducer
})