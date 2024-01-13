
// import restaurantList from "../utils/mockData" ;

import { useState } from "react";
import ResCard  from "./ResCard";
import restaurantList from "../utils/mockData";
const Body = () => {

    const [restList , setRestaurantList] = useState(restaurantList) ;

    return (
        <div className="body">
            <div className="Search">Search</div> 
             {console.log("length" + restaurantList.length) }
            <button className="filter-res" 
            onClick={  () => {
                const newList =  restList.filter( (res) => res.data.avgRating > 4 ) ;
                setRestaurantList(newList) ;
                console.log("length after  click : " + newList.length) ;
                }} 
            >
                Filter
            </button>
            
            <div className="restaurant-list">
                {
                    restList.map ( (restaurant) => (
                        <ResCard  key = {restaurant.data.id} restData = {restaurant} />
                    ))
                }
            </div>

        </div>
    ) ;
} ;

export default Body ;