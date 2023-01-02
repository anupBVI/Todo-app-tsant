import { BUY_ICECREAM } from "./IceCreamTypes"

let InitialState = {
    numOfIceCreams : 20
}

const iceCreamReducer = (state = InitialState , action:any) =>{
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCreams : state.numOfIceCreams - action.payload
        }
        default : return state
    }
}

export default iceCreamReducer