import { useState , useEffect } from "react";
import { swiggy_menu_url , RESTAURANT_TYPE_KEY } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu" ;

const RestMenu = () => {

    //object destucturing
    const {resId}= useParams() ;
    restaurant = useRestaurantMenu(resId) ;
    console.log(restaurant);

    // await is used to pause the execution till promise get settled, as fetch return promise.
    // also .json() return promise that's to parse data into json, so it's important to ensure the 
    // execution of next line won't happen till parsing is complete.
    
    return(
        <div className="rest-menu">
            <h1>
            {restaurant?.name}
            </h1>
        </div>
    );
};

export default RestMenu ;