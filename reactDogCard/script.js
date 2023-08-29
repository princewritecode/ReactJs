/*
const element = React.createElement("h1", {}, "welcome to heading tag");
console.log(document.getElementsByClassName("root")[0]);
const rootElem = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
rootElem.render(element);
*/
import React from "react";
import ReactDOM from "react-dom";
import CatBox from "./Src/Components/Cat";
const AppLayOut = () => {
    return (
        <>
            <CatBox name="Bunty"></CatBox>
        </>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut></AppLayOut>);