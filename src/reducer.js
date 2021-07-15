// reducer
import {DECREASE, INCREASE, CLEAR_CART, REMOVE} from "./actions";

function reducer(state, action) {
    if (action.type === CLEAR_CART) {
        return {...state, cart: []}
    }
    if (action.type === DECREASE) {
       let tempCart = [];
       if (action.payload.amount ===1){
           // dc nu are match remove din cart
           tempCart = state.cart.filter((cartItem)=> cartItem.id !== action.payload.id);
       } else {
          tempCart = state.cart.map((cartItem)=>{
               // console.log(cartItem)
               if (cartItem.id === action.payload.id){
                   cartItem = {...cartItem, amount: cartItem.amount - 1}
               }
               return cartItem
           });
       }
       return {...state, cart: tempCart}
    }
    if (action.type === INCREASE) {
        let tempCart = state.cart.map((cartItem)=>{
            // console.log(cartItem)
            if (cartItem.id === action.payload.id){
                // return cartItem cu toate volorile(...spread operator) si adaug la amount!
                cartItem = {...cartItem, amount: cartItem.amount + 1}
            }
            return cartItem
        });
       return {...state, cart: tempCart}
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
