import { useState } from "react";

function Counter() {
    let [x, setX] = useState(0);
    return (
        <>
            Count:{x} is {(x % 2 == 0) ? "even" : "odd"}
            <button onClick={
                () => {
                    setX(x + 1);
                }
            }>Inc</button>
            <button onClick={
                () => {
                    setX(x - 1);
                }
            }>Dec</button>
        </>
    );
}
export default Counter;