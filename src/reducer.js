// reducer
import {DECREASE, INCREASE, CLEAR_CART} from "./actions";

function reducer(state, action) {
    if (action.type === CLEAR_CART){
        return {...state,cart: []}
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
