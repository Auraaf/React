import { useEffect, useState } from "react";
import { swiggy_menu_url } from "./constants";
import { RESTAURANT_TYPE_KEY } from "./constants";

const useRestaurantMenu = (resId) => {

    const [restMenu , setRestMenu] = useState(null) ;

    useEffect( () => {
        fetchData()
    } , []  ) ;

    const fetchData = async () => {
        const data = await fetch(swiggy_menu_url + resId) ;
        const datajson = await data.json() ;
        const restaurantData = datajson?.data?.cards?.map(x => x.card)?.
                             find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        setRestMenu(restaurantData) ;       
    } ;

    return restMenu ;
} ;

export default useRestaurantMenu ;