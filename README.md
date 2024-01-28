---- very important repo to follow https://github.com/chetannada/Namaste-React/tree/main

DOM : Documnent object model, it's a programming interface for web documents. 

Ep 2 : Igniting our app 

#parcel 
-Local server
-Dev build 
- hmr
- File matching algortihm

-It;s parcel that makes the 
- consitent haching: 
- code splittin
- differential bundling - to support older brwoser like running it in mozilla, 
- error handling
- Https
- Tree shaking - remove unsed code from app
- 
- ***** https://parceljs.org/
- Different dev and prod bundles 
- Now try to run "npx parcel build index.html" you will get into error because in package.json main is set as entry point 
  remove it.

  dist folder usage when we ran above build command then parcel do all the crazy stuff written abovw and put it in dist folder.
 *** it'll give you one .html and .css and .js file containing all the production ready code .


 parcel-cache got generated from --- npx parcel index.html
 dist from ------------------------- npx parcel build index.html
 node_modules                ------- npm i 

** why .parcel-cache don'thave '/' in .git ignore file
 
ref 1 : 
 
packing it compatible for old version
"browswerlist":[ 
    "last 2 versins"
  ]


Using all above we have created all our own creat reactApp in 

React isn't making the apps fast it's, parcel that make it work efficiently 

Ep 3  : Building the foundation
 pt 3 : JSX is developed by fb, it's JS syntax which's makes easy to create React Element.
 JSX is totally different from React, it's made to make life easier.
 const jsxHeading = <h1>Nmste react </h1>  this is not html in js, it's jsx syntax.
 JSX is html or XML - like syntax.
 **** Is jsx a valid JS code ? No, as js is understand by js engine and js engine understand Only Es6(ECMAScript 6) , write jsx line in console, you'll get syntax error. 
 **** How App.js file is running as JSX? Parcel doing it's job, it transpiles jsx code before it reaches JS engine, Babel is responsible for this transpiling.
 Babel - JS compiler, go to it's site. **** go to babeljs.io ***
 Babel convert jsx to react element( a js object ) => Html Element for browser

 const jsxHeading = <h1>Nmste react </h1> => Babel => React.createElement(h1, , "Nmste React") ;
 attribute in JSX in camelcase.

 Multiple line JSX :

part 4 : React Component
  Class based component : OLD it uses class to create components
  Functional component  : New uses js functions to create components
  
  Functional component : It's a js arrow function which return some jsx component, it always named it with capital 
  letter else it will throw error.
  
  It's a JS funciton which return React component( i.e jsx code is react component as it transpiles to React.createElement() can console.log()) .

  Both are same way to write single line code, later one looks more cool.
  const fn = () => {
    return true ;
  }  
  const fn = () => true ;

  these both way of writing is same 
  1 - const HeadingComponent = () => {
    return <h1 className="heading">Start Reacting</h1> ;
  }

  2 - const HeadingComponent2 = () => (
    <h1 className="heading">Start Reacting</h1> 
  )
     How 2 syntax form, first multi line need () and then one line code don't need return, this one used in industry

    this one also works
     const AppLayout = () => (
    <div >
        <div>
            This one too
        </div>
            Does it works
    </div>
)


  Dif b/w react element n compoentn just is arrow funtion, small n capital  letter
  React element const jsxHeading = (<h1 className="heading">Nmste react </h1> );
  React component const HeadingComponent2 = () => (
    <h1 className="heading">Start Reacting</h1> 
  )

  Compoenent composition : component in a component simple .

  E3P5 : How to put element inside component  
         you can write all js in this {}  if you're inside any component,
         All react element aka jsx is JS oobject we can use it isnide this { title }  ;

         Cross site scritping is handled by {}, malicious attack will get santised inside the curly braces {}

         Two way to call react funtional component. 
         <JsxHeading />
        {/* another way to call component i.e. simply calling js function÷  */}
        {JsxHeading()}

 E4    P1 : Food Ordering App
        Thought process to have clear 
        Planning : 
        Designing : in notebook 
        Low level Planning : 
          Header 
          Body 
          Footer 

        Start with top level component 
         Applayout


        To write inline css you've to call an js object
        as in jsx you need {}  any js so 
        <div style ={ { backGround : "#f0f0f0" }}

      P2 : How to make dynamic food card : 
        Need props : properties is something which you can pass to component, dynamically.

        It's just as normal as arguments to function.
        props are js object, so we need {} to read it.

        destucturing on the fly, unwrap in 
        const {resName, cuisine} = props ;
        Not a react, just a js power .
         ResCard = ({resName, cuisine})

        Data comes in 

        Config driven UI : UI is driven by config, api data is config, if something is present in data we'll show else we can skip that.

        For eg in swiggy there's offer in Delhi, Mumbai but not in Bhopal, than we won't show offer section in Bhopal. See in this way we can control the UI according to data i.e. 

        UI layer + data layer makes you good FE engineer.
        <ResCard 
                    restData = {restObj}
                />
                       
        const ResCard = (props) => {
        /* destucturing assignment */
        const {restData} = props ; }
        
        The {} braces in the line const { restData } = props; are part of JavaScript's destructuring assignment syntax. This syntax allows you to extract specific properties from objects and assign them to variables with the same name.

        In this case, props is an object that holds various properties passed to a React component. By using the destructuring assignment with { restData }, you are extracting the restData property from the props object.

        Here's a breakdown:

        const { restData }: This declares a constant variable named restData.

        = props;: This part of the statement assigns the value of props.restData to the newly declared variable restData.

        Map in js <div className="restaurant-list">

                {
                    restaurantList.map ( (restaurant) => (
                        <ResCard restData = {restaurant} />
                    ))
                }
                
            
            </div>

        ***Warning: Each child in a list should have a unique "key" prop  
        With above implementation got this warning, for that we can restaurant id present with data.

         <ResCard  key = {restaurant.data.id} restData = {restaurant} /> 

         Always give key when doing map, and have a unique id attached to it.

         Why we need keys : 
         Read in copy 

         Bad practise to use index as key, read article. 
         Best practice to use unique Id as key. 
         restaurantList.map ( (restaurant , index ) => (
                        <ResCard  key = {index} restData = {restaurant} />
                    ))


        E5P1 Hooks : We wrote everything in single line, to make seperate file for seperate component.

        Read about react file structure 
        either of .jsx or .js as an extension can be used 

        Always export in component first, then import in main.

        When you've hard coded data like restaurant list, never ever keep in component.
        Also don't keep hard coded string.

        Two type of export : Named export and default epxort 
        Named import : {CDN_url} from ../../ 

        -Default Export/Import 
        export default Component;
        import Component from "path" ;
        - Named Export/Import 
         export const Component ;
         import {Component} from "path" ;

         Can I do default and named side by side.

         Try not to keep 100 line code 

         E5P2 : 51:00 
         event binding like onClick in js.
         1:!5:52

         UI Layer and data layer should be in sync i.e when data changes UI must change accordingly 
         <button
         onClick={  () => {
                restaurantList =  restaurantList.filter( (res) => res.data.avgRating > 4 ) ;
                console.log("length after click : " + restaurantList.length) ;
                }}  > filter

                </button>
         ***button clicking you will notice console has filter data but UI still showing old unfiltered data.

         To resolve this issue that data layer and ui layer remain consitent react give you super power called stateVariable, here Hooks get introduced 
         ****Hooks are Normal js Utility function, there two imp hooks**** 
         - useState()  - suprerpowerful state variable, it's powerful as it maintians the state of the component 
         syntax : ALways declare inside the main component Function body 
          **  I declared the useState outside the function, getting error of 
         import [useState] from "react" ;
         const [list1] = useState([]) ; // this function return variable in form of array, passing default value [] .

         to change list1, you can't do it normally you have to add setList1 function during declaration.
         const[list1 , setList1] = useState([]) ; you can have any name to function but industry standard to use this way. 

         any where you can call this function to change list1, to set list1 to filteredList.
         for eg setList1(filteredList)
         - useEffect()

         **** whenever a state variable updates react re-renders(update the UI) my components****

         React WOrking : https://github.com/acdlite/react-fiber-architecture  *** must read
           destucturing { [] , [] } and [elim1 , elm 2] is later one also called destuctiuring.

