

/**
 * 
 * 
 * 
 *<div id="parents">
 <div id="child">
 <h1>I m  h1 tag </h1>
 <h2>I m h2 tag</h2>
 </div>
 </div>

  <div id="child">
 <h1>I m  h1 tag </h1>
 <h2>I m h2 tag</h2>
 </div>
 </div>
 * 
 * 
 */
const parent =React.createElement("div",{id:"parent"},[
  React.createElement("div",{id:"child"},[
    React.createElement("h1",{}," i m an h1 tag"),
    React.createElement("h2", {}," i m h2 tag"),
  ]),

  React.createElement("div",{id:"child2"},[
    React.createElement("h3", {}, " i m an h3 tag"),
    React.createElement("h3",{}, " i m an h4 tag"),
  ]),
]);

console.log(parent)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)