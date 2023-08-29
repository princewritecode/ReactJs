import React from "react";
import ReactDOM from "react-dom/client";
import Person from "./Src/Components/Person";
function AppLayOut() {
    return (
        <>
            <Person name="prince" age="27"></Person>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut></AppLayOut>);
