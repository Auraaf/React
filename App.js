
/**  
 <div id = "parent">
    <div id = "child">

        <h1> "I am h1 tag"</h1>
    </div>
 </div>

 similar code in js object form below
**/

const parent = React.createElement(
    "div" , 
    {id : "parent" } ,
    React.createElement( 
        "div" ,
        { id : "child"} , 
        React.createElement(
            "h1" , 
            {id : "heading"},
            "I'm an h1 tag"
        )
      ) 
)


/**  
 <div id = "parent">
    <div id = "child">
        <h1> "I am h1 tag"</h1>
        <h2> "I am h2 tag"</h1>
    </div>
 </div>
 similar code in js object form below
**/


const parentD = React.createElement(
    "div" , 
    {id : "parent" } ,
    React.createElement( 
        "div" ,
        { id : "child"} , 

        //array of children for multiple child.
        [
            React.createElement(
                "h1" , 
                {id : "headin1"},
                "I'm an h1 tag"
            ) ,

            React.createElement(
                "h2" , 
                {id : "headin2"},
                "I'm an h2 tag"
            )
        ]
    ) 
)


const heading = React.createElement("h1" , { id : "heading", xyz:"abc"} , "Hello World from react");
// const root = ReactDOM.createRoot(document.getElementById("core")) ; this will also works.
const root = ReactDOM.createRoot(document.getElementById("root")) ;

console.log(parent);
root.render(parentD);
