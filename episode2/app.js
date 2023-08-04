import React from "react";
import ReactDOM from "react-dom/client";
//TODO Learning React creating basic tags using react and also nested element using react
/**
 *
 * <div>
 *     <div>
 *         <h1>"Hello from h1 tag"</h1>
 *    </div>
 *  <div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 *
 *
 */
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },

        [React.createElement("h1", { id: 'heading' }, "Hello from the future richest person that is prince"),
        React.createElement("h2", { id: 'heading2' }, "Hello from h2 tag")]));
console.log(parent);
//we can pass multiple children for that we have to convert in to array
/*
const heading = React.createElement("h1", { id: 'heading' }, "Hell World from React");
console.log(heading);
console.log(heading.props.children);
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the element to a container
root.render(parent);
//while rendering in to dom converts in to html and put