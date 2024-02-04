import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props) ;
        this.state ={
            count : 0 ,
            count1 : 1 
        } ;
    }
    render(){
        const {name} = this.props;
        //object destucturing of state variable.
        const {count , count1} = this.state;
       return (
        <div>
            <div className="user-card">
                <button onClick={() => {

                        this.setState({
                            count : this.state.count + 1
                        })
                }}   > Update count</button>
                 <button onClick={() => {
                    this.setState({
                        count : this.state.count + 1 ,
                        count1 : this.state.count1 + 1 ,
                    });
                 }}> Update count and count1</button>
                <h5>count : {count}</h5>
                <h5>count1 : {count1}</h5>

                <h3>Name : {name}</h3>
                <h4>Sde-1</h4>
            </div>
        </div>
       ) ; 
    }
};

export default UserClass ;