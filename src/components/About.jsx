import User from "./User";
import UserClass from "./UserClass";
import React  from "react";

class About extends React.Component{

    constructor(props){
        super(props) ;
        console.log("Parent constructor")
    } ;

    componentDidMount(){
        console.log("Parent component did mount")
    } ;

    render(){
        console.log("Parent render")
        return (
            <div className="about">
                <h1> About page</h1>
                <h3> Learning React</h3>
                <User name = {'Azeez function'}/>
                {/* react bind this two child component, then first renders both of them then call component did mount
                of each one by one */}
                <UserClass name = {'First'} />
                
            </div>
        ) ;

    } ;
} ;

/**
 * Parent constructor
 * Parent render
 *         2 child life cycle.
 *         Render Phase
 *          -First Child constructor
 *          -First Child render
 * 
 *          -Second Child constructor
 *          -Second Child render
 * 
 
          Commit phase
 *          <Dom Updated - In single batch>  
*           -First component did mount
            -Second component did mount

   Parent component did mount
 *          
 *          
 */

export default About ;