import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props) ;
        this.state ={
            count : 0 ,
        } ;
    }
    render(){
        const {name} = this.props;
        //object destucturing of state variable.
        const {count} = this.state;
       return (
        <div>
            <div className="user-card">
                <h5>count : {count}</h5>
                <h3>Name : {name}</h3>
                <h4>Sde-1</h4>
            </div>
        </div>
       ) ; 
    }
};

export default UserClass ;