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

Ep 3  :
 pt 3 : JSX is developed by fb, it's JS syntax which's easy to create React Element.
 JSX is totally different from React, it's made to make life easier.
 const jsxHeading = <h1>Nmste react </h1>  this is not html in js, it's jsx suyntax.
 JSX is html or XML - like syntax.



