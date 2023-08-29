/*
const element = React.createElement("h1", {}, "welcome to heading tag");
console.log(document.getElementsByClassName("root")[0]);
const rootElem = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
rootElem.render(element);
*/
import React from "react";
import ReactDOM from "react-dom/client";
import CatBox from "./Src/Components/Cat";
import Counter from "./Src/Components/Counter";
const AppLayOut = () => {
    return (
        <>
            <Counter></Counter>
        </>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut></AppLayOut>);