import React from "react";
import ReactDOM from "react-dom/client";

/*
 *  Header
        - logo
        - nav bar
    Body 
        - Search
        - ReastaurantContainer
           - Restaurant Card
                - Img
                - Name of res ,Star Rating, Cuisine, etc.
                - 
            
    Footer
        - Copyright
        - Links
        - Address
        - Contact
 */


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src ="https://images.template.net/wp-content/uploads/2016/11/07105828/fast-food-logo-designs-feature-images.jpg" />
            </div>
            <div className="nav-items">  
                <ul>
                    <li>Home</li>
                    <li>About us</li>   
                    <li>Cart</li>            
                </ul>
            </div>
        </div>
        
    )
}
const ResCard = () => {
    return (
        <div className="card">
            <img className="res-logo" 
                 alt = "res-log"  
                 src = "https://slurrp.club/wp-content/uploads/2021/10/DSC_0037-2-1024x738.jpg"
            />
            <h3>Meghana Foods</h3>
            <h3></h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div> 
            <div className="restaurant-list">
                <ResCard/>
                <ResCard/>
                <ResCard/>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}


var root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<AppLayout/>);