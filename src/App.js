import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { CDN_URL } from "./utils/constants";
import { RouterProvider, createBrowserRouter , Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
/*
 *  Header
        - logo
        - nav bar
    Body 
        - Search
        - ReastaurantContainer
           - Restaurant Card
                - Img
                - Name of res ,Star Rating, Cuisine, etc.
                - 
            
    Footer
        - Copyright
        - Links
        - Address
        - Contact
 */





const restObj = {
    type : "restaurant" ,
    data: {
    type: "F",
    id: "74453",
    name: "Domino's Pizza",
    uuid: "87727dbd-7f2b-4857-9763-359624165845",
    city: "21",
    area: "Athwa",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    cuisines: ["Pizzas"],
    tags: [],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 45,
    minDeliveryTime: 45,
    maxDeliveryTime: 45,
    slaString: "45 MINS",
    lastMileTravel: 0,
    slugs: {
      restaurant: "dominos-pizza-majura-nondh-test_surat",
      city: "surat",
    },
    cityState: "21",
    address:
      "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
    locality: "Bhatar Road",
    parentId: 2456,
    unserviceable: false,
    veg: true,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "FREE DELIVERY",
      shortDescriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "",
      shortDescriptionList: [
        {
          meta: "Free Delivery",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "2.1 kms",
    hasSurge: false,
    sla: {
      restaurantId: "74453",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      lastMileTravel: 0,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: false,
    avgRating: "4.0",
    totalRatings: 1000,
    new: false,
  },
  subtype: "basic",
} ;


const AppLayout = () => {
    return (
        <div className="app">
            <Header/>

              {/* if route '/' show body */}
              {/* if route '/about' show about page */}
              {/** if route '/contact' show contact page */}
              {/** this Outlet component renderes based on route as Outlet get replaced by main component */}
           <Outlet />
        </div>
    )
}

//creating configuration for route 

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/contact",
        element: <Contact /> ,
      }

    ] ,
    errorElement: <Error />,
  },
  
]);

//once configuration created provide this configuration to router provider


var root = ReactDOM.createRoot(document.getElementById("root")) ;
root.render(<RouterProvider router={appRouter} />);