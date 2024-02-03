import User from "./User";
import UserClass from "./UserClass";
const About = () => {

    return (
        <div className="about">
            <h1> About page</h1>
            <h3> Learning React</h3>
            <User name = {'Azeez function'}/>

            <UserClass name = {'Azeez Class'} />
        </div>
    ) ;
} ;

export default About ;