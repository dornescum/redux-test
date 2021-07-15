// reducer
import {DECREASE, INCREASE, CLEAR_CART, REMOVE} from "./actions";

function reducer(state, action) {
    if (action.type === CLEAR_CART) {
        return {...state, cart: []}
    }
    if (action.type === DECREASE) {
        console.log('decrease')
    }
    if (action.type === INCREASE) {
        console.log('increase')
    }
    if (action.type === REMOVE) {
        // console.log(action.payload.id)
        return {...state, cart: state.cart.filter((cartItem)=> cartItem.id !== action.payload.id)}
    }

    return state;
}

export default reducer;
// console.log({state, actions})
// if (actions.type === DECREASE) {
//     // NU face asta niciodata!
//     // state.count = state.count - 1
//     return {...state, count: state.count -1}
// }
// if (actions.type === INCREASE) {
//     return {...state, count: state.count +1}
// }
// //  if (actions.type === RESET) {
// //     return {...state, count: 0}
// // }
