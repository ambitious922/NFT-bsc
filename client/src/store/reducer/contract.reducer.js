import {
    GOLF_CONTRACT,
} from '../../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state={}, action) => {
    switch(action.type) {
        case GOLF_CONTRACT:
            console.log(action)
            return {
                ...state,
                golfPunksContract: action.payload.golfPunksContract,
                price: action.payload.price, 
                gasAmount: action.payload.gasAmount
            }
        default: 
            return state;
    }
}