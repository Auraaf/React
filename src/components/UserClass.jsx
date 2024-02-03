import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props) ;
    }
    render(){
        const {name} = this.props;
       return (
        <div>
            <div className="user-card">
                <h3>Name : {name}</h3>
                <h4>Sde-1</h4>
            </div>
        </div>
       ) ; 
    }
};

export default UserClass ;