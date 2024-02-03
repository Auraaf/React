import { useState , useEffect } from "react";
import { swiggy_menu_url , RESTAURANT_TYPE_KEY } from "../utils/constants";
import { useParams } from "react-router-dom";


const RestMenu = () => {

    const [restaurant, setRestaurant] = useState(null) ;
    const [menu, setMenu] = useState([]) ;
    useEffect(() => {
        fetchMenu() 
    } , []) ;

    //object destucturing
    const {resId}= useParams() ;

    // await is used to pause the execution till promise get settled, as fetch return promise.
    // also .json() return promise that's to parse data into json, so it's important to ensure the 
    // execution of next line won't happen till parsing is complete.
    async function fetchMenu() {
        try{
            const data = await fetch (swiggy_menu_url + resId) ; 
            const datajson = await data.json() ; 
            console.log(datajson) ;
            console.log(datajson?.data?.cards) ;
            const restaurantData = datajson?.data?.cards?.map(x => x.card)?.
                             find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
                             console.log(restaurantData) ;

            setRestaurant(restaurantData);
        }
        catch(err){
            console.log(err);
        }
          
    }  ;

    return(
        <div className="rest-menu">
            <h1>
            {restaurant?.name}
            </h1>
        </div>
    );
};

export default RestMenu ;