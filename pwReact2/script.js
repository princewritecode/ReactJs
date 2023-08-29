import React from "react";
import ReactDOM from "react-dom/client";
import Button from "../pwReact2/Src/Components/Button";
function App() {
    return (
        <>
            <Button text="text" ></Button>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App></App>);