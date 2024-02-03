
// import restaurantList from "../utils/mockData" ;

import { useState  , useEffect} from "react";
import ResCard  from "./ResCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
//{} used here for destucturing the object.
import { swiggy_api_URL  , swiggy_api_URL_main} from "../utils/constants"; // name should be same to property need to be extrtacted.
import { Link } from "react-router-dom";


const Body = () => {

    // it's called array destucturing.
    const [restList , setRestaurantList] = useState([]) ;  // order matters value return by useState will be assigned in the given order
    const [searchText , setSearchText ] = useState("") ;
    const [filteredRestaurants , setFilteredRestaurants ] = useState([]);
    useEffect( () => {
        getRestaurants();
    } , []  ) ;

    // when local state variable i.e. searchText get chnaged react triggeres the reconciliation cycle
    // which re renderes the whole component.

    async function getRestaurants() {
        // handle the error using try... catch
        try {   
          const response = await fetch(swiggy_api_URL_main);
          
          const json = await response.json() ;
          
          console.log(json);
          // initialize checkJsonData() function to check Swiggy Restaurant data
          async function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    
              // initialize checkData for Swiggy Restaurant data
              //optioonal chaining.
              //we'll keepon checking for restaurants card, if we got restaurant card we'll return that card.
              //using optional chaining.
              let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
              // if checkData is not undefined then return it 
              //if restuarant not present it'll keep on giving undefined.
              if (checkData !== undefined) {
                return checkData;
              }
            }
          }

          
    
          // call the checkJsonData() function which return Swiggy Restaurant data
          const resData = await checkJsonData(json);
          // update the state variable restaurants with Swiggy API data
          console.log(resData) ;
          setRestaurantList(resData);
          setFilteredRestaurants(resData);
        } catch (error) {
          console.log(error);
        }
    }


    searchRestaurant = () => { 
      setFilteredRestaurants(restList.filter( (resData) => resData.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()   )   )) ;
    }


  
    return restList.length === 0 ? <Shimmer /> : (
        <div className="body">

            <div className="search-area" >
                <div className="Search">
                    <input type="text" className="search-box" value = {searchText} onChange={ (e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button className="search-btn"  text = {searchText}  onClick = {searchRestaurant}   >Search</button>
                </div> 
                {console.log("length" + restaurantList.length) }

                <button className="filter-res" 
                onClick={  () => {
                    const newList =  restList.filter( (res) => res.data.avgRating > 4 ) ;
                    setRestaurantList(newList) ;
                    }} 
                >
                    Filter
                </button>
             
            </div>
            
            <div className="restaurant-list">
                {
                    filteredRestaurants.map ( (restaurant , index)  => {
                        
                        return (
                            /** Here we're setting value in resId */
                            <Link to = {"/restaurant/" + restaurant.info.id }  key = {restaurant.info.id} >
                            <ResCard  restData =  {restaurant.info} />
                            </Link>
                            
                        )
                    } )
                }
            </div>
        </div>
    ) ;
} ;

export default Body ;