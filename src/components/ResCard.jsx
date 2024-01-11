import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
    /* destucturing assignment */
    const {restData} = props ; 

    return (
        <div className="card">
            <img className="res-logo" 
                 alt = "res-log"  
                 src =  { CDN_URL + restData.data.cloudinaryImageId }
            />
            
            <h3>{restData.data.name}</h3>
            <h3>{restData.data.cuisines}</h3>
              
        </div>
    ) ;
} ;

export default ResCard ;