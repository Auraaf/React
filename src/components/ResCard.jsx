import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
    /* destucturing assignment */
    const {restData} = props ; 

    
    return (
        <div className="card">
            <img className="res-logo" 
                 alt = "res-log"  
                 src =  {CDN_URL +   ( restData?.cloudinaryImageId ? restData?.cloudinaryImageId : "bz9zkh2aqywjhpankb07" )  }
            />
            
            <h3>{restData?.name}</h3>
            <h3>{restData?.cuisines}</h3>
              
        </div>
    ) ;
} ;

export default ResCard ;