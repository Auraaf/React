import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {

    //add stateVariable and function, 
    const [btnValue, setBtnValue] = useState('login') ;

    changeBtnValue =() => {
        setBtnValue('logout');
    }
    cardValue = () => {

    }


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