const ShimmerCard = () => {
    return(
          <div className="crd-body">
            
          </div>
    );
};

const Shimmer = () => {
    
    return (
        <div className="shimmer-container">
           
            { new Array(10).fill(0).map( (element, index) => {
                return <ShimmerCard  key = {index} /> ;
            }

            ) }
        </div>
    );
};


export default Shimmer ;