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

 E4P1 : Food Ordering App
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


  
          













