import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartSlice";
import cartReducers from "./cartSlice" ;
import cartSlice from "./cartSlice";
//it'll have big reducer, we will add reducer for each slice in here.

const appStore = configureStore({
    reducer : {
        cart: cartReducers,
    },
}) ;
export default appStore ;