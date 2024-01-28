import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const Header = () => {

    //add stateVariable and function, 
    const [btnValue, setBtnValue] = useState('login') ;

    changeBtnValue =() => {
        if(btnValue == 'login')
        setBtnValue('logout');
        else
        setBtnValue('login') ;
    }
    cardValue = () => {

    }

    /*useEffect( () => {
 
    } , [] )    
    ---> basic syntax of useEffect . 2 arguments - ()=> {} callback function : mandatory , [] dependecy array.

    *** if no dependecy array is there use will be called everytime component render.
    *** if dependecy array is empty => [], useEffect is called on initial render.
    *** if dependecy array contain some dependecy for eg [btnValue], then useEffect will be only when
         dependecy changes.  */

    useEffect( ()=> { console.log("useEffect being called") }  , [btnValue] ) ; 


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src =  {LOGO_URL}/>
            </div>
            <div className="nav-items">  
                <ul>
                    <li>Home</li>
                    <li>About us</li>   
                    <li>Cart</li>   
                    <button className="login" onClick={changeBtnValue}> {btnValue} </button>         
                </ul>
                
            </div>
        </div>
        
    ) ;
};

export default Header ;