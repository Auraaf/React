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
        





  
          













