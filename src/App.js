import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

import {createStore} from "redux";
import reducer from "./reducer";
import {Provider} from 'react-redux';
// initial
const initialStore = {
   cart : cartItems,
    total: 105,
    amount: 5
}

// store
const store = createStore(reducer, initialStore);


function App() {
    // cart setup

    return (
        <Provider store={store}>
            <Navbar />
            <CartContainer />
        </Provider>
    );
}

export default App;
// store.dispatch({type: DECREASE});
// // store.dispatch({type:RESET})
// store.dispatch({type: INCREASE});
// store.dispatch({type: INCREASE});
// store.dispatch({type: INCREASE});
// store.dispatch({type: INCREASE});
//
// console.log(store.getState());
