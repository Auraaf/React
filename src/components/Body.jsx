
// import restaurantList from "../utils/mockData" ;

import { useState  , useEffect} from "react";
import ResCard  from "./ResCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
//{} used here for destucturing the object.
import { swiggy_api_URL } from "../utils/constants"; // name should be same to property need to be extrtacted.


const Body = () => {

    // it's called array destucturing.
    const [restList , setRestaurantList] = useState([]) ;  // order matters value return by useState will be assigned in the given order
    const [searchText , setSearchText ] = useState("") ;
    const [filteredRestaurants , setFilteredRestaurants ] = useState([]);
    useEffect( () => {
        getRestaurants();
    } , []  ) ;

    // when loacl state variable i.e. searchText get chnaged react triggeres the reconciliation cycle
    // which re renderes the whole component.

    async function getRestaurants() {
        // handle the error using try... catch
        try {   
          const response = await fetch(swiggy_api_URL);
          
          const json = await response.json() ;
          
          // initialize checkJsonData() function to check Swiggy Restaurant data
          async function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    
              // initialize checkData for Swiggy Restaurant data
              //optioonal chaining.
              let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
              // if checkData is not undefined then return it
              if (checkData !== undefined) {
                return checkData;
              }
            }
          }

          
    
          // call the checkJsonData() function which return Swiggy Restaurant data
          const resData = await checkJsonData(json);
          // update the state variable restaurants with Swiggy API data
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

                            
                            <ResCard key = {restaurant.info.id}  restData =  {restaurant.info} />
                        )
                    } )
                }
            </div>
        </div>
    ) ;
} ;

export default Body ;