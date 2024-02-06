import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props) ;

        this.state = {
            name : "Dummy",
            id : 0 ,
        };
    };

    async componentDidMount(){

            const data = await fetch("https://api.github.com/users/Auraaf") ;
            const jsonData = await data.json() ;
            console.log(jsonData) ;
            console.log(this.componentDidMount);

            this.setState({
                name : jsonData.login,
                id   : jsonData.id,
            });

    };

    render(){

        //object destucturing of state variable.

       return (
        <div>
            <div className="user-card">
               
                <h3>Name : {this.state.name}</h3>
                <h4>id : {this.state.id}</h4>
            </div>
        </div>
       ) ; 
    }
};

export default UserClass ;