---------------------------------------------------------------------------------------------------------------
        E6P1 : Monotithic and Micro service architecture.

        How to get data directly from api 

        Another important hook useEffect, hooks are just normal js function which has some 

        useEffect : it will be called once component is completey rendered.
        syntax : have to pass two arguments one is 1 callback function, 2 array .
        eg useEffect ( ()=> {} , []) ;

        interesting working, you'll notice 

        useEffect( () => {
         console.log("UseEffect get called ") ;
          } , []  ) ;

        console.log("Body rendered") ;

          return (
              <div className="body"> </div>
          )

          if you put break point in line useEffect line and div line you'll notice that useEffect won't run first.
          It's div section that'll run first than 


          Proof => console output :   Body rendered 
                                      UseEffect get called

          Fetch : will return a promise 
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING") ;

          This above code create a cors error, it's created by browser which stope crosss origin accesss.
           For that we've added the extension and turned on it. 

           so we;ve used async await 

           50:59 

           using Spinner showing 
           Shimmer ![Alt text](ShimmerSample.png) 

            1:00:45
           
           flow of steps : 
           load  -> render(useState hook could be used here to re render) -> api (useEffect get called after rendering) -> R

          E6P4 :
          shimmer UI : till the time data get rendered we show fake UI ![Alt text](ShimmerSample.png) 

          E6P5 : 1:33 start from 15 min back about use State usage for changing button 
          useState were used when wwe change when clicked change buttion value.
          //add stateVariable and function, 
            const [btnValue, setBtnValue] = useState('login') ;

            changeBtnValue =() => {
                setBtnValue('logout');
            }

            react is faster because it has concept of Virtual Dom, where react fibre algorithm get introduced 
            this compares the differences b/w the virtual doms oonly the changed part and then re render it 
            efficiently.


          E6.1 Prt 
          config driven UI: for eg take swiggy UI: some of the city won't have 

          Ep6.2 How to make website works without cors plugin
            making call from one domain to another domain not allowed by borwser.
            just add crossproxy.io  it has 40 request limit. 
------------------------------------------------------------------------------------------------------------------------
         Ep 7 Routing and useEffect() usability 
         useEffect( () => {
 
         } , [] )    ---> basic syntax of useEffect . 2 arguments - ()=> {} callback function : mandatory , [] dependecy array.

         *** if no dependecy array is there use will be called everytime component render.
         *** if dependecy array is empty => [], useEffect is called on initial render.
         *** if dependecy array contain some dependecy for eg [btnValue], then useEffect will be only when
              dependecy changes. 

        useState => basic nature is to set local state variable, so declaring outside the component body will throw error. Also never use this inside if condition or for loop. it'll messes up React functionality

        --->>> React Router 

        //creating configuration for route  in App.js component 

          const appRouter = createBrowserRouter([
            {
              path: "/",
              element: <About />
            },
            {
              path: "/about",
              element: <About />
            }
          ]);

          //once configuration created provide this configuration to router provider

          root.render(<RouterProvider router={appRouter} />);
          *** read on this site https://reactrouter.com/en/main/routers/create-browser-router

          important hook get introduced that is to show Error cause by routing.

          pitfall :: not importing the error component in App.js



          



          









      


       
        





  
          













